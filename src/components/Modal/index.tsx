import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';
import { useCountries } from '../../hooks/useCountries';

import { Container } from './styles';

export function Modal() {
  const { status, toggleStatus } = useModal();
  const { getCountriesByRegion } = useCountries();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent): void {
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }

      toggleStatus();
    }

    if (status === 'open') {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [status, toggleStatus]);

  function handleCountriesRegion(e: React.MouseEvent) {
    const region = e.currentTarget.getAttribute('data-region');

    if (region) {
      getCountriesByRegion(region);
    }
  }

  return (
    <Container ref={modalRef} isOpen={status}>
      {status === 'open' && (
        <>
          <ul>
            <li>
              <NavLink
                to='/africa'
                activeClassName='selected'
                data-region='africa'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                Africa
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/americas'
                activeClassName='selected'
                data-region='americas'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                Americas
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/asia'
                activeClassName='selected'
                data-region='asia'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                Asia
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/europe'
                activeClassName='selected'
                data-region='europe'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                Europe
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/oceania'
                activeClassName='selected'
                data-region='oceania'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                Oceania
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/all'
                activeClassName='selected'
                data-region='all'
                onClick={(e) => {
                  handleCountriesRegion(e);
                }}>
                All Regions
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </Container>
  );
}
