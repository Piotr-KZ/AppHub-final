=== HistoryPanel.tsx ===
import React from 'react';

const mockHistory = [
  {
    type: 'Release',
    version: 'v2.4.1',
    date: '2025-05-21 21:55',
    author: 'Walidator',
    hash: 'release_hash_xyz123'
  },
  {
    type: 'Rollback',
    version: 'v2.4.0',
    date: '2025-05-20 17:38',
    author: 'Strateg',
    hash: 'rollback_9f44d'
  }
];

export default function HistoryPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📜 Historia projektu</h2>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Typ</th>
            <th className="border px-2 py-1">Wersja</th>
            <th className="border px-2 py-1">Data</th>
            <th className="border px-2 py-1">Autor</th>
            <th className="border px-2 py-1">Hash</th>
            <th className="border px-2 py-1">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {mockHistory.map((entry, i) => (
            <tr key={i} className="hover:bg-blue-50">
              <td className="border px-2 py-1">{entry.type}</td>
              <td className="border px-2 py-1">{entry.version}</td>
              <td className="border px-2 py-1">{entry.date}</td>
              <td className="border px-2 py-1">{entry.author}</td>
              <td className="border px-2 py-1">{entry.hash}</td>
              <td className="border px-2 py-1">
                <button className="text-blue-600 underline text-xs">Zobacz</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
