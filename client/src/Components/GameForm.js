import React, { useContext } from "react";
import styled from "styled-components";
import FlexContainer from "@Components/FlexContainer";
import JoinForm from "./JoinForm";
import Settings from "./Settings";
import { colors, fonts } from "@themes";

const Header = styled.div`
  text-align: center;
  color: ${colors.headline};
  margin-top: 2rem;
`;

const Heading = styled.div`
  font-family: ${fonts.family.monts};
  font-size: 3.4rem;
`;

const Para = styled.p`
  font-family: ${fonts.family.hind};
  font-size: 1.2rem;
`;

const GameForm = () => {
  return (
    <FlexContainer
      flex="1"
      direction="column"
      padding="1rem 2rem"
      alignItems="center"
      justifyContent="center"
      height=""
    >
      <Header>
        <Heading>RapiWord</Heading>
        <Para>Get better with words while you PLAY!</Para>
      </Header>
      <JoinForm />
      <Settings />
    </FlexContainer>
  );
};

export default GameForm;
