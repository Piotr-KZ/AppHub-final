// components/panels/HomePanel.tsx

import React from 'react';

export default function HomePanel() {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">👋 Witaj w AppHub</h2>

      {/* Statystyki */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 border rounded text-center">
          <div className="text-lg font-semibold">🔧 12</div>
          <div className="text-sm text-gray-600">Aktywne atomy</div>
        </div>
        <div className="p-4 bg-green-50 border rounded text-center">
          <div className="text-lg font-semibold">✅ 8</div>
          <div className="text-sm text-gray-600">Zatwierdzone AI</div>
        </div>
        <div className="p-4 bg-yellow-50 border rounded text-center">
          <div className="text-lg font-semibold">3</div>
          <div className="text-sm text-gray-600">Release'y oczekujące</div>
        </div>
      </div>

      {/* Lista działań AI */}
      <h3 className="text-md font-semibold mb-2">📋 Działania AI</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Generowanie `h2` dla komponentów UI</li>
        <li>Weryfikacja semantyczna i stylistyczna</li>
        <li>Walidacja z wymaganiami projektu</li>
        <li>Tworzenie changeloga i podpisów release</li>
        <li>Refaktoryzacja kodu na żądanie</li>
      </ul>
    </div>
  );
}

