import "./App.scss";
import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import {Button} from "./components/Button";
import Channel from "./components/Channel";
import { handleError } from "./utils/error-handler";

const app = initializeApp({
  apiKey: "AIzaSyAStA_ZmZVCOBFXAjzzZBnth6Jryosl58g",
  authDomain: "chat-7c10c.firebaseapp.com",
  projectId: "chat-7c10c",
  storageBucket: "chat-7c10c.appspot.com",
  messagingSenderId: "790721905988",
  appId: "1:790721905988:web:286c8fdd878e63ad1d8311",
  measurementId: "G-G32E3GH6E8",
});

const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    // Cleanup subscription
    return unsubscribe;
  }, [initializing]);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new GoogleAuthProvider();
    // Set language to the default browser preference
    auth.useDeviceLanguage();
    // Start sign in process
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      handleError(error)
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      handleError(error)
    }
  };

  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>Sign out</Button>
          <p>Welcome to the chat!</p>
          <Channel user={user} db={db} />
        </>
      ) : (
        <>
          <p>Time to sign in</p>
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </>
      )}
    </div>
  );
}

export default App;
