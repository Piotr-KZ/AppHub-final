import fs from 'fs';
import path from 'path';

const base = path.resolve('./data');

export const readJSON = (file: string) => {
  const full = path.join(base, file);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, 'utf-8');
  return JSON.parse(raw);
};

export const writeJSON = (file: string, data: any) => {
  const full = path.join(base, file);
  fs.writeFileSync(full, JSON.stringify(data, null, 2));
};

export const backupJSON = (file: string) => {
  const content = readJSON(file);
  const backupFile = file.replace('.json', '_backup.json');
  writeJSON(backupFile, content);
};
