
import { useEffect, useState } from "react";

const LoopProgressIndicator = ({isPlayed, midiSounds}) => {
    const shiftAmount = 16; //pixel
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        if (midiSounds && isPlayed) {  
            const interval = setInterval(() => {
                setPosition(midiSounds.beatIndex * shiftAmount);
            }, 10);
        }else{
            setPosition(0);
        }
    });

    return midiSounds && (
        <div style={{
            border: "5px solid grey",
            width: "1020px",
            height: "46px",
            marginLeft: "145px"
        }}>
            <div className="bar" style={{
                    width: "5px", 
                    height: "46px",
                    backgroundColor: "lightgreen",
                    position: "relative", 
                    left: position + "px", 
            }}/>
        </div>
    )
}

export default LoopProgressIndicator;