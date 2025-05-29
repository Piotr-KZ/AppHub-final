// components/panels/SignPanel.tsx

import { useState } from 'react';

export default function SignPanel() {
  const [version, setVersion] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSign = async () => {
    setStatus('');
    setError('');

    try {
      const res = await fetch('/api/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version, author, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || 'Błąd podpisu');
      setStatus('✔️ Podpisano pomyślnie');
    } catch (err: any) {
      setError(err.message || 'Błąd podpisu');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🔏 Podpis wersji</h2>
      <input
        type="text"
        placeholder="Wersja"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Komentarz / uzasadnienie"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-28 p-2 border rounded"
      />
      <button
        onClick={handleSign}
        disabled={!version || !author || !message}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Podpisz wersję
      </button>

      {status && <p className="text-green-600">{status}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
