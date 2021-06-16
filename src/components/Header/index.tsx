import { ThemeSwitcher } from '../ThemeSwitcher';

import { Container, Wrapper } from './styles';

export function Header() {
  return (
    <Container id='modalAppElement'>
      <Wrapper>
        <h1>Where in the World?</h1>
        <ThemeSwitcher />
      </Wrapper>
    </Container>
  );
}
