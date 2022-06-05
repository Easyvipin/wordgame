import React from "react";
import styled from "styled-components";
import { fonts } from "@themes";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  min-height: ${(props) => props.height || "auto"};
  flex: ${(props) => props.flex};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  font-family: ${(props) => props.fontFamily || fonts.family.hind};
`;

const FlexContainer = ({
  children,
  direction,
  justifyContent,
  alignItems,
  flex,
  padding,
  border,
  height,
}) => {
  return (
    <StyledContainer
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flex={flex}
      padding={padding}
      border={border}
      height={height}
    >
      {children}
    </StyledContainer>
  );
};

export default FlexContainer;
