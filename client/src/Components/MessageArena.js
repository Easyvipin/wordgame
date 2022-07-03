import media from "@app/themes/media";
import fonts from "@app/themes/fonts";
import React from "react";
import styled from "styled-components";
import VerifyIcon from "../loading.gif";
import cover from "../cover.jpg";
import colors from "@app/themes/colors";

const MessageContainer = styled.div`
  width: 100%;
  flex: 8;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  background-image: url(${cover});
  background-size: cover;
  ${media.lessThan("1000px")`
  flex: 9;
   `}
`;

const Message = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.side === "client" ? "flex-end" : "flex-start"};
`;

const Text = styled.div`
  font-family: ${fonts.family.im};
  font-size: 1.2rem;
  min-width: 6rem;
  width: auto;
  border: 2px solid ${colors.primary};
  border-radius: 3px;
  padding: 0.3rem;
  background-color: ${colors.lightBg};
  box-shadow: 0px 0px 4px ${colors.primary};
`;

const Icon = styled.img`
  border-radius: 50%;
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  bottom: -20%;
  ${(props) => (props.side === "client" ? "right:-1%" : "left:-1%")}
`;

/* 
<img src="https://img.icons8.com/color/48/000000/verified-account.png"/>
*/

/* <img src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/> */

const MessageArena = ({ messages }) => {
  const renderMessageOnType = () => {
    return messages.map((eachMessage) => (
      <Message side={eachMessage.type}>
        <Text>{eachMessage.word}</Text>
        <Icon
          side={eachMessage.type}
          src="https://img.icons8.com/color/48/000000/verified-account.png"
        ></Icon>
      </Message>
    ));
  };
  return (
    <MessageContainer>
      {messages.length > 0 && renderMessageOnType()}
      {/* 
      <Message side="user">
        {" "}
        <Text>Hello</Text>
        <Icon
          side="user"
          src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"
        ></Icon>
      </Message>
      <Message side="client">
        <Text>Hello</Text>
        <Icon side="client" src={VerifyIcon}></Icon>
      </Message>
      <Message side="user">
        <Text>Hello</Text>
        <Icon side="user" src={VerifyIcon}></Icon>
      </Message>
      <Message side="client">
        <Text>Hello</Text>{" "}
  </Message> */}
    </MessageContainer>
  );
};

export default MessageArena;
