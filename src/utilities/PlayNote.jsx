import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';

export const PlayNote = ({}) => {
	const instruments = [4, 318, 387, 258, 619, 628, 816]
	const mappings = {
		"a": 60,
		"s": 61,
		"d": 62,
		"f": 63
	}

	const [midiSounds, setMidiSounds] = useState(undefined);
	const [selectedInstrument, setSelectedInstrument] = useState(instruments[2]);
	const [selectedNote, setSelectedNote] = useState(mappings["a"]);

	const playTestInstrument = (key) => {
		if (midiSounds) {
			midiSounds.playChordNow(selectedInstrument, [selectedNote], 1);
		}
	}

	return <div>
		<button onClick={playTestInstrument}>playTestInstrument</button>
		<div style={{display: "none"}}>
			<MIDISounds ref={(ref) => (setMidiSounds(ref))} instruments={instruments}/>
		</div>
	</div>	
};

export default PlayNote;