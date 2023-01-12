import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this

const LoginPage = () => {
  const [chatId, setChatId] = useState('');
  const [username, setUserName] = useState('')

  function changeChatId(e) {
    setChatId(e.target.value);
  }

  function changeUserName(e) {
    setUserName(e.target.value)
  }

  const navigate = useNavigate(); 

  const joinRoom = () => {
    sessionStorage.setItem('username', username)
    navigate(`/rooms/${chatId}`, { replace: true }); 
  };

  return (
    <div className="blank">
      <div className="bblank">
        <h1>{`Chat`}</h1>
        <input className="form-control" placeholder="Your name" onChange={changeUserName} />

        <div className="form-floating">
        <select  id="chatSelect" className="form-select" value={chatId} onChange={changeChatId}>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>
        <label htmlFor="chatSelect">Select your chat room</label>
        </div>
        


        <button
          className="btn btn-secondary"
          onClick={joinRoom} 
          disabled={!chatId}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
