// components/layouts/DashboardLayout.tsx

import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📂 AppHub Menu</h2>
        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block hover:text-blue-600">🏠 Home</a>
          <a href="/dashboard/admin" className="block hover:text-blue-600">⚙️ Panel Admina</a>
          <a href="/dashboard/refactor" className="block hover:text-blue-600">🤖 Refactor AI</a>
          <a href="/dashboard/live" className="block hover:text-blue-600">📺 Live Screen</a>
          <a href="/dashboard/history" className="block hover:text-blue-600">📜 Historia</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
