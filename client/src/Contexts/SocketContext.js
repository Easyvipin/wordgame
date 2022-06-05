import { set } from "express/lib/application";
import React, { createContext, useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SocketContext = createContext();
const socket = io("http://localhost:5000");

const SocketContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("name");
  const [clientName, setClientName] = useState("name");
  const [userId, setUserId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [call, setCall] = useState({});
  const [signaling, setSignaling] = useState(false);

  useEffect(() => {
    socket.on("clientConnected", (id) => {
      console.log(id);
      setUserId(id);
    });

    socket.on("callUser", ({ from, userName }) => {
      setClientId(from);
      setCall({ isRecieving: true, joined: false });
      setClientName(userName);
    });
  }, []);

  const makeGame = (id) => {
    socket.emit("callSignal", {
      calledId: id,
      from: userId,
      userName,
    });
    setSignaling(true);
    socket.on("callAccepted", ({ from, clientName }) => {
      setCall({ ...call, joined: true });
      setClientName(clientName);
      setClientId(from);
    });
  };

  const joinGame = () => {
    socket.emit("answerCall", {
      to: clientId,
      from: userId,
      clientName: userName,
    });
    setSignaling(true);
    setCall({ ...call, joined: true });
  };

  return (
    <SocketContext.Provider
      value={{
        clientId,
        setClientId,
        userName,
        setUserName,
        clientName,
        setClientName,
        makeGame,
        joinGame,
        socket,
        call,
        userId,
        signaling,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
