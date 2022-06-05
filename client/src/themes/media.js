import { generateMedia } from "styled-media-query";

const breakPoints = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 992,
};

const media = generateMedia({
  mobile: `${breakPoints.MOBILE}/16}em`,
  tablet: `${breakPoints.TABLET}/16}em`,
  desktop: `${breakPoints.DESKTOP}/16}em`,
});

console.log(media);

export default media;
