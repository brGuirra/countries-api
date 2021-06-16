import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.collors.background.secondary};
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  height: 6rem;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h1 {
    font-size: 2rem;
  }

  @media only screen and (max-width: 728px) {
    justify-content: initial;

    h1 {
      font-size: 1rem;
      flex-grow: 1;
    }
  }
`;
