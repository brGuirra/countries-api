import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  box-shadow: var(--shadow);

  max-width: 30rem;
  width: 30rem;
  height: 4rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-right: 2rem;

  cursor: pointer;

  background: ${({ theme }) => theme.collors.background.secondary};

  svg {
    margin-right: 1rem;
  }

  input {
    background: transparent;
    border: none;
    height: 1.5rem;
    flex: 1;
    padding: 0.5rem;
    border-radius: 0.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.collors.text.secondary};
      font-size: 1rem;
    }
  }

  &:hover {
    filter: opacity(0.8);
  }

  @media only screen and (max-width: 728px) {
    margin-bottom: 2rem;
    margin-right: 0;
    width: 100%;
    max-width: 100%;
  }
`;
