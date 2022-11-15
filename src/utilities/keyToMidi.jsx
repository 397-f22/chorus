import MidiButton from "../components/MidiButton";
// import { playTestInstrument } from "../components/MidiButton"
function PlayNote() {
    

    function handleKeyPress(e) {
        var key = e.key;
        
        
    }
    
    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
        </div>
    )

}

export default PlayNote;