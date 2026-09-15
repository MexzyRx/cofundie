import styled from "styled-components";
import { space, layout, color } from "styled-system";

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* background-color: red; */
`;

export const Section = styled.section`
  ${color}
  ${space}

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Container = styled.div`
  ${layout}
  ${color}
`;

export const HorizontalScroll = styled.div`
  ${space}

  @media(max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    * {
      flex: 0 0 auto;
    }
  }
`;
