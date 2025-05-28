// pages/api/update-file.ts

import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { filePath, content } = req.body;

  if (!filePath || !content) {
    return res.status(400).json({ error: 'Missing filePath or content' });
  }

  // 🔐 Zabezpieczenie: nie pozwól wyjść poza projekt
  const safeRoot = process.cwd();
  const fullPath = path.join(safeRoot, filePath);

  if (!fullPath.startsWith(safeRoot)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    await fs.writeFile(fullPath, content, 'utf-8');
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
}
