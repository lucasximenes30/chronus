import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
    <Heading>
      Olá mundo
        <button>
          <TimerIcon />
        </button>
    </Heading>

    

      <h1>Hello, World!</h1>
      <p>Bem-vindo ao React</p>
    </> 
  );
}

export { App };
