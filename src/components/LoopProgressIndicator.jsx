
// https://www.geeksforgeeks.org/how-to-create-a-moving-div-using-javascript/

import { useEffect, useState } from "react";


const LoopProgressIndicator = ({bpm, numberOfBeats, isPlayed, beatIndex, loopStartTime, setLoopStartTime}) => {
    const shiftAmount = 16; //pixel
    const totalTime = numberOfBeats * (1/bpm) * 60 * 1000; //milliseconds
    const timePerShift = totalTime / (numberOfBeats * 4);
    const [position, setPosition] = useState(0);
    
    // press start
    // start_time = current_time
    // every frame: 
    //   move bar to D * ((current-elapsed)%total_loop_time) / total_loop_time




    useEffect(() => {
        const interval = setInterval(() => {
            const pos = width * ((Date.now().valueOf() - loopStartTime)%totalTime / totalTime)
            setPosition(pos)
            console.log('position:', pos)
        }, 1000);
        
    });

    const width = 1020

    return (
        <div style={{
            border: "5px solid grey",
            width: width,
            height: "46px",
            marginLeft: "145px"
          }}>
            {/* <div className="bar" style={{left: beatIndex * 16 + "px"}}/> */}
            <div style={
                {
                    left: position,
                    width: "5px",
                    height: "46px",
                    backgroundColor: "lightgreen",
                    position: "relative"
                  }
                }/>
        </div>
    )
}

export default LoopProgressIndicator;