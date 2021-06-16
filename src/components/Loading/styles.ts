import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 0.5rem solid ${({ theme }) => theme.collors.text.primary};
    border-top: 0.5rem solid ${({ theme }) => theme.collors.activeItens};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
