import { createContext, ReactNode, useState } from 'react';

interface ModalContextData {
  status: string;
  toggleStatus: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [status, setStatus] = useState('');

  function toggleStatus() {
    switch (status) {
      case 'open':
        setStatus('closed');
        break;
      case 'closed':
        setStatus('open');
        break;
      default:
        setStatus('open');
        break;
    }
  }

  return (
    <ModalContext.Provider value={{ status, toggleStatus }}>
      {children}
    </ModalContext.Provider>
  );
}
