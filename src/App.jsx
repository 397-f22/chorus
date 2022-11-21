import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import {NoteSelectorBar} from './components/NoteSelectorBar.jsx'
import { emptyBeatArray, neverGonnaGiveYouUp } from "./utilities/loops.js"
import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);
  const [measures, setMeasures] = useState(4);
  const [notesPerMeasure, setNotesPerMeasure] = useState(16);
	const [loop, setLoop] = useState(emptyBeatArray(measures, notesPerMeasure));

  return (
    <div className='KeyListener'>
      <div className='header'>
        <img className='logo' src={logo} />
      </div>
      <div className='flex-col' style={{marginLeft: "20px"}}>
        <div className='flex-row' style={{marginTop: "20px", justifyContent: "space-evenly"}}>
          <BpmSelector bpm={bpm} setBpm={setBpm}/>
          <Button variant="outlined"
                  color="success" 
                  onClick={() => setLoop([...neverGonnaGiveYouUp])}
                  style={{width: "fit-content"}}>
              Load Example 1
          </Button>
          <Tooltip title={"Delete Track"}>
            <IconButton variant="outlined" onClick={() => setLoop(emptyBeatArray(measures, notesPerMeasure))}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave} loop={loop} setLoop={setLoop}/>
        <NoteSelectorBar note={note} setNote={setNote} octave={octave} setOctave={setOctave}></NoteSelectorBar>
        
        
  		</div>
      
    </div>
  );
};

export default App;

