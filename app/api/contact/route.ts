import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getDb, ensureTable } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, projectType, budget, projectDetails, attachmentName, fileData } =
      await req.json();

    if (!name || !email || !projectDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sql = getDb();
    await ensureTable();

    await sql`
      INSERT INTO contact_submissions
        (name, email, company, project_type, budget, project_details, attachment_name)
      VALUES
        (${name}, ${email}, ${company || null}, ${projectType || null},
         ${budget || null}, ${projectDetails}, ${attachmentName || null})
    `;

    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await resend.emails.send({
          from: 'nishanspace <onboarding@resend.dev>',
          to: 'nishanpace@gmail.com',
          subject: `New inquiry from ${name}`,
          html: `
            <h2>New contact form submission</h2>
            <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px;">
              <tr><td style="padding:8px 12px;color:#888;width:140px;">Name</td><td style="padding:8px 12px;"><strong>${name}</strong></td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px 12px;color:#888;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 12px;color:#888;">Company</td><td style="padding:8px 12px;">${company || '—'}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px 12px;color:#888;">Project type</td><td style="padding:8px 12px;">${projectType || '—'}</td></tr>
              <tr><td style="padding:8px 12px;color:#888;">Budget</td><td style="padding:8px 12px;">${budget || '—'}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px 12px;color:#888;">Attachment</td><td style="padding:8px 12px;">${attachmentName || '—'}</td></tr>
              <tr><td style="padding:8px 12px;color:#888;vertical-align:top;">Details</td><td style="padding:8px 12px;white-space:pre-wrap;">${projectDetails}</td></tr>
            </table>
            <p style="margin-top:24px;font-size:13px;color:#aaa;">Sent from nishanspace.com contact form</p>
          `,
          attachments: fileData && attachmentName ? [{
            filename: attachmentName,
            content: fileData,
          }] : undefined,
        });
        if (emailRes.error) {
          console.error('Resend error:', emailRes.error);
        }
      } catch (emailErr) {
        console.error('Email send failed:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact submission error:', err);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}
