import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';

const App = () => {
  const [bpm, setBpm] = useState(120);

  return (
    <div className='KeyListener'>
      <div className='header'>
        <img className='logo' src={logo} />
      </div>
      <div className='flex-col'>
        <div className='flex-row'>
          <BpmSelector bpm={bpm} setBpm={setBpm}/>
        </div>

        <PlayNote bpm={bpm}/>
  		</div>
      {/* <MidiButton/> */}
    </div>
  );
};

export default App;

