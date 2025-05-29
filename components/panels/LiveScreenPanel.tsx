// components/panels/LiveScreenPanel.tsx

import { useState } from 'react';

export default function LiveScreenPanel() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">📺 Podgląd na żywo</h2>
      <p className="text-gray-600">Tu pojawi się dynamiczny podgląd zmian w aplikacji (np. snapshot, rollback, AI info).</p>

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Tu można wpisać testowe dane wejściowe"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="border bg-gray-100 p-3 rounded whitespace-pre-wrap">
        {text || '⏳ Brak danych do podglądu.'}
      </div>
    </div>
  );
}
