import styled from 'styled-components';

interface ContainerProps {
  modalStatus: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: var(--shadow);

  width: 15rem;
  height: 4rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.collors.background.secondary};

  button {
    width: 1.5rem;
    height: 1.5rem;

    background: transparent;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;

    svg {
      width: 1.5rem;
      height: 1.5rem;

      transition: transform 0.2s;

      transform: ${(props) => {
        switch (props.modalStatus) {
          case 'open':
            return 'rotate(180deg)';
          case 'closed':
            return 'rotate(initial)';
          default:
            return 'none';
        }
      }};
    }
  }

  &:hover {
    filter: opacity(0.8);
  }
`;
