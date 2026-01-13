import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/CountDown';


function App() {
  return (
    <>
       <Container>
        <Logo />
      </Container>

      <Container>
       <Menu />
      </Container>

      <Container>
       <Countdown />
      </Container>

      <Container>
        <Heading>
          Formulário
        </Heading>
      </Container>

      <Container>
        <Heading>
          Footer
        </Heading>
      </Container>
    </> 
  );
}

export { App };
