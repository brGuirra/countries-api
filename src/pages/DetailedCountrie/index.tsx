import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useCountries } from '../../hooks/useCountries';

import { BackButton } from '../../components/BackButton';
import { DetailedCountrieInfo } from '../../components/DetailedCountrieInfo';
import { NotFound } from '../../components/NotFound';

import { Container, Wrapper } from './styles';
import { Loading } from '../../components/Loading';

export function DetailedCountrie() {
  const { alpha } = useParams<{ alpha: string }>();
  const { detailedCountrie, getCountrieByAlphaCode, error, isLoading } =
    useCountries();
  const fetchData = useRef(getCountrieByAlphaCode);

  useEffect(() => {
    fetchData.current(alpha);
  }, [fetchData, alpha]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <BackButton />
            {error ? (
              <NotFound />
            ) : (
              <>
                {detailedCountrie && (
                  <Wrapper>
                    <div className='flag'>
                      <img
                        src={detailedCountrie.flag}
                        alt={detailedCountrie.name}
                      />
                    </div>
                    <DetailedCountrieInfo />
                  </Wrapper>
                )}
              </>
            )}
          </Container>
        </>
      )}
    </>
  );
}
