import '../styles/globals.css'
// index.tsx – Strona powitalna AppHub v3.1
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2 text-blue-800">🚀 AppHub v3.1</h1>
      <p className="text-gray-700 text-sm max-w-xl text-center">
        Aplikacja do automatycznego generowania aplikacji AI z pełną walidacją, rollbackiem i podpisem.  
        Skorzystaj z panelu API lub dołącz frontend aby korzystać z interfejsu wizualnego.
      </p>
      <div className="mt-6 text-sm text-gray-500">
        <code>pages/api/...</code> — dostępne endpointy API
      </div>
    </main>
  );
}
