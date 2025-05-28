import { generateH2 } from './prGenerator';
import { validateSemanticMatch } from './semanticValidator';

export const attemptPR = async (
  h1: string,
  maxAttempts = 3,
  threshold = 85
): Promise<{ h2: string; valid: boolean; attempts: number; score: number }> => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const h2 = await generateH2(h1);
    const score = validateSemanticMatch(h1, h2);
    attempts++;

    if (score >= threshold) {
      return { h2, valid: true, attempts, score };
    }
  }

  return { h2: '', valid: false, attempts, score: 0 };
};
