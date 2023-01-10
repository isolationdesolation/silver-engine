import { User } from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  addDoc,
  Firestore,
} from "firebase/firestore";

import React, { useState, useEffect } from "react";
import { MessageData } from "../const/types";
import Message from "./Message";


type ChannelProps = {
  user: User;
  db: Firestore
};

const Channel = ({ user, db}: ChannelProps) => {
  const [messages, setMessages] = useState<Partial<MessageData>[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user as User;

  useEffect(() => {
    const chatMessages = collection(db, "messages");
    const q = query(chatMessages, orderBy("createdAt"), limit(100));

    // Subscribe to query with onSnapshot

    const unsubscribe = onSnapshot(q, (doc) => {
      // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      const data = doc.docs.map((d) => ({ ...d.data(), id: d.id }));
      setMessages(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      const ref = addDoc(collection(db, "messages"), {
        text: trimmedMessage,
        createdAt: serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });

      // Clear input field
      setNewMessage("");
    }
  };

  return (
    <>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              <Message {...message} />
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Let's talk"
        />
        <button type="submit" className="btn btn-success" disabled={!newMessage}>
          Send
        </button>
      </form>
    </>
  );
};

export default Channel;
