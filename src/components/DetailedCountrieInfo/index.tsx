import { useCountries } from '../../hooks/useCountries';

import { format } from '../../util/format';
import { BorderCountries } from '../BorderCountries';

import { Container, InfoWrapper } from './styles';

export function DetailedCountrieInfo() {
  const { detailedCountrie } = useCountries();
  return (
    <Container>
      <h1>{detailedCountrie.name}</h1>
      <InfoWrapper>
        <ul>
          <li>
            Native Name:&nbsp;<span>{detailedCountrie.nativeName}</span>
          </li>
          <li>
            Population:&nbsp;<span>{detailedCountrie.population}</span>
          </li>
          <li>
            Region:&nbsp;<span>{detailedCountrie.region}</span>
          </li>
          <li>
            Sub Region:&nbsp;<span>{detailedCountrie.subregion}</span>
          </li>
          <li>
            Capital:&nbsp;<span>{detailedCountrie.capital}</span>
          </li>
        </ul>

        <ul>
          <li>
            Top Level Domain:&nbsp;
            <span>{detailedCountrie.topLevelDomain}</span>
          </li>
          <li>
            Currencies:&nbsp;
            <span>
              {detailedCountrie.currencies &&
                format(detailedCountrie.currencies)}
            </span>
          </li>
          <li>
            Languages:&nbsp;
            <span>
              {detailedCountrie.languages && format(detailedCountrie.languages)}
            </span>
          </li>
        </ul>
      </InfoWrapper>
      {detailedCountrie.borderCountries !== undefined &&
        detailedCountrie.borderCountries.length > 0 && <BorderCountries />}
    </Container>
  );
}
