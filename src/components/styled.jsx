import styled from "styled-components";
import { space, color, layout } from "styled-system";

// import { COLORS } from "app-constants";

export const Button = styled.button`
  ${layout}
  ${space}
  ${color}
  

  background-color: ${props => props.bg};
  /* ${props => props.borderColor && `border: ${props.borderColor}`}; */
  border-color: ${props => (props.borderColor ? props.borderColor : props.bg)};
  border-radius: 2px;
  color: ${props => props.color};
  font-size: 2.4rem;
  padding: 1.6rem 6rem;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  box-shadow: ${props =>
    props.boxShadow ? "2px 6px 4px 0 rgba(0,0,0,0.15);" : "none"}; 
  

  @media (max-width: 768px) {
  padding: 1.2rem 3rem;
    font-size: 1.6rem
  }
`;

export const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* background-color: red; */
`;
