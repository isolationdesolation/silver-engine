
import React, { useState, useEffect } from "react";
import { MessageData, UserData } from "../const/types";
import Message from "./Message";


type ChannelProps = {
  user: UserData;
  db: any
};

const Channel = () => {
  const [messages, setMessages] = useState('');
  const [newMessage, setNewMessage] = useState("");

  // const { uid, displayName, photoURL } = user as User;

  useEffect(() => {
    const chatMessages = localStorage.getItem('messages')

    setMessages(chatMessages ?? '')
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      const chatMessagesOld = localStorage.getItem('messages');
      localStorage.setItem('messages',chatMessagesOld + newMessage)
      setMessages(chatMessagesOld + newMessage)
    }
  };

  return (
    <>
      <div>
        {messages}
      </div>

      <form onSubmit={handleOnSubmit}>
        <textarea
        className="form-control"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Let's talk"
        ></textarea>
        <button type="submit" className="btn btn-success" disabled={!newMessage}>
          Send
        </button>
      </form>
    </>
  );
};

export default Channel;
