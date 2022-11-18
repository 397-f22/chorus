// import {note as note_name} from "midi-note" 
// distinct notes - make a button for each of these 
// conversion chart: https://miro.medium.com/proxy/1*CDXHKG0-4QO9Y-DCTAcqPg.png
import React, { useState } from 'react';
import './NoteSelectorBar.css'


export const notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
const note_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]



const NoteButton = ({note, noteName, setNote, selectedNote}) => {
    return (
        <div className={note === selectedNote ? "noteButton selectedNote" : "noteButton"} onClick={() => setNote(note)}>
            {noteName}
        </div>
    )
}

const OctaveButton = ({octave, setOctave, direction}) => {
    return (
        <div className="noteButton" onClick={direction ? () => setOctave(octave + 1) : () => setOctave(octave - 1)}>
             {direction ? "+" : "-"} 
        </div>
    )
}




export const NoteSelectorBar = ({note, setNote, octave, setOctave}) => {
    return (
        <div className="flex-row note-container">
            <OctaveButton octave={octave} setOctave={setOctave} direction={1}/>
            <OctaveButton octave={octave} setOctave={setOctave} direction={0}/>
            {notes.map((val, idx) => <NoteButton note={val} noteName={note_names[idx]} setNote={setNote} selectedNote={note}/>)}
        </div>
    )
}


