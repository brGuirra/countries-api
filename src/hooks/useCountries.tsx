import { useContext } from 'react';

import { CountriesContext } from '../contexts/CountriesContext';

export function useCountries() {
  const context = useContext(CountriesContext);

  return context;
}
