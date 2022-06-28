import React, { useContext } from "react";
import queryString from "query-string";
import Chat from "@Components/Chat";
import FlexContainer from "@Components/FlexContainer";
import Game from "@Components/Game";
import { SocketContext } from "./Contexts/SocketContext";
import GameForm from "./Components/GameForm";
import Banner from "./Components/Banner";
import Dashboard from "./Components/Dashboard";
import { useEffect } from "react";

const App = () => {
  const { signaling } = useContext(SocketContext);
  const queryObj = queryString.parse(window.location.search);

  return (
    <div>
      <FlexContainer justifyContent="flex-start" alignItems="flex-start">
        {signaling ? (
          <Dashboard />
        ) : (
          <>
            <Banner />
            <GameForm existUuid={queryObj.id} />
          </>
        )}
      </FlexContainer>
    </div>
  );
};

export default App;
