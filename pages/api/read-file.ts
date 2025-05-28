import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filePath } = req.query;
  if (typeof filePath !== 'string') {
    return res.status(400).json({ error: 'Brak ścieżki pliku' });
  }

  const safeRoot = process.cwd();
  const fullPath = path.join(safeRoot, filePath);

  if (!fullPath.startsWith(safeRoot)) {
    return res.status(403).json({ error: 'Zabronione' });
  }

  try {
    const content = await fs.readFile(fullPath, 'utf-8');
    return res.status(200).json({ content });
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
}
