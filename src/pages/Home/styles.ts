import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1440px;
  padding: 4rem 2rem;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-top: 4rem;
  }

  h1 ~ div {
    margin-top: 2rem !important;
  }

  @media only screen and (max-width: 711px) {
    h1 {
      text-align: center;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  @media only screen and (max-width: 728px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CoutriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;

  position: relative;
  z-index: 10;

  margin-top: 4rem;

  @media only screen and (max-width: 728px) {
    justify-content: center;
  }
`;
