import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';
import { useGlobal } from '../hooks/useGlobal';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '../themes/themes';

const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Nunito Sans', sans-serif;
    --home-font-size: 1rem;
    --details-font-size: 0,875rem;
    --light-weight-font: 300;
    --regular-weight-font: 600;
    --bold-weight-font: 800;
    --shadow: 3px 3px 3px ${({ theme }) => theme.collors.shadow};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.collors.background.primary};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    cursor: pointer;
  }

  #root {
    position: relative;
  }

  body, input, button {
    font-family: var(--font);
    font-weight: var(--regular-weight-font);
    font-size: var(--home-font-size);
    color: ${({ theme }) => theme.collors.text.primary};
  }

  button:focus, input:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.collors.activeItens};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { selectedTheme } = useGlobal();
  let theme;

  switch (selectedTheme) {
    case 'light':
      theme = lightMode;
      break;
    case 'dark':
      theme = darkMode;
      break;
    default:
      theme = lightMode;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
