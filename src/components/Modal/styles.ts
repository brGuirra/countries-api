import styled from 'styled-components';

interface ContainerProps {
  isOpen: string;
}

export const Container = styled.div<ContainerProps>`
  opacity: ${(props) => (props.isOpen === 'open' ? '100%' : '0%')};
  pointer-events: ${(props) => (props.isOpen === 'open' ? 'initial' : 'none')};
  transition: opacity 0.2s;

  width: 15rem;
  padding: 1rem 2rem;

  box-shadow: 3px 0px 3px ${({ theme }) => theme.collors.shadow};

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.collors.background.secondary};

  position: absolute;
  right: 0;
  top: 5rem;
  z-index: 100;

  li {
    & + li {
      margin-top: 1rem;
    }

    &:hover {
      filter: opacity(0.8);
    }

    a.selected {
      color: ${({ theme }) => theme.collors.activeItens};
    }
  }

  @media only screen and (max-width: 728px) {
    left: 0;
    top: 12rem;
  }
`;
