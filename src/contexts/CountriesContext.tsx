import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';

import { ICountrie, IDetailedCountrie } from '../types';
import { cleanCountrieName } from '../util/cleanCountrieName';

interface CountriesContextData {
  countries: ICountrie[];
  detailedCountrie: IDetailedCountrie;
  searchList: ICountrie[];
  selectedRegion: string;
  searchValues: string;
  error: boolean;
  isLoading: boolean;
  getAllCountries: () => void;
  getCountriesByRegion: (region: string) => void;
  searchCountries: (values: string) => void;
  getCountrieByAlphaCode: (code: string) => void;
}

export const CountriesContext = createContext<CountriesContextData>(
  {} as CountriesContextData
);

interface CountriesProviderProps {
  children: ReactNode;
}

export function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const [detailedCountrie, setDetailedCountrie] = useState<IDetailedCountrie>(
    {} as IDetailedCountrie
  );
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchValues, setSearchValues] = useState('');
  const [searchList, setSearchList] = useState<ICountrie[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllCountries() {
    try {
      setIsLoading(true);
      const countriesData = await api
        .get('/all')
        .then((response) => response.data);

      const countries = countriesData.reduce(
        (filteredData: ICountrie[], countrie: ICountrie) => {
          const { flag, name, population, region, capital, alpha3Code } =
            countrie;
          const formatedName = cleanCountrieName(name);

          return [
            ...filteredData,
            {
              flag,
              name: formatedName,
              population,
              region,
              capital,
              alpha3Code,
            },
          ];
        },
        []
      );

      setCountries(countries);
      setSelectedRegion('all');
      setSearchValues('');
      setSearchList([]);
      setError(false);
      setIsLoading(false);
    } catch (err) {
      toast.error('Error getting countries information');
      setIsLoading(false);
    }
  }

  async function getCountriesByRegion(region: string) {
    try {
      if (region === 'all') {
        getAllCountries();
      } else {
        setIsLoading(true);

        const countriesData = await api
          .get(`/region/${region}`)
          .then((response) => response.data);

        const countries = countriesData.reduce(
          (filteredData: ICountrie[], countrie: ICountrie) => {
            const { flag, name, population, region, capital, alpha3Code } =
              countrie;

            const formatedName = cleanCountrieName(name);
            return [
              ...filteredData,
              {
                flag,
                name: formatedName,
                population,
                region,
                capital,
                alpha3Code,
              },
            ];
          },
          []
        );

        setSelectedRegion(region);
        setCountries(countries);
        setSearchValues('');
        setSearchList([]);
        setError(false);
        setIsLoading(false);
      }
    } catch (err) {
      const status = err.response.data.status;

      if (status === 404) {
        setError(true);
        toast.error('Region not found');
      } else {
        toast.error('Error getting region countries');
      }

      setIsLoading(false);
    }
  }

  async function getCountrieByAlphaCode(code: string) {
    try {
      setIsLoading(true);

      const response = await api
        .get(`/alpha/${code}`)
        .then((response) => response);

      const countrieData = response.data;

      const {
        flag,
        name,
        population,
        region,
        capital,
        alpha3Code,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders,
        nativeName,
      } = countrieData;

      const formatedName = cleanCountrieName(name);

      const borderCountries = await Promise.all<{
        name: string;
        alpha3Code: string;
      }>(borders.map((countrie: string) => getBorderCountries(countrie)));

      setDetailedCountrie({
        flag,
        name: formatedName,
        population,
        region,
        capital,
        alpha3Code,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borderCountries,
        nativeName,
      });
      setError(false);
      setIsLoading(false);
    } catch (err) {
      const status = err.response.data.status;

      if (status === 404) {
        setError(true);
        toast.error('Countrie not found');
      } else {
        toast.error('Error getting countrie information');
      }

      setIsLoading(false);
    }
  }

  async function getBorderCountries(code: string) {
    try {
      const countrieData = await api
        .get(`/alpha/${code}`)
        .then((response) => response.data);

      const formatedName = cleanCountrieName(countrieData.name);

      setError(false);

      return { name: formatedName, alpha3Code: code };
    } catch (err) {
      toast.error('Error getting border countries information');
    }
  }

  function searchCountries(values: string) {
    setSearchValues(values);
    if (values !== '') {
      const results = countries.filter((countrie) =>
        countrie.name.toLowerCase().includes(values.toLowerCase())
      );

      setSearchList(results);
    } else {
      setSearchList([]);
    }
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        detailedCountrie,
        selectedRegion,
        searchList,
        searchValues,
        error,
        isLoading,
        getAllCountries,
        getCountriesByRegion,
        searchCountries,
        getCountrieByAlphaCode,
      }}>
      {children}
    </CountriesContext.Provider>
  );
}
