import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;

  span {
    min-width: 150px;
    margin-right: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      a {
        background: ${({ theme }) => theme.collors.background.secondary};
        box-shadow: var(--shadow);

        display: block;
        line-height: 2rem;
        padding: 0 2rem;
        border-radius: 0.2rem;

        &:hover {
          filter: opacity(0.8);
        }
      }
    }
  }

  @media only screen and (max-width: 728px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
