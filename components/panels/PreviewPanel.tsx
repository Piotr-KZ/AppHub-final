=== PreviewPanel.tsx ===
import React from 'react';

export default function PreviewPanel() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">👁 Podgląd aplikacji</h2>

      <div className="border rounded p-4 bg-white text-sm">
        <p>📦 Tu wyświetlany jest interaktywny widok Twojej aplikacji wygenerowanej przez AI.</p>
        <p className="mt-2">Zobacz jak wygląda UI na podstawie aktualnego kodu (h2) komponentów.</p>
        <div className="mt-4 text-center border bg-gray-50 p-8 italic text-gray-400">
          (Widok aplikacji do osadzenia jako iframe lub live preview build)
        </div>
      </div>
    </div>
  );
}
