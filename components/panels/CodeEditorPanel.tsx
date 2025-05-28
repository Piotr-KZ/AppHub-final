// components/panels/CodeEditorPanel.tsx

import { useEffect, useState } from 'react';

export const CodeEditorPanel = () => {
  const [filePath, setFilePath] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const availableFiles = [
    'pages/index.tsx',
    'ai/prGenerator.ts',
    'ai/retryManager.ts',
    'ai/semanticValidator.ts',
    'components/panels/AdminPanel.tsx',
    'components/panels/ProcessPanel.tsx',
  ];

  const fetchFileContent = async (path: string) => {
    setIsLoading(true);
    const res = await fetch(`/api/read-file?filePath=${encodeURIComponent(path)}`);
    const data = await res.json();
    if (res.ok) {
      setContent(data.content || '');
    } else {
      setMessage(data.error || 'Błąd odczytu pliku');
    }
    setIsLoading(false);
  };

  const saveChanges = async () => {
    setIsLoading(true);
    const res = await fetch('/api/update-file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filePath, content }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('✅ Zapisano pomyślnie');
    } else {
      setMessage(`❌ Błąd: ${data.error}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (filePath) fetchFileContent(filePath);
  }, [filePath]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧠 Edytor kodu (self-edit)</h2>
      <select onChange={e => setFilePath(e.target.value)} value={filePath}>
        <option value="">-- Wybierz plik --</option>
        {availableFiles.map(file => (
          <option key={file} value={file}>{file}</option>
        ))}
      </select>

      {filePath && (
        <>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={20}
            style={{ width: '100%', marginTop: '1rem', fontFamily: 'monospace' }}
          />
          <button onClick={saveChanges} disabled={isLoading} style={{ marginTop: '1rem' }}>
            💾 Zapisz
          </button>
        </>
      )}

      {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}
    </div>
  );
};
