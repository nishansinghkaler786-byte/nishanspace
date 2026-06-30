import { neon } from '@neondatabase/serverless';

export function getDb() {
  return neon(process.env.DATABASE_URL!);
}

export async function ensureTable() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id              SERIAL PRIMARY KEY,
      name            TEXT NOT NULL,
      email           TEXT NOT NULL,
      company         TEXT,
      project_type    TEXT,
      budget          TEXT,
      project_details TEXT,
      attachment_name TEXT,
      created_at      TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}
