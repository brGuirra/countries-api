import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import { useCountries } from '../../hooks/useCountries';
import { ModalProvider } from '../../contexts/ModalContext';

import { Filter } from '../../components/Filter';
import { Input } from '../../components/SearchBar';
import { Modal } from '../../components/Modal';
import { Loading } from '../../components/Loading';
import { CountrieCard } from '../../components/CountrieCard';

import { Container, FilterWrapper, CoutriesWrapper } from './styles';

function Home() {
  const { countries, searchList, selectedRegion, getAllCountries, isLoading } =
    useCountries();
  const fetchData = useRef(getAllCountries);

  useEffect(() => {
    fetchData.current();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <FilterWrapper>
              <Input />
              <ModalProvider>
                <Filter />
                <Modal />
              </ModalProvider>
            </FilterWrapper>
            {selectedRegion === 'all' ? (
              <h1>All Regions</h1>
            ) : (
              <h1>{selectedRegion}</h1>
            )}

            {countries && (
              <>
                <CoutriesWrapper>
                  {(searchList.length > 0 ? searchList : countries).map(
                    ({
                      flag,
                      name,
                      region,
                      population,
                      capital,
                      alpha3Code,
                    }) => (
                      <CountrieCard
                        countrie={{
                          flag,
                          name,
                          region,
                          population,
                          capital,
                          alpha3Code,
                        }}
                        key={alpha3Code}
                      />
                    )
                  )}
                </CoutriesWrapper>
              </>
            )}
          </Container>
        </>
      )}
    </>
  );
}

export default withRouter(Home);
