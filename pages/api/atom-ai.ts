import { NextApiRequest, NextApiResponse } from 'next';
import { attemptPR } from '../../ai/retryManager';
import { proposeNewH1 } from '../../ai/strategModule';
import { readJSON, writeJSON } from '../../utils/projectStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { atomId } = req.body;
    const state = readJSON('project_state.json');
    const atom = state.atoms.find((a: any) => a.id === atomId);
    if (!atom) return res.status(404).json({ error: 'Atom not found' });

    const result = await attemptPR(atom.h1, 3, 85);

    if (result.valid) {
      atom.h2 = result.h2;
      atom.status = 'PR';
      atom.valid = true;
      atom.retry = result.attempts;
    } else {
      atom.status = 'S';
      atom.newH1 = proposeNewH1(atom.h1);
    }

    writeJSON('project_state.json', state);
    res.status(200).json({
      message: 'AI PR completed',
      result,
      updatedAtom: atom,
    });
  } catch (err) {
    res.status(500).json({ error: 'AI PR failed', detail: err });
  }
}
