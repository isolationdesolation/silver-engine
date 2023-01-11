import React, { useState, useEffect } from "react";
import { MessageData, UserData } from "../const/types";
import Message from "./Message";

const Channel = () => {
  const [messages, setMessages] = useState([{ text: "" }]);
  const [newMessage, setNewMessage] = useState({ text: "" });

  useEffect(() => {
    const chatMessages = localStorage.getItem("messages");
    console.log(chatMessages);
    if (chatMessages) {
      setMessages(JSON.parse(chatMessages ?? ""));
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage({ text: e.target.value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = newMessage.text.trim();
    if (trimmedMessage) {
      let msgArr = JSON.parse(localStorage.getItem("messages"))
        ? JSON.parse(localStorage.getItem("messages"))
        : [];

      console.log(msgArr);
      msgArr.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(msgArr));
      setMessages(msgArr);
    }
  };

  return (
    <>
      <div>
        {messages.map((item) => (
          <li>{item.text}</li>
        ))}
      </div>

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
