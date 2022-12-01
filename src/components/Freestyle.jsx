import { useState, useEffect } from 'react';
import MIDISounds from 'midi-sounds-react';
import { DataObjectSharp } from '@mui/icons-material';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import "../App.css"


export const Freestyle = () => {
	var octave = 5;
	const [midiSounds, setMidiSounds] = useState(undefined);
	const [selectedInstrument, setSelectedInstrument] = useState(4);

	const instrumentsMap = {
		"Piano": 4,
		"Acoustic guitar": 258,
		"Electric guitar": 318,
		"Electric bass": 387,
		"Trumpet": 619,
		"Trombone": 628,
		"Bamboo flute": 816
	};

	const drumsMap = {
		"Bass drum": 3,
		"Hand clap": 22,
		"Hi-hat": 35,
		"Rimshot": 11,
		"Snare drum": 27
	};

	const keyToNote = {
		"q": 0,
		"w": 1,
		"e": 2,
		"r": 3,
		"t": 4,
		"y": 5,
		"u": 6,
		"i": 7,
		"o": 8,
		"p": 9,
		"[": 10,
		"]": 11
	}

	const handleKeyDown = (event) => {
		console.log(event.key);

		if (!midiSounds) { return };

		console.log("hi")

		if (event.key === "+") {
			if (octave < 8) {
				octave++;
			}
		}

		else if (event.key === "-") {
			if (octave > 0) {
				octave--;
			}
		}
		else if (Object.keys(keyToNote).includes(event.key)) {
			console.log("play sound: ", selectedInstrument)
			midiSounds.playChordNow(selectedInstrument, [keyToNote[event.key] + 12 * octave], 1);
		}
	};

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelectedInstrument(event.target.value)
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		// cleanup this component
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [])

	return (
		<div>

			<div className="soloSelector">
				<FormControl style={{width: "200px"}}>
					<InputLabel id="instrument-label" style={{width: "fit-content"}}>Solo Instrument</InputLabel>
						<Select
							labelId="instrument-label"
							id="demo-simple-select"
							value={selectedInstrument}
							label="Solo Instrument"
							onChange={handleChange}
						>
							{Object.keys(instrumentsMap).map((x) =>
								<MenuItem value={instrumentsMap[x]} key={instrumentsMap[x]}>{x}</MenuItem>
							)}
							
						</Select>
				</FormControl>
			</div>

			<MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drumsMap)} instruments={Object.values(instrumentsMap)} />
		</div>
	)
}

export default Freestyle;