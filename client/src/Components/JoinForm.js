import React from "react";
import styled from "styled-components";
import { colors, fonts } from "@themes";

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

const JoinForm = () => {
  return (
    <Card>
      <form>
        <FormContainer>
          <StyledLabel for="name">Name</StyledLabel>
          <StyledInput type="text"></StyledInput>
        </FormContainer>
        <FormContainer>
          <StyledLabel for="userId">uuid</StyledLabel>
          <StyledInput type="text"></StyledInput>
        </FormContainer>
        <StyledButton marginTop="2rem" background={colors.primary}>
          Join
        </StyledButton>
        <StyledButton background={colors.primary}>Invite Friend</StyledButton>
      </form>
    </Card>
  );
};

export default JoinForm;
