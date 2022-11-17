import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';
import { emptyBeatArray } from "../utilities/test.js"

export const PlayNote = ({bpm}) => {
	const [loop, setLoop] = useState(emptyBeatArray);
	const instruments = {
		"piano": 4,
		"electric guitar": 318,
		"electic bass": 387,
		"acoustic guitar": 258,
		"trumpet": 619,
		"trombone": 628,
		"shakuhaki": 816
	};
	
	const drums = {
		"Bass drum": 3,
		"Rimshot": 11,
		"Snare drum": 27,
		"Hand clap": 22,
		"Hi-hat": 35
	};

	const mappings = {
		"a": 60,
		"s": 61,
		"d": 62,
		"f": 63
	}

	const [midiSounds, setMidiSounds] = useState(undefined);

	const playTestInstrument = (key) => {
		if (midiSounds) {
			console.log(loop);
			midiSounds.startPlayLoop(loop, bpm, 1/16);
		}
	}

	const stopLoop = () => {
		midiSounds.stopPlayLoop();
	}

	const updateDrumLoop = (i, drum) => {
		var loopCopy = [...loop];
		if (loopCopy[i][0].length > 0 && loopCopy[i][0].includes(drum)){
			loopCopy[i][0] = loopCopy[i][0].filter((x) => x !== drum);
		} else {
			loopCopy[i][0] = [...loopCopy[i][0], drum];
		}
		setLoop(loopCopy);
	}

	const isSelected = (i, drum) => {
		return loop[i][0].length > 0 && loop[i][0].includes(drum);
	}

	return <div style={{marginLeft: "20px", marginTop: "20px"}}>
		{	
			Object.keys(drums).map(drum => {
				return <div className="row">
					<div className="instrument-label">{drum}:</div>
					{loop.map((beat, i) => {
						return <button className={isSelected(i, drums[drum]) ? "selected" : "unselected"} key={i} onClick={() => {
							updateDrumLoop(i, drums[drum]);
						}}></button>
					})}
				</div>
			})
		}
		<button onClick={playTestInstrument}>playLoop</button>
		<button onClick={stopLoop}>stopLoop</button>
		<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drums)}/>
	</div>	
};

export default PlayNote;