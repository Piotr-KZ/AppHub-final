=== utils/changelogBuilder.ts ===
import fs from 'fs';
import path from 'path';

export const appendChangelog = (version: string, hash: string, notes: string[] = []) => {
  const file = path.resolve('./data/changelog.md');
  const entry = [
    `## 🔖 Wersja ${version}`,
    `🕒 Data: ${new Date().toISOString()}`,
    `🔐 Hash: ${hash}`,
    ...notes.map((n) => `- ${n}`),
    ''
  ].join('\n');

  fs.appendFileSync(file, entry + '\n');
};
