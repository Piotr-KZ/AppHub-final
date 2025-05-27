=== ai/prGenerator.ts ===
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateH2 = async (h1: string): Promise<string> => {
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Jesteś programistą AI tworzącym komponenty frontendowe.' },
      { role: 'user', content: `Napisz komponent frontendowy na podstawie opisu:\n${h1}` },
    ],
    temperature: 0.4,
    max_tokens: 600,
  });

  return response.data.choices[0].message?.content || '';
};
