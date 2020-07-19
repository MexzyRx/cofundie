import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { PageStyle, Section, Container } from "components/layout";
import { Button } from "components/styled";
import { COLORS } from "app-constants";

const DetailsPageStyle = styled(PageStyle)`
  background-color: rgba(20, 55, 155, 0.02);
`;

export const TermsGrid = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-areas: "tabs main";
  padding: 0 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "tabs"
      "main";
    padding: 0;
  }
`;

export const TermsTabs = styled.aside`
  grid-area: tabs;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;

    span {
      width: 50%;
      text-align: center;

      &:first-child {
        border-right: 1px solid rgb(219 219 219);
      }
    }
  }
`;

export const TermsTab = styled.span`
  font-size: 2.2rem;
  margin-bottom: 3rem;

  a {
    font-family: "MuseoSans700";
    color: ${COLORS.BLUE};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    background: rgb(245 245 245);
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TermsMain = styled.main`
  grid-area: main;
  width: 90%;

  h3 {
    margin-bottom: 4rem;
  }

  h4 {
    color: ${COLORS.BLUE};
  }

  ul,
  ol {
    margin-left: 2rem;
  }

  p,
  h4,
  ul,
  li {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 4rem;

    h3 {
      text-align: center;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem auto;
`;

const Step = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  /* background: rgb(207 207 207); */
  background: ${(props) =>
    props.current ? `rgb(16 36 136)` : `rgb(207 207 207)`};

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const TermsHeader = styled.header`
  background: rgb(227 234 248);
  text-align: center;
  padding: 6rem 0;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const TermsAndConditions = () => {
  const [currentTab, setCurrentTab] = React.useState(1);

  const handleNext = () => {
    if (currentTab < 3) {
      setCurrentTab(currentTab + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1);
      window.scrollTo(0, 0);
    }
  };
  return (
    <DetailsPageStyle>
      <Navbar />

      <TermsHeader>
        <h1>Terms &amp; Conditions</h1>
      </TermsHeader>
      <TermsGrid>
        <TermsTabs>
          <TermsTab>
            <Link to="/terms-of-service">Terms of Service</Link>
          </TermsTab>
          <TermsTab>
            <Link to="/privacy-policy">Privacy</Link>
          </TermsTab>
        </TermsTabs>
        <TermsMain>
          {termsSections[currentTab]}

          <Steps>
            <Step current={currentTab === 1}></Step>
            <Step current={currentTab === 2}></Step>
            <Step current={currentTab === 3}></Step>
          </Steps>

          <Buttons>
            {currentTab > 1 && (
              <Button
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
                onClick={() => handlePrev()}
              >
                Previous
              </Button>
            )}
            {currentTab < 3 && (
              <Button
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
                onClick={() => handleNext()}
              >
                Next
              </Button>
            )}
          </Buttons>
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

const SectionOne = () => (
  <>
    <h3>Privacy Policy for Cofundie Investment Technologies</h3>
    <p>
      Please read these Terms and Conditions (“Terms”, “Terms and Conditions”)
      carefully before using the www.cofundie.com website (the “Service”)
      operated by Cofundie Investment Technologies Limited(“us”, “we”, or “our”)
      (hereafter referred to as Cofundie)
    </p>
    <p>
      Your access to and use of the Service is conditioned on your acceptance of
      and compliance with these Terms. These Terms apply to all visitors, users
      and others who access or use the Service. You warrant that you are at
      least 18-years-old and you are legally capable of entering into binding
      contracts. If you are under 18- years-old, you warrant that you have
      obtained consent from your parent or guardian and they agree to be bound
      by these Terms on your behalf. By accessing or using the Service you agree
      to be bound by these Terms. If you disagree with any part of the terms
      then you may not access the Service.
    </p>
    <p>
      Cofundie is a platform to invest in real estate by connecting you with
      credible property developers.
    </p>
    <h4>Overview</h4>
    <p>
      Cofundie is a platform for crowdsourcing funds for the development of
      buildings. Our platform functions as a means to connect property
      developers to individuals who are seeking to participate in property
      syndication.
    </p>
    <p>
      Cofundie reserves the right to modify or terminate any service for any
      reason at any time, with or without notice.
    </p>
    <p>
      Cofundie reserve the right to alter this Cofundie User Agreement at any
      time. If alterations constitute a material change to the Terms of Use, to
      be determined at the sole discretion of Cofundie, Cofundie will notify you
      via email according to the preference expressed on your account.
    </p>
    <p>
      Cofundie reserves the right to refuse service to anyone for any reason at
      any time.
    </p>
    <p>
      Cofundie may remove content (by way of example but without limitation:
      items, item descriptions, chat text, booth text, and information submitted
      in the forums) that Cofundie determines is unlawful, offensive,
      threatening, libellous, defamatory, obscene or otherwise objectionable or
      violates any party's intellectual property, Cofundie Terms of Use,
      Cofundie Privacy Policy, or any other policy documents and community
      guidelines as posted on Cofundie. Cofundie has no obligation to do so,
      however.
    </p>
    <p>
      Cofundie will terminate your account without notice if your account is
      used for hosting graphic elements of web page designs, icons, smilies,
      buddy icons, forum avatars, badges and other non-photographic elements on
      external websites.
    </p>
    <p>
      You can remove your profile at any time by deleting your account by
      sending an email to info@cofundie.com. This will also remove any private
      images you have stored in the system. By uploading images and item
      description content to Cofundie, you agree to allow other Cofundie users
      to view them and you agree to allow Cofundie to display the images and
      content on Cofundie, or in emails from Cofundie, and store the images,
      item description, profile and other content.
    </p>
    <p>
      All Cofundie graphics, logos, designs, page headers, button icons,
      scripts, and service names are registered or unregistered trademarks or
      service marks. Cofundie's trademarks or name may not be used, including as
      part of trademarks and/or as part of domain names, in connection with any
      product or service in any manner that is likely to cause confusion.
    </p>

    <h4>General Terms</h4>

    <ul>
      <li>
        You acknowledge that you must be 18 years or older to use this site or
        establish an account.
      </li>
      <li>
        You must complete the requested profile information honestly and with
        the correct information before the payout process on the Platform can be
        initiated.
      </li>
      <li>
        You acknowledge that you bear sole responsibility for keeping your
        password secure.
      </li>
      <li>
        You agree not to use our Service for any illegal or unauthorized
        purpose.
      </li>
      <li>
        You agree to comply with all local laws regarding online conduct and
        acceptable content.
      </li>
      <li>
        You are solely responsible for your conduct and any data, text,
        information, screen names, graphics, photos, profiles, audio and video
        clips, links or any other content that you submit, post or display on
        the Website.
      </li>
      <li>
        You agree not to modify, adapt or hack our Service or modify another
        website so as to falsely imply that it is associated with Cofundie.
      </li>
      <li>
        You agree not to solicit, harass or impersonate Cofundie’s members.
      </li>
      <li>
        You agree not to transmit any worms or viruses or any code of a
        destructive nature.
      </li>
      <li>
        Furthermore, while Cofundie discourages certain conduct and content on
        the Website, you acknowledge and agree the Website is a venue and as
        such is not responsible for the content posted on it. You agree to use
        the Website at your own risk.
      </li>
      <li>
        Cofundie reserves the right to conduct due diligence on all its members
        and users as and when Cofundie deems fit.
      </li>
    </ul>

    <h4>Dispute Resolution</h4>

    <p>
      Cofundie’s goal is to make you happy and provide you with premium
      services. In the event a dispute arises between you and Cofundie, please
      email Cofundie at info@cofundie.com and we will work quickly towards a
      solution. We encourage you to report all disputes to us before taking them
      public.
    </p>

    <h4>Accounts</h4>
    <p>
      When you create an account with us, you must provide us with information
      that is accurate, complete, and current at all times. Failure to do so
      constitutes a breach of the Terms, which may result in immediate
      termination of your account on our Service.
    </p>
    <p>
      You are responsible for safeguarding the password that you use to access
      the Service and for any activities or actions under your password, whether
      your password is with our Service or a third-party service. You agree not
      to disclose your password to any third party. You agree to be fully
      responsible for activities that relate to your account or your password.
      You must notify us immediately upon becoming aware of any breach of
      security or unauthorized use of your account.
    </p>
    <p>
      You may not use as a username the name of another person or entity or that
      is not lawfully available for use, a name or trademark that is subject to
      any rights of another person or entity other than you without appropriate
      authorization, or a name that is otherwise offensive, vulgar or obscene.
    </p>

    <h4>User Obligations and Guidelines</h4>
    <p>
      Cofundie may, at Cofundie's sole discretion, change some or all of our
      Service at any time. In the event, Cofundie introduces a new service, the
      fees for that service are effective at the launch of the service. Unless
      otherwise stated, all fees are quoted in Ghana Cedis (GHS) and the United
      States Dollars (USD).
    </p>
    <p>
      Unless granted an exception by Cofundie, Cofundie requires all Seller
      accounts to provide a credit or debit card detail for the purposes of
      verification of their identity, and for payment of fees and services
      rendered. The Seller shall expect payment for all shipped produce no later
      than 14 working days after shipment.
    </p>
    <p>
      You are responsible for paying all fees associated with receiving your
      return from Cofundie as well as taxes associated with your investment.
    </p>
    <p>Fees for all our services will be described once they are determined.</p>
    <h4>Binding Sale</h4>
    <p>
      All sales are binding. If you, as a User buy a share of a property, the
      sale is binding, buyers remorse will not be accepted as an excused for a
      refund.
    </p>
    <h4>Refunds</h4>
    <p>
      Payments referred to herein shall not be refundable under any
      circumstances, including but not limited to the termination of this
      Agreement and closure of your account, for whatever reason.
    </p>
  </>
);

const SectionTwo = () => (
  <>
    <h3>Privacy Policy for Cofundie Investment Technologies</h3>
    <h4>Termination</h4>
    <p>
      Without limiting any other remedies, Cofundie, without notice, may suspend
      or terminate your account if Cofundie suspects, in its sole discretion,
      that you (by information, investigation, conviction, settlement, insurance
      or escrow investigation, or otherwise) have violated any of Cofundie's
      policies set out in this Agreement, the Privacy Policy, or any other
      policy documents or community guidelines, or you have engaged in an
      improper or fraudulent activity in connection with Cofundie. If Cofundie
      terminates a listing or your account, if you close your account, or if the
      payment of your Seller fees cannot be completed for any reason, you remain
      obligated to pay Cofundie for all unpaid fees plus any penalties, if
      applicable. If the User's account is not paid in full and becomes past
      due, Cofundie reserves the right to attempt to collect past due fees by
      charging the Buyer’s card on file. The User risks additional penalties
      such as the suspension of privileges and/or termination of the account and
      other collection mechanisms (including retaining collection agencies and
      legal counsel). If you have a question or wish to dispute a charge,
      contact Cofundie support.
    </p>
    <h4>Intellectual Property</h4>
    <p>
      The Service and its original content (excluding Content provided by
      users), features, pictures, media, data and functionality, both electronic
      or in other forms and formats, or are and will remain the exclusive
      property of Cofundie Limited and its licensors. Cofundie reserves the
      right to use property data (all types of data) collected from the
      construction site as it pleases. The Service is protected by copyright,
      trademark, and other laws of both Ghana and foreign countries. Our
      trademarks and trade dress may not be used in connection with any product
      or service without the prior written consent of Cofundie Investment
      Limited. Nothing in these Terms constitutes a transfer of any Intellectual
      Property rights from us to you.
    </p>
    <p>
      You are permitted to use the Service only as authorized by us. As a user,
      you are granted a limited, non-exclusive, revocable, non-transferable
      right to use the Service to create, display, use, play, and download
      Content subject to these Terms.
    </p>
    <p>
      Our Intellectual Property must not be used in connection with a product or
      service that is not affiliated with us or in any way brings us in
      disrepute.
    </p>
    <p>
      You must not modify the physical or digital copies of any Content you
      print off or download in any way, and you must not use any illustrations,
      photographs, video or audio, or any graphics separately from any
      accompanying text.
    </p>
    <p>
      Any opinions, advice, statements, services, offers, or other information
      or content expressed or made available by any other users are those of the
      respective authors or distributors and not of us.
    </p>
    <h4>Links to Other Web Sites</h4>
    <p>
      Our Service may contain links to third-party web sites or services that
      are not owned or controlled by Cofundie Limited.
    </p>
    <p>
      Cofundie Investment Technologies Limited has no control over and assumes
      no responsibility for, the content, privacy policies, or practices of any
      third-party web sites or services. You further acknowledge and agree that
      Cofundie Investment Technologies Limited shall not be responsible or
      liable, directly or indirectly, for any damage or loss caused or alleged
      to be caused by or in connection with use of or reliance on any such
      content, goods or services available on or through any such web sites or
      services.
    </p>
    <p>
      We only provide links to external websites as a convenience, and the
      inclusion of such a link to external websites do not imply our endorsement
      of those websites. You acknowledge and agree that when you access other
      websites on the Internet, you do so at your own risk.
    </p>
    <p>
      We strongly advise you to read the terms and conditions and privacy
      policies of any third-party web sites or services that you visit.
    </p>
    <h4>Breach</h4>
    <p>
      Without limiting other remedies available, Cofundie may, without prior
      notice, limit your activity, immediately remove your item listings, warn
      Cofundie's community of your actions, issue a warning, temporarily
      suspend, indefinitely suspend or terminate your membership (without
      refunding any fees) and refuse to provide our services to you if:
    </p>

    <ol type="a">
      <li>
        You breach this Agreement or other policy documents and community
        guidelines this Terms of Use incorporates by reference;
      </li>
      <li>
        Cofundie is unable to verify or authenticate any of your information; or
      </li>
      <li>
        Cofundie believes that your actions may cause financial loss or legal
        liability for you, Cofundie's users or Cofundie.
      </li>
    </ol>

    <h4>Termination</h4>
    <p>
      We may terminate or suspend your account immediately, without prior notice
      or liability, for any reason whatsoever, including without limitation if
      you breach the Terms. Upon termination, your right to use the Service will
      immediately cease. If you wish to terminate your account, you may simply
      discontinue using the Service. All provisions of the Terms which by their
      nature should survive termination shall survive termination, including,
      without limitation, ownership provisions, warranty disclaimers, indemnity
      and limitations of liability. We shall not be liable to you or any third
      party for any claims or damages arising out of any termination or
      suspension or any other actions taken by us in connection therewith.
    </p>
    <p>
      If applicable law requires us to provide notice of termination or
      cancellation, we may give prior or subsequent notice by posting it on the
      Service or by sending a communication to any address (email or otherwise)
      that we have for you in our records.
    </p>
    <h4>Indemnification</h4>
    <p>
      As a condition of your access to and use of the Service, you agree to
      indemnify us and our successors and assigns for all damages, costs,
      expenses and other liabilities, including but not limited to legal fees
      and expenses, relating to any claim arising out of or related to your
      access to and use of the Service or your breach of these Terms and any
      applicable law or the rights of another person or party.
    </p>
    <p>
      This indemnification section survives the expiration of your registration
      and applies to claims arising both before and after the registration ends.
    </p>
    <h4>Limitation of Liability</h4>
    <p>
      You agree that we shall not be liable for any damages suffered as a result
      of using the Service, copying, distributing, or downloading Content from
      the Service.
    </p>
    <p>
      In no event shall we be liable for any indirect, punitive, special,
      incidental or consequential damage (including loss of business, revenue,
      profits, use, privacy, data, goodwill or other economic advantages)
      however it arises, whether for breach of contract or in tort, even if it
      has been previously advised of the possibility of such damage.
    </p>
    <p>
      You have sole responsibility for adequate security protection and backup
      of data and/or equipment used in connection with your usage of the Service
      and will not make a claim against for lost data, re-run time, inaccurate
      instruction, work delays or lost profits resulting from the use of the
      Service. You must not assign or otherwise dispose of your account to any
      other person. Without limiting the foregoing, in no event will our
      aggregate liability to you exceed, in total, the amounts paid by you to
      us.
    </p>
    <h4>Disclaimer</h4>
    <p>
      Your use of the Service is at your sole risk. The Service is provided on
      an “AS IS” and “AS AVAILABLE” basis. The Service is provided without
      warranties of any kind, whether express or implied, including, but not
      limited to, implied warranties of merchantability, fitness for a
      particular purpose, non-infringement or course of performance.
    </p>
    <p>
      Cofundie Investment Technologies Limited, its subsidiaries, affiliates,
      and its licensors do not warrant that a) the Service will function
      uninterrupted, secure or available at any particular time or location; b)
      any errors or defects will be corrected; c) the Service is free of viruses
      or other harmful components, or d) the results of using the Service will
      meet your requirements.
    </p>
    <p>
      This disclaimer of liability applies to any damages or injury caused by
      any failure of performance, error, omission, interruption, deletion,
      defect, delay in operation or transmission, computer virus, communication
      line failure, theft, or destruction or unauthorized access or, alteration
      of or use of the record in connection with the use or operation of the
      Service, whether for breach of contract, tortious behaviour, negligence or
      any other cause of action.
    </p>
  </>
);

const SectionThree = () => (
  <>
    <h3>Privacy Policy for Cofundie Investment Technologies</h3>
    <p>
      We make no representations or warranties of any kind, express or implied,
      about the completeness, accuracy, reliability, suitability or availability
      with respect to the content contained on the Service for any purpose. Any
      reliance you place on such information is therefore strictly at your own
      risk. We disclaim any express or implied warranty representation or
      guarantee as to the effectiveness or profitability of the Service or that
      the operation of our Service will be uninterrupted or error- free. We are
      not liable for the consequences of any interruptions or error in the
      Service.
    </p>
    <h4>Reservation of Rights</h4>
    <p>
      We reserve the right to request that you remove all links or any
      particular link to our Website. You approve to immediately remove all
      links to our Website upon request. We also reserve the right to amend
      these terms and conditions and it’s linking policy at any time. By
      continuously linking to our Website, you agree to be bound to and follow
      these linking terms and conditions.
    </p>
    <h4>Removal of links from our website</h4>
    <p>
      If you find any link on our Website that is offensive for any reason, you
      are free to contact and inform us any moment. We will consider requests to
      remove links but we are not obligated to or so or to respond to you
      directly. We do not ensure that the information on this website is
      correct, we do not warrant its completeness or accuracy; nor do we promise
      to ensure that the website remains available or that the material on the
      website is kept up to date.
    </p>
    <h4>Cookies</h4>
    <p>
      We employ the use of cookies. By accessing Cofundie, you agreed to use
      cookies in agreement with the Cofundie Investment Technologies's Privacy
      Policy. Most interactive websites use cookies to let us retrieve the
      user’s details for each visit. Cookies are used by our website to enable
      the functionality of certain areas to make it easier for people visiting
      our website. Some of our affiliate/advertising partners may also use
      cookies.
    </p>
    <h4>License</h4>
    <p>
      Unless otherwise stated, Cofundie Investment Technologies and/or its
      licensors own the intellectual property rights for all material on
      Cofundie. All intellectual property rights are reserved. You may access
      this from Cofundie for your own personal use subjected to restrictions set
      in these terms and conditions.
    </p>
    <p>You must not:</p>
    <ul>
      <li>Republish material from Cofundie</li>
      <li>Sell, rent or sub-license material from Cofundie</li>
      <li>Reproduce, duplicate or copy material from Cofundie</li>
      <li>Redistribute content from Cofundie</li>
    </ul>
    <h4>This Agreement shall begin on the date hereof</h4>
    <p>
      Parts of this website offer an opportunity for users to post and exchange
      opinions and information in certain areas of the website. Cofundie
      Investment Technologies does not filter, edit, publish or review Comments
      prior to their presence on the website. Comments do not reflect the views
      and opinions of Cofundie Investment Technologies,its agents and/or
      affiliates. Comments reflect the views and opinions of the person who post
      their views and opinions. To the extent permitted by applicable laws,
      Cofundie Investment Technologies shall not be liable for the Comments or
      for any liability, damages or expenses caused and/or suffered as a result
      of any use of and/or posting of and/or appearance of the Comments on this
      website.
    </p>
    <p>
      Cofundie Investment Technologies reserves the right to monitor all
      Comments and to remove any Comments which can be considered inappropriate,
      offensive or causes breach of these Terms and Conditions.
    </p>
    <p>You warrant and represent that:</p>
    <ul>
      <li>
        You are entitled to post the Comments on our website and have all
        necessary licenses and consents to do so;
      </li>
      <li>
        The Comments do not invade any intellectual property right, including
        without limitation copyright, patent or trademark of any third party;
      </li>
      <li>
        The Comments do not contain any defamatory, libellous, offensive,
        indecent or otherwise unlawful material which is an invasion of privacy.
      </li>
      <li>
        Comments will not be used to solicit or promote business or custom or
        present commercial activities or unlawful activity.
      </li>
    </ul>
    <p>
      You hereby grant Cofundie Investment Technologies a non-exclusive license
      to use, reproduce, edit and authorize others to use, reproduce and edit
      any of your Comments in any and all forms, formats or media.
    </p>
    <h4>Hyperlinking to our Content</h4>
    <p>
      The following organizations may link to our Website without prior written
      approval:
    </p>
    <ul>
      <li>Government agencies;</li>
      <li>Search engines;</li>
      <li>News organizations;</li>
      <li>
        Online directory distributors may link to our Website in the same manner
        as they hyperlink to the Websites of other listed businesses; and
      </li>
      <li>
        Systemwide Accredited Businesses except soliciting non-profit
        organizations, charity shopping malls, and charity fundraising groups
        which may not hyperlink to our Web site.
      </li>
    </ul>
    <p>
      These organizations may link to our home page, to publications or to other
      Website information so long as the link: (a) is not in any way deceptive;
      (b) does not falsely imply sponsorship, endorsement or approval of the
      linking party and its products and/or services; and (c) fits within the
      context of the linking party’s site.
    </p>
    <p>
      We may consider and approve other link requests from the following types
      of organizations:
    </p>
    <ul>
      <li>Commonly-known consumer and/or business information sources;</li>
      <li>Dot.com community sites;</li>
      <li>Associations or other groups representing charities;</li>
      <li>Online directory distributors;</li>
      <li>Internet portals;</li>
      <li>Accounting, law and consulting firms; and</li>
      <li>Educational institutions and trade associations.</li>
    </ul>
    <p>
      We will approve link requests from these organizations if we decide that:
      (a) the link would not make us look unfavourably to ourselves or to our
      accredited businesses; (b) the organization does not have any negative
      records with us; (c) the benefit to us from the visibility of the
      hyperlink compensates the absence of Cofundie Investment Technologies, and
      (d) the link is in the context of general resource information.
    </p>
    <p>
      These organizations may link to our home page so long as the link: (a) is
      not in any way deceptive; (b) does not falsely imply sponsorship,
      endorsement or approval of the linking party and its products or services;
      and (c) fits within the context of the linking party’s site.
    </p>
    <p>
      If you are one of the organizations listed in paragraph 2 above and are
      interested in linking to our website, you must inform us by sending an
      e-mail to Cofundie Investment Technologies. Please include your name, your
      organization name, contact information as well as the URL of your site, a
      list of any URLs from which you intend to link to our Website, and a list
      of the URLs on our site to which you would like to link. Wait 2-3 weeks
      for a response.
    </p>
    <p>Approved organizations may hyperlink to our Website as follows:</p>
    <ul>
      <li>By use of our corporate name; or</li>
      <li>By use of the uniform resource locator being linked to; or</li>
      <li>
        By use of any other description of our Website being linked to that
        makes sense within the context and format of content on the linking
        party’s site.
      </li>
    </ul>
    <p>
      No use of Cofundie Investment Technologies's logo or other artwork will be
      allowed for linking absent a trademark license agreement.
    </p>
    <h4>iFrames</h4>
    <p>
      Without prior approval and written permission, you may not create frames
      around our Webpages that alter in any way the visual presentation or
      appearance of our Website.
    </p>
    <h4>Governing Law</h4>
    <p>
      These Terms shall be governed and construed in accordance with the laws of
      the Republic of Ghana, without regard to its conflict of law provisions
      unless otherwise stated.
    </p>
    <p>
      Our failure to enforce any right or provision of these Terms will not be
      considered a waiver of those rights. If any provision of these Terms is
      held to be invalid or unenforceable by a court, the remaining provisions
      of these Terms will remain in effect. These Terms constitute the entire
      agreement between us regarding our Service, and supersede and replace any
      prior agreements we might have between us regarding the Service.
    </p>
    <h4>Legal Compliance</h4>
    <p>
      You agree to comply with all applicable domestic and international laws,
      statutes, ordinances and regulations regarding your use of our service and
      your listing, purchase, solicitation of offers to purchase, and sale of
      items.
    </p>
    <h4>Changes</h4>
    <p>
      We reserve the right, at our sole discretion, to modify or replace these
      Terms at any time. It is your sole responsibility to periodically check
      these Terms for any changes. If you do not agree with any of the changes
      to these Terms, it is your sole responsibility to stop using the Service.
      Your continued use of the Service will be deemed as your acceptance
      thereof.
    </p>
    <h4>Contact Us</h4>
    <p>If you have any questions about these Terms, please contact us.</p>
  </>
);

const termsSections = {
  1: <SectionOne />,
  2: <SectionTwo />,
  3: <SectionThree />,
};

export default connect((state) => ({
  listings: state.listings.data,
}))(TermsAndConditions);
