=== ai/semanticValidator.ts ===
export const validateSemanticMatch = (h1: string, h2: string): number => {
  const norm = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, '').slice(0, 300);

  const a = norm(h1);
  const b = norm(h2);

  const match = [...a].filter((char, i) => char === b[i]).length;
  return Math.round((match / Math.max(a.length, b.length)) * 100);
};
