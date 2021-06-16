import { useState, createContext, ReactNode, useEffect } from 'react';

interface GlobalContextData {
  selectedTheme: string;
  themeSwitcher: (themeName: string) => void;
}

export const GlobalContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const storagedTheme = localStorage.getItem('@Theme');

    if (storagedTheme) {
      return storagedTheme;
    }

    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('@Theme', selectedTheme);
  }, [selectedTheme]);

  function themeSwitcher(themeName: string) {
    setSelectedTheme(themeName);
  }

  return (
    <GlobalContext.Provider value={{ selectedTheme, themeSwitcher }}>
      {children}
    </GlobalContext.Provider>
  );
}
