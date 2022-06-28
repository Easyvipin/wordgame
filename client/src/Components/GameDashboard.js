import React from "react";
import styled from "styled-components";
import ChatComponent from "./ChatComponent";

const Layout = styled.div`
  border: 2px solid #fff;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const GameDashboard = () => {
  return (
    <Layout>
      <ChatComponent />
    </Layout>
  );
};

export default GameDashboard;
