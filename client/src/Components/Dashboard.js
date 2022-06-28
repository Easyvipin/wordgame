import React, { useContext } from "react";
import ConnectInterface from "./ConnectInterface";
import { SocketContext } from "@app/Contexts/SocketContext";
import GameDashboard from "./GameDashboard";

const Dashboard = () => {
  const { call } = useContext(SocketContext);
  return (
    <div>
      {call.status === "accepted" ? <GameDashboard /> : <GameDashboard />}
    </div>
  );
};

export default Dashboard;
