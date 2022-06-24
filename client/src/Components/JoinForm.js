import React from "react";
import styled from "styled-components";
import { colors, fonts } from "@themes";
import { useRef } from "react";
import { SocketContext } from "@app/Contexts/SocketContext";
import { useContext } from "react";
import { useState } from "react";

const Card = styled.div`
  margin: 1rem 1rem;
  box-shadow: 0px 0px 4px ${colors.lightBg};
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  flex: 1;
  min-width: 60%;
  background: ${colors.lightBg};
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0rem;
  display: block;
  letter-spacing: 0.1rem;
`;

const Header = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 1.2rem;
  padding: 0.4rem 0.4rem;
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

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 0.7rem;
`;

const StyledHint = styled.span`
  color: #ccc;
  display: block;
`;

const JoinForm = () => {
  const [hint, setHint] = useState({
    nameValidation: false,
    idValidtion: false,
  });

  const {
    userName,
    setUserName,
    setClientId,
    clientId,
    userId,
    sendRequest,
    setSignaling,
    setAction,
  } = useContext(SocketContext);

  const nameRef = useRef();
  const uuidRef = useRef();

  const handleOnChange = (e, type) => {
    if (type == "name") {
      setUserName(e.target.value);
    } else {
      setClientId(e.target.value);
    }
  };

  const joinHandler = (e) => {
    e.preventDefault();
    let inputName = nameRef.current.value.length;
    let inputUuid = uuidRef.current.value.length;
    if (inputName > 0 && inputUuid > 0) {
      const userData = {
        name: userName,
        id: userId,
      };
      const clientData = {
        id: clientId,
      };
      sendRequest(userData, clientData);
    } else {
      nameRef.current.focus();
    }
  };

  const startHandler = (e) => {
    e.preventDefault();
    if (nameRef.current.value != "") {
      setSignaling(true);
      setAction("rec");
    } else {
      nameRef.current.focus();
    }
  };

  return (
    <Card>
      <form>
        <FormContainer>
          <StyledLabel for="name">Name</StyledLabel>
          <StyledInput
            ref={nameRef}
            onChange={(e) => handleOnChange(e, "name")}
            type="text"
          ></StyledInput>
        </FormContainer>
        <FormContainer>
          <StyledLabel for="clientId">Unique Id</StyledLabel>
          <StyledInput
            ref={uuidRef}
            onChange={(e) => handleOnChange(e, "uuid")}
            type="text"
          ></StyledInput>
        </FormContainer>
        <StyledButton
          marginTop="2rem"
          onClick={(e) => joinHandler(e)}
          background={colors.primary}
        >
          Join
        </StyledButton>
        <StyledButton
          background={colors.primary}
          onClick={(e) => startHandler(e)}
        >
          Start
        </StyledButton>
      </form>
    </Card>
  );
};

export default JoinForm;
