// components/panels/SnapshotPanel.tsx

import { useState } from 'react';

export default function SnapshotPanel() {
  const [message, setMessage] = useState('');
  const [version, setVersion] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSave = async () => {
    setStatus('');
    setError('');

    try {
      const res = await fetch('/api/snapshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || 'Błąd serwera');
      setStatus('✔️ Snapshot zapisany');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🗂️ Snapshot projektu</h2>
      <input
        type="text"
        placeholder="Wersja (np. 1.1.0)"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Opis zmian"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-28 p-2 border rounded"
      />
      <button
        onClick={handleSave}
        disabled={!message || !version}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Zapisz snapshot
      </button>

      {status && <p className="text-green-600">{status}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
