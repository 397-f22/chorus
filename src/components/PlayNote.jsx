import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';
import { emptyBeatArray } from "../utilities/test.js"
import { notes } from './NoteSelectorBar.jsx'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { Button } from '@mui/material';

 
export const PlayNote = ({bpm, note, octave, setOctave}) => {
	const defaultColor = "#EEEEEE"


	

	const [loop, setLoop] = useState(emptyBeatArray);
	const instruments = {
		"Piano": 4,
		"Acoustic guitar": 258,
		"Electric guitar": 318,
		"Electic bass": 387,
		"Trumpet": 619,
		"Trombone": 628,
		"Bamboo flute": 816
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
			loopCopy[i][1] = [...loopCopy[i][1], [instrument, [note + (12 * octave)], 1/16]];
		}
		setLoop(loopCopy);
	}

	const isDrumSelected = (i, drum) => {
		return loop[i][0].length > 0 && loop[i][0].includes(drum);
	}

	const isInstrumentSelected = (i, instrument) => {
		return loop[i][1].length > 0 && includesInstrument(loop[i][1], instrument)
	}

	
	const toColor = (noteNumber) => {
		
		noteNumber >>>= 0;
		var b = noteNumber & 0xFF,
			g = (noteNumber & 0xFF00) >>> 8,
			r = (noteNumber & 0xFF0000) >>> 16
			// a = ( (noteNumber & 0xFF000000) >>> 24 ) / 255 ;
		return "rgba(" + [r, g, b, '100'].join(",") + ")";
	}


	const noteColor = (instrument, beat) => {
		const beatForInstrument = beat[1].filter((val) => val[0] === instrument)[0];
		const note = beatForInstrument[1];
		console.log(note + (12 * octave))
		return toColor(note + (12 * octave));
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
		{/* <button onClick={playTestInstrument}>playLoop</button> */}
		{/* <button onClick={stopLoop}>stopLoop</button> */}
		<div className="play-controls">
			<Button variant="outlined"
					color="success" 
					onClick={playTestInstrument}
					startIcon={<PlayCircleOutlineIcon />}>
				Play
			</Button>
			<Button variant="outlined"
					color="success" 
					onClick={stopLoop}
					startIcon={<PauseCircleOutlineIcon />}>
				Stop
			</Button>
		</div>
		<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drums)} instruments={Object.values(instruments)}/>
	</div>	
};

export default PlayNote;