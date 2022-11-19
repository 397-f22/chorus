
// https://www.geeksforgeeks.org/how-to-create-a-moving-div-using-javascript/

import { useEffect, useState } from "react";


const LoopProgressIndicator = ({bpm, numberOfBeats}) => {
    const shiftAmount = 16;
    const totalTime = numberOfBeats * (1/bpm);
    const timePerShift = totalTime / (bpm / 4) * 60 * 1000;
    const [position, setPosition] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setPosition((position) => position + shiftAmount);
        }, timePerShift);
    
        return () => clearTimeout(timer)
    });

    return (
        <div className="moving-bar-box">
            <div className="bar" style={{left: position + "px"}}/>

        </div>
    )
}

export default LoopProgressIndicator;