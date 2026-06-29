import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTable } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, projectType, budget, projectDetails, attachmentName } =
      await req.json();

    if (!name || !email || !projectDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await ensureTable();

    await sql`
      INSERT INTO contact_submissions
        (name, email, company, project_type, budget, project_details, attachment_name)
      VALUES
        (${name}, ${email}, ${company || null}, ${projectType || null},
         ${budget || null}, ${projectDetails}, ${attachmentName || null})
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact submission error:', err);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}
