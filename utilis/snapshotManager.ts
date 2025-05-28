// utils/snapshotManager.ts

import { promises as fs } from 'fs';
import path from 'path';

/**
 * Zapisuje snapshot zmienianego pliku do katalogu /snapshots/
 * z nazwą zawierającą timestamp, np. AdminPanel.tsx.2025-05-28-10-22.tsx
 */
export const saveSnapshot = async (filePath: string, content: string) => {
  const now = new Date();
  const timeStamp = now.toISOString().replace(/[:.]/g, '-');
  const baseName = path.basename(filePath);
  const ext = path.extname(baseName);
  const nameOnly = path.basename(baseName, ext);

  const snapshotDir = path.join(process.cwd(), 'snapshots');
  const snapshotPath = path.join(snapshotDir, `${nameOnly}.${timeStamp}${ext}`);

  await fs.mkdir(snapshotDir, { recursive: true });
  await fs.writeFile(snapshotPath, content, 'utf-8');
};
