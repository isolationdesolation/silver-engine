import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";

function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {}, [initializing]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="rooms/:id" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
