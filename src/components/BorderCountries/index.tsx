import { NavLink } from 'react-router-dom';

import { useCountries } from '../../hooks/useCountries';

import { Container } from './styles';

export function BorderCountries() {
  const { detailedCountrie } = useCountries();
  const { borderCountries } = detailedCountrie;

  return (
    <>
      {borderCountries && (
        <Container>
          <span>Border Countries:</span>
          <div>
            <ul>
              {borderCountries.map(({ name, alpha3Code }) => (
                <li key={alpha3Code}>
                  <NavLink to={`/countrie/${alpha3Code}`}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </>
  );
}
