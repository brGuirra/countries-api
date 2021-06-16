import { NavLink } from 'react-router-dom';

import { ICountrie } from '../../types';

import { Container, CountrieInfo } from './styles';

interface CountrieCardProps {
  countrie: ICountrie;
}

export function CountrieCard({ countrie }: CountrieCardProps) {
  return (
    <Container>
      <div>
        <NavLink to={`countrie/${countrie.alpha3Code}`}>
          <img src={countrie.flag} alt={countrie.name} />
        </NavLink>
      </div>
      <CountrieInfo>
        <h3>{countrie.name}</h3>
        <p>
          Population:&nbsp;
          <span>
            {new Intl.NumberFormat('en-US').format(countrie.population)}
          </span>
        </p>
        <p>
          Region:
          <span> {countrie.region}</span>
        </p>
        <p>
          Capital:
          <span> {countrie.capital}</span>
        </p>
      </CountrieInfo>
    </Container>
  );
}
