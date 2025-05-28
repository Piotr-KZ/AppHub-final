// context/EditorContext.tsx

import { createContext, useContext, useState } from 'react';

type EditorContextType = {
  content: string;
  setContent: (val: string) => void;
};

const EditorContext = createContext<EditorContextType | null>(null);

export const useEditorContext = () => useContext(EditorContext)!;

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState('');
  return (
    <EditorContext.Provider value={{ content, setContent }}>
      {children}
    </EditorContext.Provider>
  );
};
