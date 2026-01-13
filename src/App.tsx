import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';


function App() {
  return (
    <>
       <Container>
        <Heading>
          Logo
        </Heading>
      </Container>

      <Container>
        <Heading>
          Menu
        </Heading>
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
