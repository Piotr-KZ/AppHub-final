// components/panels/RollbackPanel.tsx

import { useEffect, useState } from 'react';

export default function RollbackPanel() {
  const [states, setStates] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/project_state')
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch(() => setError('Błąd pobierania wersji projektu.'));
  }, []);

  const handleRollback = async (version: string) => {
    try {
      const res = await fetch('/api/rollback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version }),
      });

      if (!res.ok) throw new Error();
      setStatus(`✔️ Cofnięto do wersji: ${version}`);
    } catch {
      setError('Nie udało się cofnąć.');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⏪ Rollback</h2>
      {error && <p className="text-red-500">{error}</p>}
      {status && <p className="text-green-600">{status}</p>}
      <ul className="space-y-2">
        {states.map((s, i) => (
          <li key={i} className="flex justify-between items-center border p-2 rounded">
            <span>
              <strong>{s.version}</strong> – {s.message}
            </span>
            <button
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => handleRollback(s.version)}
            >
              Cofnij
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
