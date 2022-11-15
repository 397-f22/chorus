import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './utilities/keyToMidi';
import MidiButton from './utilities/components/NoteButton';
import MIDISounds from 'midi-sounds-react';

const App = () => {
  const [count, setCount] = useState(0);
  
  

  return (
    <div className="KeyListener">
      <PlayNote/>
      <MidiButton/>

    </div>
  );
};

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MIDISounds from 'midi-sounds-react';

// class App extends Component {
//   playTestInstrument() {
// 		this.midiSounds.playChordNow(3, [80], 2.5);
// 	}
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to midi-sounds-react example 1</h1>
//         </header>
//         <p className="App-intro">Press Play to play instrument sound.</p>
// 		<p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
// 		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
//       </div>
//     );
//   }
// }

// export default App;