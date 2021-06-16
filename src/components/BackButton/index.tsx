import { useCountries } from '../../hooks/useCountries';

import { FaArrowLeft } from 'react-icons/fa';

import { Container } from './styles';

export function BackButton() {
  const { selectedRegion } = useCountries();

  return (
    <Container to={`/${selectedRegion}`}>
      <FaArrowLeft />
      <span>Back</span>
    </Container>
  );
}
