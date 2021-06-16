import { DefaultTheme } from 'styled-components';

export const lightMode: DefaultTheme = {
  id: 'T_001',
  name: 'light',
  collors: {
    text: {
      primary: '#111517',
      secondary: '#858585',
    },
    background: {
      primary: '#fafafa',
      secondary: '#ffffff',
    },
    shadow: '#cccccc',
    activeItens: '#fc5404',
  },
};

export const darkMode: DefaultTheme = {
  id: 'T_002',
  name: 'dark',
  collors: {
    text: {
      primary: '#ffffff',
      secondary: '#d8d8d8',
    },
    background: {
      primary: '#202c37',
      secondary: '#2b3945',
    },
    shadow: '#1e2730',
    activeItens: '#fc5404',
  },
};
