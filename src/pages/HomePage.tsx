import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this

const HomePage = () => {
  const navigate = useNavigate(); // Add this

  const joinRoom = () => {
    navigate(`/login`, { replace: true }); // Add this
  };

  return (
    <div className="blank">
      <div className="bblank">
        <button
          className="btn btn-secondary"
          onClick={joinRoom} // Add this
        >
          To Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
