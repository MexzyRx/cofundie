import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { space } from "styled-system";
import { useRavePayment } from "react-ravepayment";
import Modal from "react-modal";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { PageStyle, Section, Container } from "components/layout";
import { Button } from "components/styled";
import { COLORS } from "app-constants";

import splash from "assets/images/covid-19/12-compressor.jpg";
import partnersLarge from "assets/images/covid-19/partners-new.jpg";
import partnersMobile from "assets/images/covid-19/partners-new.jpg";
import cancel from "assets/images/cancel.svg";
import bullet from "assets/images/bullet.svg";
import chevron from "assets/images/svg/chevron.svg";
// import custom_logo from "assets/images/logos/favicon.png";

const DetailsPageStyle = styled(PageStyle)`
  background-color: rgba(20, 55, 155, 0.02);
`;

const ListingTitle = styled.h3`
  @media (max-width: 768px) {
    font-size: 120%;
  }
`;

export const Image = styled.img`
  ${space}
  border-radius: 4px;
  width: 33%;
  height: 18rem;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80vw;
    height: 22rem;

    &:last-child {
      margin-right: 1.5rem;
    }
  }
`;

const MainImage = styled.img`
  display: flex;
  border-radius: 6px;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  object-fit: cover;
  box-shadow: 0 1.4px 1.9px -16px rgba(0, 0, 0, 0.022),
    0 4.3px 4.7px -16px rgba(0, 0, 0, 0.031),
    0 9.6px 9.6px -16px rgba(0, 0, 0, 0.039),
    0 19.3px 19.7px -16px rgba(0, 0, 0, 0.048),
    0 52px 54px -16px rgba(0, 0, 0, 0.07);
`;

const DetailsContainer = styled(Container)`
  margin: 0 auto;

  @media (max-width) {
  }
`;

const DetailsSection = styled(Section)`
  align-items: flex-start;
  text-align: left;

  ul {
    list-style: none;

    li {
      &::before {
        content: "";
        display: block;
        background: url(${bullet}) no-repeat;
        width: 10px;
        height: 10px;
        float: left;
        margin: 5px 15px 0px 0;
      }
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const CloseModal = styled.img`
  cursor: pointer;
  position: absolute;
  /* left: 95%; */
  right: 5rem;
  height: 3rem;

  @media (max-width: 768px) {
    right: 1.5rem;
    height: 1.5rem;
  }
`;

const H3 = styled.h3`
  ${space}
  text-align: center;

  @media (max-width: 768px) {
    font-size: 120%;
  }
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-top: 1rem;
  margin-top: 1.5rem;
  display: block;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${COLORS.BLUE};
  background-color: rgba(214, 254, 33, 0.1);
  padding: 2.5rem 3.5rem;
  border-radius: 4px;
  font-size: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    font-size: 80%;
  }
`;

const Select = styled(Input)`
  appearance: none;

  background-image: url(${chevron});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 2rem);
  background-position-y: 50%;
  background-size: 2rem;
`;

const CovidResponse = ({ listings, match }) => {
  // Live Public Key: FLWPUBK-e52fd5c470b420efc13b5829f24a101b-X

  // Test Public Key: FLWPUBK_TEST-b749a032b924e5f7b477d9d4ce9fad6c-X

  // Docs-ish
  // https://github.com/iamraphson/react-ravepayment/blob/master/docs/parameters.mdx#production

  // Webhooks
  // https://developer.flutterwave.com/docs/events
  const [amount, setAmount] = React.useState(null);
  const [width, setWidth] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [customer_firstname, setFirstName] = React.useState("");
  const [customer_lastname, setLastName] = React.useState("");
  const [customer_email, setEmail] = React.useState("");
  const [customer_phone, setPhone] = React.useState("");
  const [currency, setCurrency] = React.useState("NGN");

  const config = {
    txref: "rave-cofundie-covid-19",
    reference: "rave-cofundie-covid-19",
    custom_title: "Cofundie Investment Technologies",
    custom_description: "Real Estate Investing Made Simple",
    // custom_logo,

    customer_firstname,
    customer_lastname,
    customer_email,
    customer_phone,
    amount,
    currency,
    PBFPubKey: "FLWPUBK-e52fd5c470b420efc13b5829f24a101b-X",
    production: true,
  };

  const { initializePayment } = useRavePayment(config);

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
    <DetailsPageStyle>
      <Navbar />
      <main>
        <Section mt="4rem">
          <ListingTitle>Covid-19 Mobile Testing Centres</ListingTitle>

          <Button
            my="5rem"
            bg={COLORS.LIME}
            color={COLORS.BLUE}
            borderColor={COLORS.BLUE}
            boxShadow="true"
            onClick={() => setVisible(true)}
            // onClick={() => initializePayment()}
          >
            Donate Now
          </Button>
        </Section>

        <MainImage src={splash} />
        <DetailsContainer width={{ sm: "75vw", lg: "60vw" }}>
          <DetailsSection my="5rem" textAlign="left">
            <h3
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              Summary
            </h3>
            <p style={{ marginBottom: "2rem" }}>
              The COVID-19 crisis is the worst thing many of us have seen in our
              lifetimes. It has devastated almost every single aspect of our
              lives including social, mental &amp; physical health and
              financial.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              West Africa thankfully has not recorded large numbers of deaths
              and this has been due to a combination of swift action from
              governments, private organisations, and compliance with health
              restrictions by the general public.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              What is however obvious to most experts is that African countries
              cannot afford open-ended lockdowns like is being practised in
              western countries due to our unique geopolitical realities.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              The only way we can safely resume our lives is to implement
              widespread testing across the entire country.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              To support this effort, we have collaborated with an array of
              companies and bodies across the country to build mobile testing
              centres for Covid-19.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              These Centres are going to be built using recycled shipping
              containers. The design is proprietary and has taken into
              consideration all safety measures necessary to protect all
              personnel involved.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Your donation will fund the construction, transportation and
              stocking costs of the testing centre. We encourage you to be part
              of this initiative.
            </p>
          </DetailsSection>
        </DetailsContainer>
        <DetailsContainer width={{ sm: "75vw", lg: "60vw" }}>
          <DetailsSection my="5rem" textAlign="left">
            <h3
              style={{
                marginBottom: "2rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              Partners
            </h3>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "6px",
              }}
              src={width <= 480 ? partnersMobile : partnersLarge}
              alt=""
            />
          </DetailsSection>
        </DetailsContainer>

        <Section>
          <Button
            my="5rem"
            bg={COLORS.LIME}
            color={COLORS.BLUE}
            borderColor={COLORS.BLUE}
            boxShadow="true"
            onClick={() => setVisible(true)}
            // onClick={() => initializePayment()}
          >
            Donate Now
          </Button>
        </Section>
        <Section bg={COLORS.BLUE} mt="15rem" py="5rem" color="white">
          <Container width="70%">
            <h3 style={{ color: "white" }}>
              Join thousands of Property Owners, Agents and Individuals that
              love using Cofundie.
            </h3>
            <p style={{ paddingTop: "3rem" }}>
              Signing up is easy, and our team will get you started in no time.
            </p>
            <Button
              mt="5rem"
              bg={COLORS.LIME}
              color={COLORS.BLUE}
              borderColor={COLORS.BLUE}
              boxShadow="true"
            >
              Get Started
            </Button>
          </Container>
        </Section>
      </main>
      <Modal
        isOpen={visible}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "10rem",
            left: "15vw",
            right: "15vw",
            bottom: "4rem",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "8px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <CloseModal src={cancel} alt="" onClick={() => setVisible(false)} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            initializePayment();
          }}
        >
          <H3 mt="4rem">Donate</H3>

          <Label>First name</Label>
          <Input
            name="customer_firstname"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={customer_firstname}
            placeholder="John"
          />

          <Label>Last name</Label>
          <Input
            name="customer_lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={customer_lastname}
            placeholder="Sylvester"
          />

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={customer_email}
            placeholder="john.sylvester@gmail.com"
          />

          <Label>Phone number</Label>
          <Input
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={customer_phone}
            placeholder="265-564-000"
          />

          <Label htmlFor="currency">Select currency</Label>
          <Select
            as="select"
            required
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="NGN">Naira</option>
            <option value="USD">USD</option>
            <option value="GHS">GHS</option>
          </Select>

          <Label>Donation amount {currency && `(in ${currency})`}</Label>
          <Input
            name="amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="265-564-000"
          />

          <Button
            my="5rem"
            bg={COLORS.LIME}
            color={COLORS.BLUE}
            borderColor={COLORS.BLUE}
            boxShadow="true"
            type="submit"
          >
            {/* {isSubmitting ? "Submitting..." : "Join the Waitlist"} */}
            Donate
          </Button>
        </form>
      </Modal>
      <Footer />
    </DetailsPageStyle>
  );
};

export default connect((state) => ({
  listings: state.listings.data,
}))(CovidResponse);
