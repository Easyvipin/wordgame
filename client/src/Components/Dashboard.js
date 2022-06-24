import React, { useContext } from "react";
import ConnectInterface from "./ConnectInterface";
import { SocketContext } from "@app/Contexts/SocketContext";

const Dashboard = () => {
  const { call } = useContext(SocketContext);
  return (
    <div>
      {call.status === "accepted" ? "Game Dashboard" : <ConnectInterface />}
    </div>
  );
};

export default Dashboard;
