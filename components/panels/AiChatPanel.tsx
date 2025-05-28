import React, { useState } from 'react';

export default function AiChatPanel() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `🧑 Ty: ${input}`, `🤖 AI: (tu odpowiedź AI na: "${input}")`]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">💬 Czat z AI</h2>

      <div className="flex-grow bg-white border p-4 rounded overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{msg}</div>
        ))}
      </div>

      <div className="mt-4 flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Zadaj pytanie..."
          className="flex-grow border px-3 py-1 rounded text-sm"
        />
        <button
          onClick={handleSend}
          className="px-4 py-1 bg-blue-600 text-white rounded text-sm"
        >
          Wyślij
        </button>
      </div>
    </div>
  );
}
