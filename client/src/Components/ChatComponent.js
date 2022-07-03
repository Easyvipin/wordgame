import colors from "@app/themes/colors";
import styled from "styled-components";
import media from "styled-media-query";
import MessageArena from "./MessageArena";
import ScoreDashboard from "./ScoreDashboard";
import { SocketContext } from "@app/Contexts/SocketContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ChatLayout = styled.div`
  box-sizing: border-box;
  border: 4px solid ${colors.buttonText};
  border-radius: 5px;
  width: 60vw;
  height: 80vh;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 10px 20px ${colors.lightBg};
  ${media.lessThan("1000px")`
    border:2px solid yellow;
    width:100%;
    border: none;
  `}
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: start;
  height: auto;
  flex: 2;
  ${media.lessThan("1000px")`
    align-items:center;
  `}
`;

const FormContainer = styled.div`
  flex: 3;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  padding: 0rem 1rem;
  background-color: ${colors.primary};
  color: #fff;

  ${media.lessThan("1000px")`
  font-size: 2rem;
  height:auto;
  padding:0.8rem 0.8rem;
   `}
`;
const StyledButton = styled.button`
  flex: 1;
  height: 100%;
  background-color: ${colors.Tertiary};
  color: ${colors.buttonText};
  font-size: 2rem;
  outline: none;
  cursor: pointer;
  border: none;

  ${media.lessThan("1000px")`
  height:auto;
  padding:0.9rem 0.8rem;
   `}
`;

const ChatComponent = () => {
  const { socket, userId, clientId, setMessages, messages } =
    useContext(SocketContext);
  const inputRef = useRef();
  console.log(clientId);
  const handleSend = () => {
    console.log("called");
    if (inputRef.current.value.length > 2) {
      console.log("called");
      socket.emit("wordMessage", {
        to: clientId,
        word: inputRef.current.value,
      });
      setMessages([
        ...messages,
        {
          word: inputRef.current.value,
          type: "user",
        },
      ]);
    }
  };

  return (
    <ChatLayout>
      <ScoreDashboard />
      <MessageArena messages={messages} />
      <InputContainer>
        <FormContainer>
          <StyledInput type="text" ref={inputRef} />
        </FormContainer>
        <StyledButton onClick={handleSend}>Send</StyledButton>
      </InputContainer>
    </ChatLayout>
  );
};

export default ChatComponent;
