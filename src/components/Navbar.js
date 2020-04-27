import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "components/styled";

import Sidenav from "components/Sidenav";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";
import menu from "assets/images/svg/hamburger.svg";

const NavbarStyle = styled.nav`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;
  font-weight: bold;

  font-size: 1.4rem;

  img {
    height: 4rem;
  }

  a {
    color: unset;
    text-decoration: none;
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

const NavbarItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;

  > * {
    /* &:not(:last-child) { */
    margin-right: 3.5rem;
    /* } */
  }
`;

const NavButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1.5rem 4.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

const Navbar = (props) => {
  const [width, setWidth] = React.useState(0);
  const [showSidenav, setShowsidenav] = React.useState(false);

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
          <NavbarItems>
            <li>
              <a href="https://www.cofundie.com/about-us">About</a>
            </li>
            <li>
              <a href="https://www.cofundie.com/faq">FAQ</a>
            </li>
            <li>
              <a
                href="https://realsights.cofundie.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
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
          </NavbarItems>
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
          <img
            onClick={() => setShowsidenav(!showSidenav)}
            style={{ width: "2.5rem", height: "auto", cursor: "pointer" }}
            src={menu}
            alt=""
          />
          <Sidenav style={{ visibility: showSidenav ? "visible" : "hidden" }} />
        </>
      )}
    </NavbarStyle>
  );
};

Navbar.propTypes = {};

export default Navbar;
