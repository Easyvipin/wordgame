import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import React from "react";
import styled from "styled-components";

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
`;

const UserPlayerStatsContainer = styled.div`
  flex: 1;
  border-radius: 12px 0px 0px 12px;
  padding-left: 1rem;
`;

const UserText = styled.span`
  font-size: 1.5rem;
  font-weight: ${fonts.weight.extraBold};
`;

const UserStyledScore = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  font-weight: ${fonts.weight.extraBold};
  font-family: ${fonts.family.monoton};
  width: 300px;
  padding-left: 1rem;
  border: 2px solid white;
  margin-left: 1rem;
  border-radius: 12px 0px 0px 12px;
`;

const ClientPlayerStatsContainer = styled.div`
  flex: 1;
  border-radius: 12px 0px 0px 12px;
  padding-right: 1rem;
`;

const ClientText = styled.span`
  font-size: 1.5rem;
  font-weight: ${fonts.weight.extraBold};
`;

const ClientStyledScore = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  font-weight: ${fonts.weight.extraBold};
  font-family: ${fonts.family.monoton};
  width: 300px;
  padding-right: 1rem;
  border: 2px solid white;
  margin-right: 1rem;
  border-radius: 0px 12px 12px 0px;
  text-align: right;
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
  left: 46%;
  top: 4.4%;
  z-index: 2;
  background-color: ${colors.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
`;

const ScoreDashboard = () => {
  return (
    <Container>
      <WordContainer>W</WordContainer>
      <FlexContainer>
        <UserPlayerStatsContainer>
          <UserText>Name</UserText>
          <UserStyledScore>40</UserStyledScore>
        </UserPlayerStatsContainer>
        <ClientPlayerStatsContainer>
          <ClientStyledScore>40</ClientStyledScore>
          <ClientText>Name</ClientText>
        </ClientPlayerStatsContainer>
      </FlexContainer>
    </Container>
  );
};

export default ScoreDashboard;
