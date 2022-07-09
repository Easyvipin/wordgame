import colors from "@app/themes/colors";
import media from "@app/themes/media";
import fonts from "@app/themes/fonts";
import React from "react";
import styled from "styled-components";
import { SocketContext } from "@app/Contexts/SocketContext";
import { useContext } from "react";

const Container = styled.div`
  flex: 2;
`;

const FlexContainer = styled.div`
  display: flex;
  border-radius: 0px 0px 20px 20px;
  padding: 1rem;
  border: 2px solid pink;
  margin: 2rem;
  position: relative;
  justify-content: space-between;
  ${media.lessThan("1000px")`
   padding:0.2rem;
   margin:1rem;
  `}
`;

const UserPlayerStatsContainer = styled.div`
  flex: 1;
  border-radius: 12px 0px 0px 12px;
  padding-left: 1rem;
  text-align: left;
  ${media.lessThan("1000px")`
   padding:0.4rem;
  `}
`;

const UserText = styled.span`
  font-size: 1.5rem;
  font-weight: ${fonts.weight.extraBold};

  ${media.lessThan("1000px")`
  font-size:1rem;
  `}
`;

const UserStyledScore = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  font-weight: ${fonts.weight.extraBold};
  font-family: ${fonts.family.monoton};
  width: calc(80% / 100vw);
  padding-left: 1rem;
  margin-left: 1rem;

  ${media.lessThan("1000px")`
  font-size:0.9rem;
  width:auto;
  border:none;
  `}
`;

const ClientPlayerStatsContainer = styled.div`
  flex: 1;
  border-radius: 12px 0px 0px 12px;
  padding-right: 1rem;
  text-align: right;
  ${media.lessThan("1000px")`
   padding:0.4rem;
  `}
`;

const ClientText = styled.span`
  font-size: 1.5rem;
  font-weight: ${fonts.weight.extraBold};
  ${media.lessThan("1000px")`
  font-size:1rem;
  `}
`;

const ClientStyledScore = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  font-weight: ${fonts.weight.extraBold};
  font-family: ${fonts.family.monoton};
  width: calc(80% / 100vw);
  padding-right: 1rem;
  margin-right: 1rem;
  text-align: right;

  ${media.lessThan("1000px")`
  font-size:0.9rem;
  width:auto;
  padding-right: 0.5rem;
  border:none;
  `}
`;

const WordContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  font-size: 2rem;
  font-weight: ${fonts.weight.extraBold};
  background-color: #fff;
  left: 47%;
  top: 4.4%;
  z-index: 2;
  background-color: ${colors.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;

  ${media.lessThan("1000px")`
  width: 70px;
  height: 70px;
  left: 44%;
  top:6.5%;
  `}
`;

const ScoreDashboard = () => {
  const { userName, clientName, userScore, clientScore } =
    useContext(SocketContext);
  return (
    <Container>
      <WordContainer>W</WordContainer>
      <FlexContainer>
        <UserPlayerStatsContainer>
          <UserText>{userName}</UserText>
          <UserStyledScore>{userScore}</UserStyledScore>
        </UserPlayerStatsContainer>
        <ClientPlayerStatsContainer>
          <ClientStyledScore>{clientScore}</ClientStyledScore>
          <ClientText>{clientName}</ClientText>
        </ClientPlayerStatsContainer>
      </FlexContainer>
    </Container>
  );
};

export default ScoreDashboard;
