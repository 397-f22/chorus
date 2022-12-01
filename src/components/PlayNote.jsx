import React, { useState } from 'react';
import MIDISounds from 'midi-sounds-react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { Button } from '@mui/material';
import { useDbUpdate } from '../utilities/firebase';
import LoopProgressIndicator from './LoopProgressIndicator';

	
export const PlayNote = ({ bpm, note, octave, setOctave, loop, setLoop, notesPerMeasure, isPlayed, setIsPlayed, id }) => {
	const defaultColor = "#EEEEEE";

	const instruments = {
		"Piano": 4,
		"Acoustic guitar": 258,
		"Electric guitar": 318,
		"Electric bass": 387,
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

	const [midiSounds, setMidiSounds] = useState(undefined);
	const [update, result] = useDbUpdate(`/sessions/${id}`);

	const startLoop = () => {
		if (midiSounds) {
			setIsPlayed(true);
			midiSounds.startPlayLoop(loop, bpm, 1/notesPerMeasure);
		}
	}

	const stopLoop = () => {
		setIsPlayed(false);
		midiSounds.stopPlayLoop();
	}

	const updateDrumLoop = (i, drum) => {
		var loopCopy = [...loop];
		if (loopCopy[i][0].length > 0 && loopCopy[i][0].includes(drum)) {
			loopCopy[i][0] = loopCopy[i][0].filter((x) => x !== drum);
		} else {
			loopCopy[i][0] = [...loopCopy[i][0], drum];
		}
		setLoop(loopCopy);
		updateLoopToDb(loopCopy);
	}

	const includesInstrument = (instrumentArray, instrument) => {
		return instrumentArray.filter((val) => val[0] === instrument).length > 0;
	}

	const updateInstrumentLoop = (i, instrument) => {
		var loopCopy = [...loop];
		if (loopCopy[i][1].length > 0 && includesInstrument(loopCopy[i][1], instrument)) {
			loopCopy[i][1] = loopCopy[i][1].filter((x) => x[0] !== instrument);
		} else {
			loopCopy[i][1] = [...loopCopy[i][1], [instrument, [note + (12 * octave)], 1 / notesPerMeasure]];
		}
		setLoop(loopCopy);
		//console.log(printBeats(loopCopy))
		updateLoopToDb(loopCopy);
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
		//console.log(note + (12 * octave))
		return toColor(note + (12 * octave));
	}

	const updateLoopToDb = (loopArr) => {
		update(
			{"loop": JSON.stringify(loopArr)}
		)
	}

	return <div style={{ marginTop: "10px", display: "flex", flexDirection: "column"}}>
		<LoopProgressIndicator midiSounds = {midiSounds} isPlayed={isPlayed}/>

		<div style={{display: "flex", flexDirection: "row", height: "100%"}}>
			<div className="instrument-labels-column">
				{Object.keys(drums).map((drum, idx) => {
					return <div className="row" key={idx}>
						{drum}:
					</div>
				})}

				{Object.keys(instruments).map((instrument, idx) => {
					return <div className="row" key={idx}>
						{instrument}:
					</div>
				})}
			</div>

			<div className="instrument-loops-column">
				{Object.keys(drums).map((drum, idx) => {
					return <div className="row" key={idx}>
						{loop.map((beat, i) => {
							return <button id={`beat-button-${drum.replace(" ", "-").toLowerCase()}-${i}`} className="beat-button" data-cy={isDrumSelected(i, drums[drum]) ? "selected-beat" : "unselected-beat"}
								style={{ backgroundColor: isDrumSelected(i, drums[drum]) ? "black" : defaultColor }}
								key={i} onClick={() => {
									updateDrumLoop(i, drums[drum]);
								}} />
						})}
					</div>
				})}

				{Object.keys(instruments).map((instrument, idx) => {
					return <div className="row" key={idx}>
						{loop.map((beat, i) => {
							return <button className="beat-button" id={`beat-button-${instrument.replace(" ", "-").toLowerCase()}-${i}`} data-cy={isInstrumentSelected(i, instruments[instrument]) ? "selected-beat" : "unselected-beat"}
								style={{ backgroundColor: isInstrumentSelected(i, instruments[instrument]) ? noteColor(instruments[instrument], beat) : defaultColor }}
								key={i} onClick={() => {
									updateInstrumentLoop(i, instruments[instrument]);
								}} />
						})}
					</div>
				})}
			</div>

			<div className="instrument-labels-column"/>
		</div>

		<div className="play-controls">
			<Button variant={isPlayed ? "contained" : "outlined"}
				color="success"
				data-cy="play-btn"
				onClick={startLoop}
				startIcon={<PlayCircleOutlineIcon />}>
				Play
			</Button>
			<Button variant={isPlayed ? "outlined" : "contained"}
				color="success"
				data-cy="stop-btn"
				onClick={stopLoop}
				startIcon={<PauseCircleOutlineIcon />}>
				Stop
			</Button>
		</div>

		<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drums)} instruments={Object.values(instruments)} />

		<div data-cy={isPlayed ? "status-playing" : "status-stop"}></div>
	</div>
};

export default PlayNote;