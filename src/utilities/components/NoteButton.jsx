// import React, { Component } from 'react';
// import MIDISounds from 'midi-sounds-react';


// const  playTestInstrument = () => {
//     midiSounds.playChordNow(3, [60], 2.5);
// }

// const MidiButton = () => {
    
 
//     return (
//       <div>
        
//         <p className="App-intro">Press Play to play instrument sound.</p>
// 		<p><button onClick={playTestInstrument}>Play</button></p>
// 		<MIDISounds appElementName="root" instruments={[3]} />	
//       </div>
//     );
  
// }

// export default MidiButton;

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MIDISounds from 'midi-sounds-react';
 
class MidiButton extends Component {
  playTestInstrument() {
        this.midiSounds.playChordNow(3, [60], 2.5);
    }
  render() {
    return (
      <div>
      
        <p className="App-intro">Press Play to play instrument sound.</p>
        <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
      </div>
    );
  }
}
 
export default MidiButton;