=== LiveScreenPanel.tsx ===
import React, { useState } from 'react';
import IframePreview from './IframePreview';
import AiCommentPanel from './AiCommentPanel';

export default function LiveScreenPanel() {
  const [mode, setMode] = useState<'pasywny' | 'aktywny'>('pasywny');
  const [url, setUrl] = useState('https://example.com');

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Pasek górny */}
      <div className="flex justify-between p-2 bg-gray-100 border-b">
        <input
          className="w-4/5 border px-2 py-1 text-sm"
          placeholder="Wklej adres strony"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <select
          className="text-sm border px-2 py-1"
          value={mode}
          onChange={(e) => setMode(e.target.value as 'pasywny' | 'aktywny')}
        >
          <option value="pasywny">👁 Tryb pasywny</option>
          <option value="aktywny">🖱 Tryb aktywny</option>
        </select>
      </div>

      {/* Podzielony ekran */}
      <div className="flex flex-grow">
        {/* Lewy: iframe */}
        <div className="w-3/5 border-r">
          <IframePreview url={url} />
        </div>

        {/* Prawy: czat */}
        <div className="w-2/5 bg-gray-50 p-4 overflow-y-auto">
          <AiCommentPanel mode={mode} />
        </div>
      </div>
    </div>
  );
}
