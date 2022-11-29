import { useState } from 'react';
import { json } from 'react-router-dom';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { emptyBeatArray } from '../utilities/loops';

const Homepage = () => {
  const [joinId, setJoinId] = useState("");
  const [update, result] = useDbUpdate(`/sessions/`);

  const goToSession = (joinId_) => {
    window.location.href = "/session/" + joinId_;

  }

  const goToNewSession = (joinId_) => {
    // make a database entry
    
    
   
    
    goToSession(joinId_);
    
  }

  const updateJoinId = (event) => {
    setJoinId(event.target.value);
  }

  return (
    <div className="container">

      <div className="icon-div">
        <img src="" alt="chorus icon" />
      </div>

      <div className="enter-code-form">
        <form className="join-with-code">

          <div className="join-with-code-field">
            <label id="join-with-code-text" for="fname">Join With Code:</label>
            <input type="text" id="code" name="code" value={joinId} onChange={updateJoinId} />
          </div>

          <div className="join-with-code-btn" style={{ marginTop: "10px" }}>
            <button type="button" className="btn btn-dark btn-rounded btn-lg" style={{ paddingRight: "100px", paddingLeft: "100px" }} onClick={goToSession}>Join</button>
          </div>
        </form>
      </div>

      <div className='new-session-button'>
        {/* <button type="button" onClick={goToElection}>New Election</button> */}
        <button type="button" className="btn btn-dark btn-rounded" onClick={() => {
          goToNewSession(Math.floor(1000 + Math.random() * 9000));
        }}>New Session</button>
      </div>

    </div>
  );
}





export default Homepage;