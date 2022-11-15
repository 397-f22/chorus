import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';
import { emptyBeatArray } from "./test.js"

export const PlayNote = ({}) => {
	const [loop, setLoop] = useState(emptyBeatArray);
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
			console.log(loop);
			midiSounds.startPlayLoop(loop, 120, 1/16);
		}
	}

	const updateLoop = (i) => {
		var loopCopy = [...loop];
		if (loopCopy[i][0].length > 0){
			loopCopy[i][0] = [];
		} else {
			loopCopy[i][0] = [27];
		}
		setLoop(loopCopy);
	}

	const isSelected = (i) => {
		return loop[i][0].length > 0;
	}

	return <div>
		<button onClick={playTestInstrument}>playTestInstrument</button>
		<div className="row">
			{loop.map((beat, i) => {
				return <button style={isSelected(i) ? {color:"red"} : {color:"yellow"}} key={i} onClick={() => {
					updateLoop(i);
				}}>{i}</button>
			})}
		</div>
		<div style={{display: "none"}}>
			<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={[27]}/>
		</div>
	</div>	
};

export default PlayNote;