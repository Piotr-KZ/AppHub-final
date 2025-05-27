=== utils/snapshotManager.ts ===
import { readJSON, writeJSON } from './projectStore';
import fs from 'fs';
import path from 'path';

const snapPath = path.resolve('./data/snapshots');

export const createSnapshot = (version: string) => {
  if (!fs.existsSync(snapPath)) fs.mkdirSync(snapPath);

  const plan = readJSON('plan.json');
  const state = readJSON('project_state.json');

  writeJSON(`snapshots/${version}_plan.json`, plan);
  writeJSON(`snapshots/${version}_state.json`, state);
};

export const listSnapshots = () => {
  return fs.readdirSync(snapPath).filter(f => f.endsWith('.json'));
};
