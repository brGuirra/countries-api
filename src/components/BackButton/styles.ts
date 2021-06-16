import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(NavLink)`
  background: ${({ theme }) => theme.collors.background.secondary};
  box-shadow: var(--shadow);

  width: 9rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  border-radius: 0.3rem;
  padding: 1rem 2rem;

  span {
    margin-left: 1rem;
  }

  &:hover {
    filter: opacity(0.8);
  }
`;
