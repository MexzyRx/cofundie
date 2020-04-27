import React from "react";
import styled from "styled-components";

const Style = styled.nav`
  z-index: 200;
  padding-top: 4rem;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 55%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
`;

const SidenavItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SidenavItem = styled.li`
  list-style: none;
  width: 85%;
  /* color: $aqua; */
  padding: 1.5rem;
`;

const Sidenav = (props) => {
  return (
    <Style {...props}>
      <SidenavItems>
        <SidenavItem>
          <a href="https://www.cofundie.com/about-us">About</a>
        </SidenavItem>
        <SidenavItem>
          <a href="https://www.cofundie.com/faq">FAQ</a>
        </SidenavItem>
        <SidenavItem>
          <a
            href="https://realsights.cofundie.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Realsights Blog
          </a>
        </SidenavItem>
        <SidenavItem>
          <a href="https://app.cofundie.com">Sign in</a>
        </SidenavItem>
      </SidenavItems>
    </Style>
  );
};

export default Sidenav;
