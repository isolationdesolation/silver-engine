import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import HomePage from "./pages/HomePage";

function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {}, [initializing]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="rooms/:id" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
