import { useState } from 'react';

export const RefactorAI = () => {
  const [filePath, setFilePath] = useState('');
  const [originalCode, setOriginalCode] = useState('');
  const [prompt, setPrompt] = useState('');
  const [refactoredCode, setRefactoredCode] = useState('');
  const [message, setMessage] = useState('');

  const availableFiles = [
    'pages/index.tsx',
    'ai/prGenerator.ts',
    'components/panels/AdminPanel.tsx',
  ];

  const fetchOriginal = async (path: string) => {
    const res = await fetch(`/api/read-file?filePath=${path}`);
    const data = await res.json();
    if (res.ok) setOriginalCode(data.content || '');
  };

  const submit = async () => {
    const res = await fetch('/api/ai-refactor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalCode, prompt }),
    });
    const data = await res.json();
    if (res.ok) {
      setRefactoredCode(data.refactoredCode || '');
      setMessage('✅ Gotowe');
    } else {
      setMessage(`❌ Błąd: ${data.error}`);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🤖 Refaktor AI</h2>

      <select onChange={e => {
        setFilePath(e.target.value);
        fetchOriginal(e.target.value);
      }} value={filePath}>
        <option value="">-- Wybierz plik --</option>
        {availableFiles.map(f => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>

      {filePath && (
        <>
          <textarea
            placeholder="Co chcesz zrefaktorować?"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            rows={3}
            style={{ width: '100%', marginTop: '1rem' }}
          />

          <button onClick={submit} style={{ marginTop: '0.5rem' }}>
            🔁 Refaktoruj
          </button>

          {refactoredCode && (
            <>
              <h4>💡 Kod po AI:</h4>
              <textarea
                value={refactoredCode}
                rows={20}
                style={{ width: '100%', marginTop: '1rem', fontFamily: 'monospace' }}
                readOnly
              />
            </>
          )}
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};
