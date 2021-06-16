import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  li {
    & + li {
      margin-top: 1rem;
    }

    span {
      font-weight: var(--light-weight-font);
    }
  }

  @media only screen and (max-width: 1300px) {
    justify-content: initial;
    gap: 4rem;
  }

  @media only screen and (max-width: 728px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
