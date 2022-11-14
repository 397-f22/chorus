import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './utilities/keyToMidi';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="KeyListener">
      <PlayNote/>
    </div>
  );
};

export default App;
