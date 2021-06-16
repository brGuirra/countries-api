import { Container } from './styles';
import { useCountries } from '../../hooks/useCountries';

export function SearchResultsCounter() {
  const { searchValues, searchList } = useCountries();

  return (
    <Container>
      {searchValues && (
        <p>
          {searchList.length > 1
            ? `${searchList.length} results`
            : `${searchList.length} result`}{' '}
          found
        </p>
      )}
    </Container>
  );
}
