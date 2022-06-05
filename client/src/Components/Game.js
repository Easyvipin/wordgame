import React, { useContext, useState } from "react";
import { SocketContext } from "../Contexts/SocketContext";

const Game = () => {
  const { makeGame, joinGame, setUserName } = useContext(SocketContext);
  const [id, setId] = useState(null);
  return (
    <div>
      <form>
        user id:
        <input type="text" onChange={(e) => setId(e.target.value)}></input>
        name:
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </form>
      <button onClick={() => makeGame(id)}>Call</button>
      <button onClick={joinGame}>Join</button>
    </div>
  );
};

export default Game;
