
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
        <div className="moving-bar-box">
            <div className="bar" style={{
                    left: position + "px", 
            }}/>
        </div>
    )
}

export default LoopProgressIndicator;