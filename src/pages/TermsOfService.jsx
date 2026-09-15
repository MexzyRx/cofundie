import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { PageStyle, Section, Container } from "components/layout";
import { Button } from "components/styled";
import { COLORS } from "app-constants";
import {
  TermsHeader,
  TermsTab,
  TermsGrid,
  TermsTabs,
  TermsMain,
} from "./TermsAndConditions";

const DetailsPageStyle = styled(PageStyle)`
  background-color: rgba(20, 55, 155, 0.02);
`;

const TermsOfService = ({ listings, match }) => {
  return (
    <DetailsPageStyle>
      <Navbar />

      <TermsHeader>
        <h1>Terms of Service</h1>
      </TermsHeader>

      <TermsGrid>
        <TermsTabs>
          <TermsTab>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </TermsTab>

          <TermsTab>
            <Link to="/privacy-policy">Privacy</Link>
          </TermsTab>
        </TermsTabs>
        <TermsMain>
          <h3>Overview of Disclosures / Disclaimers</h3>
          <p>
            You are urged to review carefully all offering materials that are
            provided to you by the project sponsor before making any investment
            decision. You are also advised to consult with your own tax, legal,
            financial and other advisers prior to making an investment.
          </p>
          <p>
            No offer to sell or solicitation of an offer to buy may be made
            prior to the delivery by the project sponsor of definitive
            documentation relating to a proposed investment (collectively, the
            "Offering Materials"), including, in most cases, an offering
            circular or private placement memorandum describing the investment
            opportunity and the rights, preferences and obligations attached to
            the opportunity
          </p>
          <p>
            The overview is also summary in nature and does not purport to be
            complete.
          </p>
          <p>
            All offers and sales that are made through the Cofundie platform
            have not been registered with the SEC of the Republic of Ghana.
            Cofundie, however, does not handle any funds directly as all funds
            are domiciled with our SEC-registered appointed custodians.
          </p>
          <p>
            Neither the Securities and Exchange Commission nor any state
            regulatory authority has reviewed, approved or disapproved of any
            offers or sales, the related offering materials, or the terms of any
            offer, or determined whether the offering materials are truthful or
            complete. It is illegal for any person to tell you otherwise.
          </p>
          <h4>Confidentiality</h4>
          <p>
            The project sponsor is a private company that operates in a highly
            competitive industry. Accordingly, the project sponsor takes great
            precautions to protect its proprietary information and confidential
            documents concerning its business operations, financial information
            and prospective operations and in this regard maintains an unbending
            corporate policy to protect its confidential information from being
            disseminated.
          </p>
          <p>
            Therefore, any and all information provided by the project sponsor
            is strictly confidential, solely for the purpose of evaluating a
            potential purchase of units in a specific project and for no other
            purposes.
          </p>
          <p>
            With the sole exceptions of your officers, directors, financial
            advisors, accountants or legal counsel as absolutely necessary to
            evaluate the possible transaction contemplated herein, the
            confidential information shall not be disclosed to any third party
            without the project sponsor’s written consent.
          </p>
          <p>
            By accepting receipt of this information, you acknowledge that the
            information provided to you shall be held in the strictest
            confidence, shall not be copied or disseminated in any manner except
            to the individuals mentioned above and shall be only used for the
            purpose for which it is intended.
          </p>
          <h4>Terms of Service </h4>
          <p>
            I certify that all the information provided is true to the best of
            my knowledge and ability and I am not knowingly providing false
            information for the purposes of creating an account with Cofundie.
          </p>
          <p>
            I understand that Cofundie will be relying on the information
            provided by me to verify my identity and source of funds to be
            invested &amp; In making opportunities available to me and that the
            consequences of false information provided are mine and mine alone
            including shutting down my account.
          </p>
          <p>
            I agree that I will be responsible for any losses that are incurred
            as a result of a false certification or my continued use of the
            website after obtaining knowledge that a prior certification is no
            longer true. I agree to immediately inform the project sponsor of
            any change to my status or any information provided.
          </p>
        </TermsMain>
      </TermsGrid>

      <Section bg={COLORS.BLUE} mt="15rem" py="5rem" color="white">
        <Container width="70%">
          <h3 style={{ color: "white" }}>
            Join thousands of Property Owners, Agents and Individuals that love
            using Cofundie.
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

      <Footer />
    </DetailsPageStyle>
  );
};

export default connect((state) => ({
  listings: state.listings.data,
}))(TermsOfService);
