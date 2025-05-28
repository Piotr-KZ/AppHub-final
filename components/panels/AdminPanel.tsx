import React from 'react';

export default function AdminPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">⚙️ Panel administratora</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {/* Konta użytkowników */}
        <div className="border p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold mb-2">👤 Konta</h3>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Zarządzaj użytkownikami AI (PR, N, S, Strateg, Walidator)</li>
            <li>Dodaj/usuń loginy lub przypisz role</li>
          </ul>
        </div>

        {/* Ustawienia */}
        <div className="border p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold mb-2">⚙️ Ustawienia systemu</h3>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Zmień język interfejsu</li>
            <li>Ustawienia logowania, domyślne retry, walidacja</li>
          </ul>
        </div>

        {/* Import projektu */}
        <div className="border p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold mb-2">📥 Import projektu</h3>
          <p>Wgraj plik `plan.json` lub `project_state.json` z zewnętrznego projektu.</p>
          <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded text-sm">Wybierz plik</button>
        </div>

        {/* Eksport i snapshot */}
        <div className="border p-4 bg-white rounded shadow-sm">
          <h3 className="font-semibold mb-2">📤 Eksport</h3>
          <p>Wygeneruj snapshot projektu jako ZIP wraz z podpisem i changelogiem.</p>
          <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded text-sm">Eksportuj ZIP</button>
        </div>
      </div>
    </div>
  );
}
