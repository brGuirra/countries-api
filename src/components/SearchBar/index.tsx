import { useRef } from 'react';

import { useCountries } from '../../hooks/useCountries';

import { SearchResultsCounter } from '../searchResultsCounter';

import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

export function Input() {
  const { searchCountries, searchValues } = useCountries();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleSearch() {
    if (inputRef.current) {
      searchCountries(inputRef.current.value);
    }
  }

  return (
    <div>
      <Container onClick={handleInputFocus}>
        <FaSearch />
        <input
          onChange={handleSearch}
          value={searchValues}
          ref={inputRef}
          type='text'
          placeholder='Search for a country...'
        />
      </Container>
      <SearchResultsCounter />
    </div>
  );
}
