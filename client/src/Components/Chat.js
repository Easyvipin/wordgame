import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../Contexts/SocketContext";

const Chat = () => {
  const { userName, clientName, userId, clientId, socket } =
    useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [getMessage, setGetMessage] = useState("");

  useEffect(() => {
    socket.on("getMessage", ({ message, from }) => {
      setGetMessage(`${message} + from + ${from}`);
    });
  }, []);

  const sendMessage = () => {
    console.log(clientId, userId);
    socket.emit("sendMessage", { message, from: userId, to: clientId });
  };

  return (
    <div
      style={{
        display: "flex",
        border: "2px solid black",
      }}
    >
      <div className="user">
        <h3>{userName}</h3>
        {message}
        <form>
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </form>
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <div className="user">
        <h3>{clientName}</h3>
        {getMessage}
      </div>
    </div>
  );
};

export default Chat;
