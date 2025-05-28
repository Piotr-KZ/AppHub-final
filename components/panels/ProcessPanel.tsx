import React from 'react';

export default function ProcessPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📁 Proces realizacji atomów</h2>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Tytuł</th>
            <th className="border px-2 py-1">Etap</th>
            <th className="border px-2 py-1">Tryb AI</th>
            <th className="border px-2 py-1">Zgodność</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Akcje</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-50">
            <td className="border px-2 py-1">A1.1.1</td>
            <td className="border px-2 py-1">Utwórz layout</td>
            <td className="border px-2 py-1">ETAP 1</td>
            <td className="border px-2 py-1">PR</td>
            <td className="border px-2 py-1">✅ 94%</td>
            <td className="border px-2 py-1">zatwierdzony</td>
            <td className="border px-2 py-1 space-x-1">
              <button className="bg-green-600 text-white px-2 rounded">PR</button>
              <button className="bg-yellow-500 text-white px-2 rounded">N</button>
              <button className="bg-red-600 text-white px-2 rounded">S</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
