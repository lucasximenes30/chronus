import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';


function App() {
  const [numero,setNumero] = useState(0);

  function handleCLick() {
    setNumero(prevState => prevState + 1);
  }
  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleCLick}>Clique aqui</button>
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
        <form className="form" action="">
          <div className='formRow'>
            <DefaultInput 
              labelText={numero.toString()}
              id='meuInput' 
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />}/>
          </div>

        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </> 
  );
}

export { App };