import {useState, useEffect} from 'react';

export const Freestyle = () => {
    var octave = 0;
    const [midiSounds, setMidiSounds] = useState(undefined);

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
		"KeyQ": 1,
	}

	const handleKeyDown = (event) => {
        console.log(event.key);
		
		if (event.key === "+") {
            if (octave < 8){
                octave++;
            }
		}
	
		else if (event.key === "-") {
            if (octave > 0) {
                octave--;
            }
		}
	  };

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);	

		// cleanup this component
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [])

    return <MIDISounds ref={(ref) => (setMidiSounds(ref))} drums={Object.values(drumsMap)} instruments={Object.values(instrumentsMap)} />
}

export default Freestyle;