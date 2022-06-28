import fonts from "@app/themes/fonts";
import React from "react";
import styled from "styled-components";
import VerifyIcon from "../loading.gif";

const MessageContainer = styled.div`
  width: inherit;
  flex: 8;
  border: 2px solid red;
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
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
  border: 2px solid green;
  padding: 0.3rem;
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

const MessageArena = () => {
  return (
    <MessageContainer>
      <Message side="client">
        <Text>Hello</Text>
        <Icon
          side="client"
          src="https://img.icons8.com/color/48/000000/verified-account.png"
        ></Icon>
      </Message>
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
      </Message>
    </MessageContainer>
  );
};

export default MessageArena;
