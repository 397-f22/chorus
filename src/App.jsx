import logo from './chorus_icon_white.png';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import MeasuresSelector from './components/MeasuresSelector';
import NotesPerMeasureSelector from './components/NotesPerMeasureSelector';
import Homepage from './components/Homepage';
import { NoteSelectorBar } from './components/NoteSelectorBar.jsx'

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { emptyBeatArray, neverGonnaGiveYouUp } from "./utilities/loops.js"
import { Button, IconButton, Tooltip, CircularProgress, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDbData, useDbUpdate } from './utilities/firebase';

const goToHomepage = () => {
  window.location.href = "/";
}

export const Main = ({id}) => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);
  const [measures, setMeasures] = useState(4);
  const [notesPerMeasure, setNotesPerMeasure] = useState(16);
  const [data, error] = useDbData(`/sessions/${id}`);
  const [isPlayed, setIsPlayed] = useState(false);
  const [loop, setLoop] = useState(emptyBeatArray(measures, notesPerMeasure));
  const [update, result] = useDbUpdate(`/sessions/${id}`);

  useEffect(() => {
    // Update the document title using the browser API
    if (data != undefined){
      setLoop(JSON.parse(data.loop))
    }
  }, [data]);

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <CircularProgress color="success" />;

  const updateLoopToDb = (loopArr) => {
		update(
			{"loop": JSON.stringify(loopArr)}
		)
	}

  return (
    <div className='KeyListener'>
      <div className='flex-col' style={{marginLeft: "20px"}}>
        <Chip label={`Code: ${id}`} color="success" id="code-chip"/>
        <div className='flex-row' style={{marginTop: "20px", justifyContent: "space-evenly"}}>
          <BpmSelector bpm={bpm} setBpm={setBpm}/>
          <Button variant="outlined"
                  color="success" 
                  onClick={() => {
                    setLoop([...neverGonnaGiveYouUp]);
                    updateLoopToDb([...neverGonnaGiveYouUp]);
                    setBpm(111);
                  }}
                  style={{width: "fit-content"}}
                  data-cy={"load-example-1"}>
              Load Example 1
          </Button>
          <Tooltip title={"Delete Track"}>
            <IconButton variant="outlined" onClick={() => {
                setLoop(emptyBeatArray(measures, notesPerMeasure))
                updateLoopToDb(emptyBeatArray(measures, notesPerMeasure));
              }} data-cy={"Delete"}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave} loop={loop} setLoop={setLoop} notesPerMeasure={notesPerMeasure} isPlayed={isPlayed} setIsPlayed={setIsPlayed} id={id}/>
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
      <div className='header'>
        <img className='logo' src={logo} onClick={goToHomepage}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
            </div>
          } />
          <Route path="/session/:id" element={
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

