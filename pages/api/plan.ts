import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'plan.json');

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(content);
    res.status(200).json(json);
  } catch {
    res.status(500).json({ error: 'Błąd odczytu plan.json' });
  }
}
