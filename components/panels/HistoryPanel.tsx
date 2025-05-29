// components/panels/HistoryPanel.tsx

import { useEffect, useState } from 'react';

interface HistoryEntry {
  version: string;
  date: string;
  author?: string;
  description?: string;
  hash?: string;
}

export default function HistoryPanel() {
  const [data, setData] = useState<HistoryEntry[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/history')
      .then((res) => res.json())
      .then((json) => setData(json.entries || []))
      .catch(() => setError('❌ Błąd pobierania historii.'));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">📜 Historia wersji projektu</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Wersja</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Opis</th>
            <th className="border p-2">Autor</th>
            <th className="border p-2">Hash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <td className="border p-2">{entry.version}</td>
              <td className="border p-2">{entry.date}</td>
              <td className="border p-2">{entry.description}</td>
              <td className="border p-2">{entry.author || '–'}</td>
              <td className="border p-2">{entry.hash?.slice(0, 8) || '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

