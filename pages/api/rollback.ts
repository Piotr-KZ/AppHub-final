// pages/api/rollback.ts

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { version } = req.body;
  const filePath = path.join(process.cwd(), 'data', 'rollback.json');

  try {
    fs.writeFileSync(filePath, JSON.stringify({ version, rollbackAt: new Date().toISOString() }, null, 2));
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: 'Nie udało się cofnąć' });
  }
}
