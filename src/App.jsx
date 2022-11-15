import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './utilities/keyToMidi';
import MidiButton from './components/MidiButton';
import MIDISounds from 'midi-sounds-react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="KeyListener">
      <div>
        <h1>Chorus</h1>
      </div>
      <PlayNote/>
      <MidiButton/>

    </div>
  );
};

export default App;

