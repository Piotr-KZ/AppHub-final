// index.tsx – Strona powitalna AppHub v3.1

import React from 'react';
import Link from 'next/link';
import AdminPanel from '../components/panels/AdminPanel';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-2 text-blue-800">🚀 AppHub v3.1</h1>

      <p className="text-gray-700 text-sm max-w-xl text-center">
        Aplikacja do automatycznego generowania aplikacji AI z pełną walidacją, rollbackiem i podpisem.
        Skorzystaj z panelu API lub dołącz frontend aby korzystać z interfejsu wizualnego.
      </p>

      <div className="mt-6 text-sm text-gray-500">
        <code>pages/api/...</code> — dostępne endpointy API
      </div>

      {/* 🔗 MENU */}
      <nav className="mt-10 space-x-6">
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          📊 Dashboard
        </Link>
        <Link href="/admin" className="text-blue-600 hover:underline">
          ⚙️ Panel Administratora
        </Link>
        <Link href="/ai" className="text-blue-600 hover:underline">
          🤖 Refactor AI
        </Link>
      </nav>

      {/* 🔽 PODGLĄD PANELU */}
      <section className="mt-12 w-full max-w-4xl">
        <AdminPanel />
      </section>
    </main>
  );
}

