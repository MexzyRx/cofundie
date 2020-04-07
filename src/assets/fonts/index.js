import MuseoSans300 from "./MuseoSans300.woff2";
import MuseoSans500 from "./MuseoSans500.woff2";
import MuseoSans700 from "./MuseoSans700.woff2";

export default `
  @font-face {
    font-family: MuseoSans300;
    src: url(${MuseoSans300}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: MuseoSans500;
    src: url(${MuseoSans500}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: MuseoSans700;
    src: url(${MuseoSans700}) format('woff2');
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }
`;
