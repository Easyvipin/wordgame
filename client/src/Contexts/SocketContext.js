import validationFetch from "@app/apiUtils";
import React, { createContext, useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SocketContext = createContext();
const socket = io("http://localhost:5000");

const SocketContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [clientName, setClientName] = useState("");
  const [userId, setUserId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [call, setCall] = useState({
    calling: false,
    status: "idle",
  });
  const [signaling, setSignaling] = useState(false);
  const [action, setAction] = useState("");
  const [level, setLevel] = useState("easy");
  const [turns, setTurns] = useState(4);
  const [messages, setMessages] = useState([]);
  const [clientScore, setClientScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    socket.on("clientConnected", (id) => {
      setUserId(id);
    });

    socket.on("callRequest", ({ from }) => {
      setClientId(from.id);
      setClientName(from.name);
      setCall({
        calling: true,
        status: "requesting",
      });
    });

    socket.on("accepted", ({ from }) => {
      setClientName(from.name);
      setCall({
        calling: true,
        status: "accepted",
      });
    });
  }, []);

  useEffect(() => {
    socket.on("gotMessage", ({ word, status }) => {
      setMessages([
        ...messages,
        {
          word,
          type: "client",
          status,
        },
      ]);
    });
  }, [messages]);

  useEffect(() => {
    if (messages.length > 2)
      socket.on("wordStatus", ({ word, status, from }) => {
        console.log("clledvalid");
        let existMessages = [...messages];
        existMessages[existMessages.length - 1].status = status;
        setMessages(existMessages);
        changeScore(from, word);
      });
  }, [messages]);

  const changeScore = (from, word) => {
    if (from === userId) {
      setUserScore(userScore + 10);
    } else {
      setClientScore(clientScore + 10);
    }
  };

  const sendRequest = (userData, clientData) => {
    setSignaling(true);
    setAction("sending");
    socket.emit("calling", {
      userData,
      clientData,
    });
  };

  const acceptRequest = (userData, clientData) => {
    socket.emit("callAccepted", {
      userData,
      clientData,
    });
    setCall({
      calling: true,
      status: "accepted",
    });
  };

  return (
    <SocketContext.Provider
      value={{
        userName,
        setUserName,
        clientId,
        setClientId,
        clientName,
        setClientName,
        socket,
        call,
        userId,
        signaling,
        setSignaling,
        action,
        setAction,
        sendRequest,
        acceptRequest,
        setMessages,
        messages,
        userScore,
        clientScore,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
