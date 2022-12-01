
// https://www.geeksforgeeks.org/how-to-create-a-moving-div-using-javascript/

import { useEffect, useState } from "react";


const LoopProgressIndicator = ({bpm, numberOfBeats, isPlayed, beatIndex}) => {
    const shiftAmount = 16; //pixel
    const totalTime = numberOfBeats * (1/bpm) * 60 * 1000; //milliseconds
    const timePerShift = totalTime / (numberOfBeats * 4);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if(isPlayed){
            setTimeout(() => {
                setPosition((position) => {
                    var positionAmount = position + shiftAmount;
                    console.log(position);
                    if(positionAmount >= 1018){
                        positionAmount = 0
                    }
                    return positionAmount;
                });
            }, timePerShift);
        
            // return () => clearTimeout(timer)
        } else {
            setPosition(0);
        }
    });

    return (
        <div className="moving-bar-box">
            <div className="bar" style={{left: beatIndex * 16 + "px"}}/>
        </div>
    )
}

export default LoopProgressIndicator;