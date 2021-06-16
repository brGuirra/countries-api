import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.collors.background.secondary};
  box-shadow: var(--shadow);

  flex-basis: 300px;

  div {
    height: 200px;

    a {
      img {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 0.5rem 0.5rem 0 0;

        &:hover {
          filter: opacity(0.8);
        }
      }
    }
  }
`;

export const CountrieInfo = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    span {
      font-weight: var(--light-weight-font);
    }

    & + p {
      margin-top: 0.5rem;
    }
  }
`;
