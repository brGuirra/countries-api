export interface ICountrie {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

interface BorderCountrieProps {
  name: string;
  alpha3Code: string;
}

export interface IDetailedCountrie extends ICountrie {
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: [{ name: string }];
  languages: [{ name: string }];
  borderCountries: BorderCountrieProps[];
}
