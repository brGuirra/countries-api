import styled from 'styled-components';

export const Container = styled.main`
  padding: 4rem 2rem;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  .flag {
    width: 600px;
    height: 400px;
    box-shadow: var(--shadow);
    border-radius: 0.5rem;

    img {
      display: block;
      overflow: hidden;
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: attr(width) / attr(height);
    }
  }

  @media only screen and (max-width: 1330px) {
    grid-template-columns: 1fr;

    .flag {
      width: 100%;
      height: auto;
      max-height: 600px;
    }
  }

  @media only screen and (max-width: 728px) {
    .flag {
      min-height: 200px;
    }
  }
`;
