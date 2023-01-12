import React, { useState, useEffect } from "react";
import { MessageData, UserData } from "../const/types";
import Message from "./Message";

const Channel = () => {
  const [messages, setMessages] = useState<MessageData[]>(
    [],
  );
  const [newMessage, setNewMessage] = useState<{text: string}>({text: ""});

  useEffect(() => {
    const chatMessages = sessionStorage.getItem("messages");
    if (chatMessages) {
      setMessages(JSON.parse(chatMessages ?? ""));
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
   
    setNewMessage({
      text: e.target.value 
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = new Date().valueOf()
    const uid = sessionStorage.getItem('username') || ""
    const trimmedMessage = newMessage.text.trim();
    const newMsg = {
      text: trimmedMessage,
      id,
      uid
    }
    if (trimmedMessage) {
      let messagesHistory = JSON.stringify([])
      if (sessionStorage.getItem("messages")) {
        messagesHistory = sessionStorage.getItem("messages") as string
      }
      const parsedHistory = JSON.parse(messagesHistory)
      const newHistory = [...parsedHistory, newMsg]
      sessionStorage.setItem("messages", JSON.stringify(newHistory));
      setMessages(newHistory);
      setNewMessage({
        text: ""
      });
    }
  };

  return (
    <>
      <ul className="list-group list-group-flush">
        {messages.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.uid}<br/>
            {item.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleOnSubmit}>
        <textarea
          className="form-control"
          value={newMessage.text}
          onChange={handleOnChange}
          placeholder="Let's talk"
        ></textarea>
        <button
          type="submit"
          className="btn btn-success"
          disabled={!newMessage.text}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Channel;
