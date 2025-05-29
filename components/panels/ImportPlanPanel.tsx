// components/panels/ImportPlanPanel.timport { useEffect, useState } from 'react';

export default function ImportPlanPanel() {
  const [plan, setPlan] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/plan')
      .then((res) => res.json())
      .then((json) => setPlan(json))
      .catch(() => setError('❌ Błąd ładowania plan.json'));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🧩 Import planu projektu</h2>
      {error && <p className="text-red-500">{error}</p>}
      {!plan && <p>⏳ Wczytywanie...</p>}
      {plan && plan.etapy && (
        <ul className="space-y-4">
          {plan.etapy.map((etap: any, i: number) => (
            <li key={i} className="border p-3 rounded">
              <strong className="block text-lg">{etap.nazwa}</strong>
              <ul className="ml-4 list-disc">
                {etap.zadania.map((zad: any, j: number) => (
                  <li key={j}>
                    {zad.nazwa}
                    {zad.atomy && (
                      <ul className="ml-4 list-square text-sm text-gray-700">
                        {zad.atomy.map((a: string, k: number) => (
                          <li key={k}>🧬 {a}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
