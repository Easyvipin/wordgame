import colors from "@app/themes/colors";
import styled from "styled-components";
import MessageArena from "./MessageArena";
import ScoreDashboard from "./ScoreDashboard";

const ChatLayout = styled.div`
  box-sizing: border-box;
  border: 2px solid yellow;
  width: 60vw;
  height: 80vh;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: start;
  height: auto;
  flex: 2;
`;

const FormContainer = styled.div`
  flex: 3;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  padding: 0rem 1rem;
  background-color: ${colors.Tertiary};
  color: #fff;
`;
const StyledButton = styled.button`
  flex: 1;
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.buttonText};
  font-size: 2rem;
  outline: none;
  cursor: pointer;
  border: none;
`;

const ChatComponent = () => {
  return (
    <ChatLayout>
      <ScoreDashboard />
      <MessageArena />
      <InputContainer>
        <FormContainer>
          <StyledInput type="text" />
        </FormContainer>
        <StyledButton>Send</StyledButton>
      </InputContainer>
    </ChatLayout>
  );
};

export default ChatComponent;
