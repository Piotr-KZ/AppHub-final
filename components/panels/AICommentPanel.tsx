// components/panels/AICommentPanel.tsx
import { useState } from 'react';

export default function AICommentPanel() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setResponse('');
    setError('');

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      if (!res.ok) throw new Error('Błąd AI');
      const data = await res.json();
      setResponse(data.comment);
    } catch (err: any) {
      setError(err.message || 'Nieznany błąd');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🧠 Komentarz AI</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Wklej kod lub pytanie..."
        className="w-full h-40 p-2 border rounded font-mono"
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !input.trim()}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {loading ? 'Analiza...' : 'Poproś AI o komentarz'}
      </button>

      {response && (
        <div className="mt-4 p-3 bg-gray-100 border rounded whitespace-pre-wrap">
          <h3 className="font-semibold">✅ Odpowiedź AI:</h3>
          <pre>{response}</pre>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
