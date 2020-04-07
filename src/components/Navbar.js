import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "components/styled";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";
import menu from "assets/images/svg/hamburger.svg";

const NavbarStyle = styled.nav`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 10rem;

  font-size: 2.2rem;

  img {
    height: 5rem;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;

    > * {
      /* &:not(:last-child) { */
      margin-right: 5rem;
      /* } */
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    > * {
      margin-right: unset;
    }

    img {
    }
  }
`;

const NavButton = styled(Button)`
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
  }
`;

const Navbar = (props) => {
  const [width, setWidth] = React.useState(0);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      // Clean up
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  return (
    <NavbarStyle>
      {width > 900 ? (
        <>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul>
            <li>
              <a href="https://www.cofundie.com/about-us">About</a>
            </li>
            <li>
              <a href="https://www.cofundie.com/faq">FAQ</a>
            </li>
            <li>
              <a href="https://realsights.cofundie.com/" target="_black">
                Realsights Blog
              </a>
            </li>
            <a href="https://app.cofundie.com">
              <NavButton
                bg="white"
                borderColor={COLORS.BLUE}
                color={COLORS.BLUE}
              >
                Get Started
              </NavButton>
            </a>
            <li>
              <a href="https://app.cofundie.com">Sign in</a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <Link to="/">
            <img style={{ width: "8rem", height: "auto" }} src={logo} alt="" />
          </Link>
          <a href="https://app.cofundie.com">
            <NavButton bg="white" borderColor={COLORS.BLUE} color={COLORS.BLUE}>
              Get Started
            </NavButton>
          </a>
          <img style={{ width: "2.5rem", height: "auto" }} src={menu} alt="" />
        </>
      )}
    </NavbarStyle>
  );
};

Navbar.propTypes = {};

export default Navbar;
