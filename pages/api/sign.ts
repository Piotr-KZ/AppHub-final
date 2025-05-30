// pages/api/sign.ts

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { version, author, message } = req.body;
  const filePath = path.join(process.cwd(), 'data', 'sign.json');

  try {
    const current = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : [];

    const now = new Date().toISOString();

    current.push({ version, author, message, date: now });

    fs.writeFileSync(filePath, JSON.stringify(current, null, 2));

    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: 'Błąd zapisu podpisu' });
  }
}
