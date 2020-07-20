import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "app-constants";

import logo from "assets/images/cofundie-logo.png";
import facebook from "assets/images/facebook.svg";
import instagram from "assets/images/instagram.svg";
import twitter from "assets/images/twitter.svg";
import linkedin from "assets/images/linkedin.svg";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
`;

const FooterGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 30% 20% 20% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "logo quick resources wealth"
    "contact quick resources wealth"
    "social quick resources wealth";

  @media (max-width: 900px) {
    width: 90%;

    > * {
      padding-bottom: 2rem;
    }

    /* font-size: 1.4rem; */

    grid-template-columns: 30% 30% 40%;
    grid-template-areas:
      "logo logo ."
      "contact contact social"
      "quick resources wealth";
    /* "quick wealth resources"; */
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: unset;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

const LinkHead = styled.h4`
  font-size: 120%;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: unset;
  }
`;

const Copyright = styled.p`
  margin-top: 10rem;
  margin-bottom: 7rem;
  font-weight: 500;
  font-size: 130%;
  color: ${COLORS.BLUE};

  @media (max-width: 768px) {
    margin-top: 3rem;
    font-size: 80%;
  }
`;

const Logo = styled.img`
  grid-area: logo;

  width: 14rem;
`;

const Contacts = styled.div`
  grid-area: contact;

  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  grid-area: social;

  width: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 3rem;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: space-around;
    justify-self: center;

    img {
      width: 1.5rem;
      height: auto;
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <FooterGrid>
        <Logo src={logo} alt="" />
        <Contacts>
          <small>19 Banana street, East Legon Accra, Ghana</small>
          <small>
            <a
              href="mailto:info@cofundie.com"
              style={{ color: "unset", textDecoration: "none" }}
            >
              info@cofundie.com{" "}
            </a>
            <a
              href="https://wa.me/233240143392"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "unset", textDecoration: "none" }}
            >
              +233 24 014 3392
            </a>
          </small>
        </Contacts>
        <Social>
          <a href="https://www.facebook.com/cofundie">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitter.com/cofundie">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/cofundie/?hl=en">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/cofundie/">
            <img src={linkedin} alt="" />
          </a>
        </Social>
        <Links style={{ gridArea: "quick" }}>
          <LinkHead>Quick Links</LinkHead>
          <a href="https://www.cofundie.com/about-us">About Us</a>
          <a href="https://www.cofundie.com/contacts.html">Contact Us</a>
          <a href="https://www.cofundie.com/faq.html">FAQs</a>
          <a href="https://realsights.cofundie.com/">Blog</a>
        </Links>
        <Links style={{ gridArea: "resources" }}>
          <LinkHead>Resources</LinkHead>
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/terms-of-service" href="#/">
            Terms of service
          </Link>
          <Link to="/terms-and-conditions" href="#/">
            Terms &amp; conditions
          </Link>
          {/* <a href="#/">RSS Feeds</a> */}
          {/* <a href="#/">Legal</a> */}
        </Links>
        <Links style={{ textAlign: "center", gridArea: "wealth" }}>
          <LinkHead>Your wealth building partners</LinkHead>
          <span>Your wealth building partners</span>
          <span>Invest in real estate simply with us</span>

          <span
            style={{
              fontWeight: "700",
              color: `${COLORS.BLUE}`,
              marginTop: "2rem",
            }}
          >
            We are trustworthy
          </span>
          <span>Growing your money is our business</span>
        </Links>
      </FooterGrid>

      <Copyright>
        Cofundie Investment Technologies Limited, {year}. All rights reserved.
      </Copyright>
    </FooterStyle>
  );
};

export default Footer;
