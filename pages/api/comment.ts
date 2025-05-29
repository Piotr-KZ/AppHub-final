// pages/api/comment.ts

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { input } = req.body;

  const prompt = `Przeanalizuj poniższy kod i podaj komentarz lub sugestię:\n\n${input}`;

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'Jesteś specjalistą od code review.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.4,
      }),
    });

    const json = await aiRes.json();
    const comment = json.choices?.[0]?.message?.content || 'Brak komentarza';
    res.status(200).json({ comment });
  } catch {
    res.status(500).json({ comment: 'Błąd AI lub brak odpowiedzi' });
  }
}
