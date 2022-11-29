import logo from './logo.svg';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import MeasuresSelector from './components/MeasuresSelector';
import NotesPerMeasureSelector from './components/NotesPerMeasureSelector';
import Homepage from './components/Homepage';
import { NoteSelectorBar } from './components/NoteSelectorBar.jsx'

import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { emptyBeatArray, neverGonnaGiveYouUp } from "./utilities/loops.js"
import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDbData, useDbUpdate } from './utilities/firebase';


export const Main = ({id}) => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);
  const [measures, setMeasures] = useState(4);
  const [notesPerMeasure, setNotesPerMeasure] = useState(16);
	const [loop, setLoop] = useState(emptyBeatArray(measures, notesPerMeasure));
  const [data, error] = useDbData(`/${id}/loop`);
  const [update, result] = useDbUpdate(`/${id}`);
  const [isPlayed, setIsPlayed] = useState(false);

  if (data === null) {
    update({
      "loop": loop
    })
    console.log(result);
  }

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
                  onClick={() => {
                    setLoop([...neverGonnaGiveYouUp]);
                    setBpm(111);
                  }}
                  style={{width: "fit-content"}}
                  data-cy={"load-example-1"}>
              Load Example 1
          </Button>
          <Tooltip title={"Delete Track"}>
            <IconButton variant="outlined" onClick={() => setLoop(emptyBeatArray(measures, notesPerMeasure))} data-cy={"Delete"}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave} loop={loop} setLoop={setLoop} notesPerMeasure={notesPerMeasure} isPlayed={isPlayed} setIsPlayed={setIsPlayed}/>
        <NoteSelectorBar note={note} setNote={setNote} octave={octave} setOctave={setOctave}></NoteSelectorBar>
  		</div>
      
    </div>
  );
};

const MainForUrl = () => {
  const { id } = useParams();

  return <div>
    <Main id={id}/>
  </div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);
  const [recentSongs, setRecentSongs] = useState([]);
  const [data, error] = useDbData(`/`)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
            </div>
          } />
          <Route path="/:id" element={
            <div>
              <MainForUrl />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

