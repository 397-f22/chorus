import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';
import { emptyBeatArray } from "../utilities/test.js"

export const PlayNote = ({bpm, note}) => {
	const defaultColor = "#EEEEEE"

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

	const includesInstrument = (instrumentArray, instrument) => {
		return instrumentArray.filter((val) => val[0] === instrument).length > 0;
	}

	const updateInstrumentLoop = (i, instrument) => {
		var loopCopy = [...loop];
		if (loopCopy[i][1].length > 0 && includesInstrument(loopCopy[i][1], instrument)){
			loopCopy[i][1] = loopCopy[i][1].filter((x) => x[0] !== instrument);
		} else {
			loopCopy[i][1] = [...loopCopy[i][1], [instrument, [note], 1/16]];
		}
		setLoop(loopCopy);
	}

	const isDrumSelected = (i, drum) => {
		return loop[i][0].length > 0 && loop[i][0].includes(drum);
	}

	const isInstrumentSelected = (i, instrument) => {
		return loop[i][1].length > 0 && includesInstrument(loop[i][1], instrument)
	}

	const noteColors = [
		"orange",
		"orangered",
		"darkgrey",
		"grey",
		"red",
		"pink",
		"hotpink",
		"green",
		"darkgreen",
		"rebeccapurple",
		"purple",
		"blue"
	];

	const noteColor = (instrument, beat) => {
		const beatForInstrument = beat[1].filter((val) => val[0] === instrument)[0];
		const note = beatForInstrument[1];
		return noteColors[note % 12];
	}

	return <div style={{marginLeft: "20px", marginTop: "20px"}}>
		{	
			Object.keys(drums).map(drum => {
				return <div className="row">
					<div className="instrument-label">{drum}:</div>
					{loop.map((beat, i) => {
						return 	<button className="beat-button"
										style={{backgroundColor: isDrumSelected(i, drums[drum]) ? "black" : defaultColor}}
										key={i} onClick={() => {
											updateDrumLoop(i, drums[drum]);
								}}/>
					})}
				</div>
			})
		}
		{	
			Object.keys(instruments).map(instrument => {
				return <div className="row">
					<div className="instrument-label">{instrument}:</div>
					{loop.map((beat, i) => {
						return 	<button className="beat-button"
										style={{backgroundColor: isInstrumentSelected(i, instruments[instrument]) ? noteColor(instruments[instrument], beat) : defaultColor}} 
										key={i} onClick={() => {
											updateInstrumentLoop(i, instruments[instrument]);
					 					}}/>
					})}
				</div>
			})
		}
		<button onClick={playTestInstrument}>playLoop</button>
		<button onClick={stopLoop}>stopLoop</button>
		<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drums)} instruments={Object.values(instruments)}/>
	</div>	
};

export default PlayNote;