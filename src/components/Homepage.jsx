import { useState } from 'react';

const Homepage = () => {
  const [joinId, setJoinId] = useState("");

  const goToSession = () => {
    window.location.href = "/session/" + joinId;
  }

  const goToNewSession = () => {
    setJoinId(Math.floor(1000 + Math.random() * 9000));
    // make a database entry
    goToSession();
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
        <button type="button" className="btn btn-dark btn-rounded" onClick={goToSession}>New Session</button>
      </div>

    </div>
  );
}





export default Homepage;