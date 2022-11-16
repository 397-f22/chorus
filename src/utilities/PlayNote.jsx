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

	const stopLoop = () => {
		midiSounds.stopPlayLoop();
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
		<div>Drum:</div>
		<div className="row">
			{loop.map((beat, i) => {
				return <button className={isSelected(i) ? "selected" : "unselected"} key={i} onClick={() => {
					updateLoop(i);
				}}>{i}</button>
			})}
		</div>
		<button onClick={playTestInstrument}>playLoop</button>
		<button onClick={stopLoop}>stopLoop</button>
		<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={[27]}/>
	</div>	
};

export default PlayNote;