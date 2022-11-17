// import {note as note_name} from "midi-note" 
// distinct notes - make a button for each of these 
// conversion chart: https://miro.medium.com/proxy/1*CDXHKG0-4QO9Y-DCTAcqPg.png
import './NoteSelectorBar.css'


const notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
const note_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]



const NoteButton = ({note, noteName, setNote, selectedNote}) => {
    return (
        <div className={note === selectedNote ? "noteButton selectedNote" : "noteButton"} onClick={() => setNote(note)}>
            {noteName}
        </div>
    )
}



export const NoteSelectorBar = ({note, setNote}) => {
    return (
        <div className="flex-row note-container">
            {notes.map((val, idx) => <NoteButton note={val} noteName={note_names[idx]} setNote={setNote} selectedNote={note}/>)}
        </div>
    )
}


