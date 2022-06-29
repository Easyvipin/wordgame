import React, { useState } from "react";
import styled from "styled-components";
import { SocketContext } from "@app/Contexts/SocketContext";
import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import Rings from "../rings.svg";
import { useContext } from "react";
import ShareComponent from "./ShareComponent";
import media from "@app/themes/media";

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
  ${media.lessThan("1000px")`
  width:90%;
  flex-wrap:wrap;
   `}
  flex-wrap: wrap;
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
  padding: 1rem 1rem;

  ${media.lessThan("1000px")`
  width: 100%;
  border-left:none;
  `}
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  font-size: ${fonts.size.medium};
  color: ${colors.headline};
  font-family: ${fonts.family.monts};
`;

const ConnectInterface = () => {
  const {
    action,
    call,
    acceptRequest,
    userName,
    userId,
    clientName,
    clientId,
  } = useContext(SocketContext);

  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    const userData = {
      name: userName,
      id: userId,
    };
    const clientData = {
      name: clientName,
      id: clientId,
    };
    acceptRequest(userData, clientData);
  };

  const openShareInterface = () => {
    if (!navigator.share) {
      navigator
        .share({
          title: "Come Play with me on RapidWord",
          url: `http://localhost:3000?uuid=${userId}`,
          text: "A place for words",
        })
        .then(() => {
          console.log("thanks for sharing");
        });
    } else {
      setDisplay(true);
    }
  };

  const renderInviteInterface = () => {
    return (
      <ConnectContainer>
        <InsideContainer>
          <h4>One Step Away...</h4>
          <StyledButton
            background={colors.primary}
            onClick={openShareInterface}
          >
            Invite
          </StyledButton>
        </InsideContainer>
        <InsideContainer borderLeft="2px dashed #fff">
          {call.status == "requesting" ? (
            <StyledDiv>
              <h4>{clientName} is waiting to join..</h4>
              <StyledButton onClick={handleClick} background={colors.Tertiary}>
                Accept
              </StyledButton>
            </StyledDiv>
          ) : (
            <StyledDiv>
              <h4>Requesting to Join</h4>
              <img src={Rings} />
            </StyledDiv>
          )}
        </InsideContainer>
      </ConnectContainer>
    );
  };
  const renderRequestingInterface = () => {
    return (
      <>
        <InsideContainer>
          <StyledDiv>
            <StyledHeader>Request Sent</StyledHeader>
            <h4>You'll Shortly Join</h4>
            <img src={Rings} />
          </StyledDiv>
        </InsideContainer>
      </>
    );
  };

  return (
    <StyledDivContainer>
      {display && (
        <ShareComponent
          setDisplay={setDisplay}
          url={`Come Play with Words , Invite your Partner http://localhost:3000?id=${userId}`}
        />
      )}
      {action === "rec" ? renderInviteInterface() : renderRequestingInterface()}
    </StyledDivContainer>
  );
};

export default ConnectInterface;
