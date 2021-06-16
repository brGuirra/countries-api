import styled from 'styled-components';

export const Button = styled.button`
  width: 8rem;
  height: 2rem;
  padding: 0.5rem 0 0.5rem 0.5rem;

  background: transparent;
  border-radius: 0.2rem;

  display: flex;
  align-items: center;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.5rem;
  }

  &:hover {
    filter: opacity(0.8);
  }
`;
