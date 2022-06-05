import React, { useContext } from "react";
import Chat from "@Components/Chat";
import FlexContainer from "@Components/FlexContainer";
import Game from "@Components/Game";
import { SocketContext } from "./Contexts/SocketContext";
import GameForm from "./Components/GameForm";
import Banner from "./Components/Banner";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const { signaling } = useContext(SocketContext);
  return (
    <div>
      <FlexContainer justifyContent="flex-start" alignItems="flex-start">
        {signaling ? (
          <Dashboard />
        ) : (
          <>
            <Banner />
            <GameForm />
          </>
        )}
      </FlexContainer>
    </div>
  );
};

export default App;
