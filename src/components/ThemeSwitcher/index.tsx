import { useGlobal } from '../../hooks/useGlobal';

import { Button } from './styles';

import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeSwitcher() {
  const { selectedTheme, themeSwitcher } = useGlobal();

  function handleThemeSwitcher() {
    themeSwitcher(selectedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button onClick={handleThemeSwitcher}>
      {selectedTheme === 'dark' ? <FaSun /> : <FaMoon />}
      <span>{selectedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </Button>
  );
}
