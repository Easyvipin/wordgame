import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import bannerImg from "../words.jpg";
import ShareContainer from "./ShareContainer";

const StyledBanner = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  min-height: 100vh;
  flex: 1.5;
  ${media.lessThan("1000px")`
    border:2px solid yellow;
    display:none;
  `}
  position:relative;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <ShareContainer />
    </StyledBanner>
  );
};

export default Banner;
