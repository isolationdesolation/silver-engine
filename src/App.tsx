import "./App.scss";
import React, { useState, useEffect } from "react";

import {Button} from "./components/Button";
import Channel from "./components/Channel";
import { handleError } from "./utils/error-handler";



function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
   
  }, [initializing]);





  return (
    <div>
     
        <>
          <p>Welcome to the chat!</p>
          <Channel  />
        </>
      
    </div>
  );
}

export default App;
