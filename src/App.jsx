import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import {NoteSelectorBar} from './components/NoteSelectorBar.jsx'
import LoopProgressIndicator from './components/LoopProgressIndicator.jsx'

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);
  const [numberOfBeats, setNumberOfBeats] = useState(16);
  const [isPlayed, setIsPlayed] = useState(false);
  const [beatIndex, setBeatIndex] = useState(0);

  return (
    <div className='KeyListener'>
      <div className='header'>
        <img className='logo' src={logo} />
      </div>
      <div className='flex-col'>
        <div className='flex-row' style={{marginTop: "20px"}}>
          <BpmSelector bpm={bpm} setBpm={setBpm}/>
          <LoopProgressIndicator bpm={bpm} numberOfBeats={numberOfBeats} isPlayed={isPlayed} beatIndex={beatIndex}/>
        </div>
        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave} isPlayed={isPlayed} setIsPlayed={setIsPlayed} beatIndex={beatIndex} setBeatIndex={setBeatIndex} />
        <NoteSelectorBar note={note} setNote={setNote} octave={octave} setOctave={setOctave}></NoteSelectorBar>
  		</div>
      
    </div>
  );
};

export default App;

