import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // musi być ustawiona w .env.local lub na Vercel
});

export const generateH2 = async (h1: string): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Jesteś programistą AI tworzącym komponenty frontendowe' },
      { role: 'user', content: `Napisz komponent frontendowy na podstawie opisu:\n${h1}` }
    ],
    temperature: 0.4,
    max_tokens: 600
  });

  return response.choices[0]?.message?.content || '';
};
