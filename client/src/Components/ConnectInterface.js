import React from "react";
import styled from "styled-components";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
const StyledDivContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px ${colors.lightBg};
  padding: 1rem 1rem;
  width: 30%;
`;

const StyledButton = styled.button`
  display: block;
  padding: 0.7rem 0.4rem;
  outline: none;
  background: none;
  border: ${(props) => props.border || "none"};
  border-radius: 0.25rem;
  min-width: 100%;
  margin-bottom: 0.8rem;
  color: ${colors.buttonText};
  font-family: ${fonts.family.monts};
  font-size: ${fonts.size.small};
  margin-top: ${(props) => props.marginTop || 0};
  background: ${(props) => props.background};
  font-weight: 800;
`;

const InsideContainer = styled.div`
  border-left: ${(props) => props.borderLeft || "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ConnectInterface = ({ connectType = "start" }) => {
  const renderInviteInterface = () => {
    return (
      <ConnectContainer>
        <InsideContainer>
          <h3>One Step Away...</h3>
          <StyledButton background={colors.primary}>Invite</StyledButton>
        </InsideContainer>
        <InsideContainer>
          <h4>JOHN is requesting to join..</h4>
          <StyledButton background={colors.Tertiary}>Accept</StyledButton>
        </InsideContainer>
      </ConnectContainer>
    );
  };
  const renderRequestingInterface = () => {
    return <div>Requesting..</div>;
  };

  return (
    <StyledDivContainer>
      {connectType === "start"
        ? renderInviteInterface()
        : renderRequestingInterface()}
    </StyledDivContainer>
  );
};

export default ConnectInterface;
