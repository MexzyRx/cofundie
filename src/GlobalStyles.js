import { createGlobalStyle } from "styled-components";
import fonts from "assets/fonts";

import {
  H1_SIZE,
  H2_SIZE,
  H2_SIZE_SM,
  H3_SIZE,
  H3_SIZE_SM,
  COLORS,
} from "app-constants";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: MuseoSans300;
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  h1 {
    font-size: ${H1_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  h2 {
    font-size: ${H2_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  
  h3 {
    font-size: ${H3_SIZE}rem;
    color: ${COLORS.BLUE}
  }

  h1, h2, h3 {
    font-family: MuseoSans700;
  }

  h4, h5 {
    font-family: MuseoSans500;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: ${H2_SIZE_SM}rem;
    }

    h3 {
      font-size: ${H3_SIZE_SM}rem;
    }
  }

  ${fonts}

  body {
    font-family: MuseoSans300;
    color: #3d3d3d;
    /* font-weight: 300; */
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1.4;;
    min-height: 100vh;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      font-size: 16px;
    }
  }
`;
