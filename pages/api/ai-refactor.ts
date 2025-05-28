// pages/api/ai-refactor.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { originalCode, prompt } = req.body;

  if (!originalCode || !prompt) {
    return res.status(400).json({ error: 'Brak kodu lub promptu' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Jesteś pomocnym refaktoryzatorem TypeScript i React.' },
        { role: 'user', content: `Zrefaktoruj ten kod:\n\n${originalCode}\n\n${prompt}` },
      ],
      temperature: 0.3,
      max_tokens: 1800,
    });

    const aiCode = response.choices[0]?.message?.content || '';
    return res.status(200).json({ refactoredCode: aiCode });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
