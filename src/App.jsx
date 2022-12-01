import logo from './chorus_icon_white.png';
import './App.css';
import PlayNote from './components/PlayNote';
import BpmSelector from './components/BpmSelector';
import Homepage from './components/Homepage';
import { NoteSelectorBar } from './components/NoteSelectorBar.jsx'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { emptyBeatArray, neverGonnaGiveYouUp } from "./utilities/loops.js"
import { Button, IconButton, Tooltip, CircularProgress, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDbData, useDbUpdate } from './utilities/firebase';
import Freestyle from './components/Freestyle';
import Piano from './components/Piano';

const goToHomepage = () => {
  window.location.href = "/";
}

export const Main = ({ id }) => {
  const [bpm, setBpm] = useState(120);
  const [note, setNote] = useState(60);
  const [octave, setOctave] = useState(0);
  const [measures, setMeasures] = useState(4);
  const [notesPerMeasure, setNotesPerMeasure] = useState(16);
  const [data, error] = useDbData(`/sessions/${id}`);
  const [isPlayed, setIsPlayed] = useState(false);
  const [loop, setLoop] = useState(emptyBeatArray(measures, notesPerMeasure));
  const [beatIndex, setBeatIndex] = useState(0);
  const [selectedInstrument, setSelectedInstrument] = useState(0);
  const [update, result] = useDbUpdate(`/sessions/${id}`);
  const [loopStartTime, setLoopStartTime] = useState(undefined)

  useEffect(() => {
    // Update the document title using the browser API
    if (data != undefined) {
      setLoop(JSON.parse(data.loop))
      setBpm(JSON.parse(data.bpm))
    }
  }, [data]);

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <CircularProgress color="success" />;

  const updateLoopToDb = (loopArr, bpmVal) => {
    update(
      {
        "loop": JSON.stringify(loopArr),
        "bpm": bpmVal
      }
    )
  }

  return (
    <div className='KeyListener'>
      <div className='flex-col'>
        <Chip label={`Code: ${id}`} color="success" id="code-chip" />
        <div className='flex-row' style={{ justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px" }}>
          <div style={{ flex: 1 }}>
            <BpmSelector bpm={bpm} setBpm={setBpm} id={id} />
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="outlined"
              color="success"
              onClick={() => {
                setLoop([...neverGonnaGiveYouUp]);
                setBpm(111);
                updateLoopToDb([...neverGonnaGiveYouUp], 111);
              }}
              style={{ width: "fit-content", height: "100%" }}
              data-cy={"load-example-1"}>
              Load Example 1
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Tooltip title={"Delete Track"}>
              <IconButton variant="outlined" onClick={() => {
                setLoop(emptyBeatArray(measures, notesPerMeasure))
                setBpm(120);
                updateLoopToDb(emptyBeatArray(measures, notesPerMeasure), 120);
              }} data-cy={"Delete"}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <PlayNote bpm={bpm} note={note} octave={octave} setOctave={setOctave}
          loop={loop} setLoop={setLoop} notesPerMeasure={notesPerMeasure}
          isPlayed={isPlayed} setIsPlayed={setIsPlayed} id={id} selectedInstrument={selectedInstrument} setSelectedInstrument={setSelectedInstrument} />
        <NoteSelectorBar note={note} setNote={setNote} octave={octave} setOctave={setOctave}></NoteSelectorBar>
        <Freestyle selectedInstrument={selectedInstrument} setSelectedInstrument={setSelectedInstrument} />

        {/* <div>
        <Piano/>
        </div> */}
      </div>

    </div>
  );
};

const MainForUrl = () => {
  const { id } = useParams();

  return <div>
    <Main id={id} />
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
        <img className='logo' src={logo} onClick={goToHomepage} />
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

