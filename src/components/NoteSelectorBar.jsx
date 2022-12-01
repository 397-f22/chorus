// distinct notes - make a button for each of these 
// conversion chart: https://miro.medium.com/proxy/1*CDXHKG0-4QO9Y-DCTAcqPg.png
import React, { useState } from 'react';
import './NoteSelectorBar.css'
import { ButtonGroup, Button } from '@mui/material';

export const notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
const note_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

const NoteButton = ({note, noteName, setNote, selectedNote}) => {
    return (
        <Button 
            data-cy={note + (note === selectedNote ? "-selected" : "-unselected")}
            style={note === selectedNote ? {backgroundColor: "darkseagreen"} : {}} onClick={() => setNote(note)}>
            {noteName}
        </Button>
    )
}

const OctaveButton = ({octave, setOctave, direction}) => {
    return (
        <Button className="noteButton" onClick={direction ? () => setOctave(octave + 1) : () => setOctave(octave - 1)}>
             {direction ? "+" : "-"} 
        </Button>
    )
}

export const NoteSelectorBar = ({note, setNote, octave, setOctave}) => {
    return (
        <ButtonGroup variant="outlined" color="success" aria-label="outlined button group" className="flex-row note-container">
            <OctaveButton octave={octave} setOctave={setOctave} direction={1}/>
            <OctaveButton octave={octave} setOctave={setOctave} direction={0}/>
            { notes.map((val, idx) => <NoteButton note={val} noteName={note_names[idx]} setNote={setNote} selectedNote={note} key={idx}/>) }
        </ButtonGroup>
    )
}