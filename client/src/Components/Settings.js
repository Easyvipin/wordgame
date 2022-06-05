import React from "react";
import styled from "styled-components";
import { colors } from "@themes";
import FlexContainer from "./FlexContainer";

const Card = styled.div`
  margin: 1rem 1rem;
  box-shadow: 0px 0px 4px ${colors.lightBg};
  padding: 1rem 0.8rem;
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  flex: 1;
  min-width: 60%;
  background: ${colors.lightBg};
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0rem;
  display: block;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
`;

const StyledButton = styled.button`
  display: block;
  padding: 0.4rem 0.4rem;
  outline: none;
  background: none;
  border: 1px solid black;
  min-width: 12rem;
`;

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const Heading = styled.h3`
  margin: 0.1rem;
  text-align: center;
  color: ${colors.focused};
`;

const StyledSelect = styled.select`
  padding: 0.4rem 0.4rem;
  font-weight: 800;
  background: ${colors.background};
  color: ${colors.Tertiary};
  min-width: 4.5rem;
  border-radius: 0.6rem;
`;

const StyledOption = styled.option`
  padding: 0.3rem 0.3rem;
`;

const Settings = () => {
  return (
    <Card>
      <Heading>Settings</Heading>
      <form>
        <FlexContainer justifyContent="center">
          <FormContainer>
            <StyledLabel for="level">Level</StyledLabel>
            <StyledSelect name="level">
              <option>Easy</option>
              <option>Hard</option>
              <option>Wizards</option>
            </StyledSelect>
          </FormContainer>
          <FormContainer>
            <StyledLabel for="chances">Turns</StyledLabel>
            <StyledSelect name="chances">
              <option>4</option>
              <option>6</option>
              <option>8</option>
            </StyledSelect>
          </FormContainer>
        </FlexContainer>
      </form>
    </Card>
  );
};

export default Settings;
