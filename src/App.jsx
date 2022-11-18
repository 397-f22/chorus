import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import {NoteSelectorBar} from './components/NoteSelectorBar.jsx'

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);

  return (
    <div className='KeyListener'>
      <div className='header'>
        <img className='logo' src={logo} />
      </div>
      <div className='flex-col'>
        <div className='flex-row'>
          <BpmSelector bpm={bpm} setBpm={setBpm}/>
        </div>

        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave}/>
        <NoteSelectorBar note={note} setNote={setNote} octave={octave} setOctave={setOctave}></NoteSelectorBar>
  		</div>
      
    </div>
  );
};

export default App;

