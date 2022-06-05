import React from "react";
import styled from "styled-components";
import { colors, fonts } from "@themes";

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${colors.para};
  cursor: pointer;
`;

const Container = styled.div`
  position: absolute;
  top: 80%;
  left: 30%;
  display: flex;
  justify-content: space-between;
  width: 20rem;
  padding: 2rem 2rem;
  background: ${colors.lightBg};
  box-shadow: 0px 0px 2px ${colors.buttonText};
  border-radius: 0.3rem;
`;
const Icon = styled.i`
  font-size: 5rem;
`;
const ShareContainer = () => {
  return (
    <Container>
      <StyledAnchor>
        <i
          class="fa fa-instagram"
          style={{
            fontSize: "2.5rem",
          }}
        ></i>
      </StyledAnchor>
      <StyledAnchor>
        <i
          class="fa fa-twitter"
          style={{
            fontSize: "2.5rem",
          }}
        ></i>
      </StyledAnchor>
      <StyledAnchor>
        <i
          class="fa fa-twitch"
          style={{
            fontSize: "2.5rem",
          }}
        ></i>
      </StyledAnchor>
      <StyledAnchor>
        <i
          class="fa fa-facebook"
          style={{
            fontSize: "2.5rem",
          }}
        ></i>
      </StyledAnchor>
    </Container>
  );
};

export default ShareContainer;
