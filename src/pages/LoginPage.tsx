import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this

const LoginPage = () => {
  const [chatId, setChatId] = useState('');

  function changeChatId(e) {
    setChatId(e.target.value);
  }

  const navigate = useNavigate(); // Add this

  const joinRoom = () => {
    // if (room !== '' && username !== '') {
    //   socket.emit('join_room', { username, room });
    // }

    // Redirect to /chat
    navigate(`/rooms/${chatId}`, { replace: true }); // Add this
  };

  return (
    <div className="blank">
      <div className="bblank">
        <h1>{`Chat`}</h1>
        <input className="form-control" placeholder="Your name" />

        <select className="form-select" value={chatId} onChange={changeChatId}>
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button
          className="btn btn-secondary"
          onClick={joinRoom} // Add this
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
