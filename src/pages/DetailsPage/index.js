import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { space } from "styled-system";
import { isEmpty } from "lodash";
import Modal from "react-modal";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import {
  PageStyle,
  Section,
  Container,
  // HorizontalScroll
} from "components/layout";
import WaitListForm from "./WaitListForm";
import DealBreakdown from "components/Listings/DealBreakdown";
import { Button } from "components/styled";
import { COLORS } from "app-constants";

import cancel from "assets/images/cancel.svg";
import bullet from "assets/images/bullet.svg";

const DetailsPageStyle = styled(PageStyle)`
  background-color: rgba(20, 55, 155, 0.02);
  /* background-image: linear-gradient(
    to right,
    ${COLORS.BACKGROUND_LIGHT_BLUE} 50%,
    ${COLORS.LIGHT_LIME}
  ); */
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

const ImageGallery = styled.div`
  /* Mobile styles first */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto; /* clips overflow-y, so applied box-shadows don't show*/

  * {
    flex: 0 0 auto;
    margin: 0;
    margin-left: 1.5rem;
  }

  /* hence the use of min-width */
  @media (min-width: 768px) {
    width: 60vw;
    margin: 0 auto;
    transform: translateY(-3rem);

    * {
      margin: 0;
    }
  }
`;

const SelectedImage = styled.img`
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

  @media (max-width: 768px) {
    display: none;
  }
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

const DetailsPage = ({ listings, match }) => {
  const [data, setData] = React.useState("loading");
  const [status, setStatus] = React.useState("loading");
  const [selectedImage, setSelectedImage] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  let { id } = match.params;

  React.useEffect(() => {
    let listing = listings.find((el) => el.id === Number(id));
    setData(listing);
    !isEmpty(listing) ? setStatus("loaded") : setStatus("loading");
    !isEmpty(listing)
      ? setSelectedImage(listing.images[0])
      : setSelectedImage("");
  }, [id, listings]);

  return (
    <DetailsPageStyle>
      <Navbar />
      <main>
        {/* // Todo: Add proper loading spinners */}
        {status === "loading" && "Loading..."}
        {status === "loaded" && (
          <>
            <Section mt="4rem">
              <ListingTitle>
                {data.name}:{" "}
                <span style={{ color: "black" }}>{data.phase}</span>
              </ListingTitle>
              <small>Accra - Ghana</small>

              <Button
                my="5rem"
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
                onClick={() => setVisible(true)}
              >
                Join the Waitlist
              </Button>
            </Section>

            <SelectedImage src={selectedImage} />

            <ImageGallery mt="5rem">
              {data.images.map((image, id) => (
                <Image
                  key={id}
                  src={image}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </ImageGallery>
            <DetailsContainer width={{ sm: "75vw", lg: "60vw" }}>
              <DetailsSection my="5rem" textAlign="left">
                <h3 style={{ marginBottom: "2rem" }}>Summary</h3>
                <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
              </DetailsSection>
            </DetailsContainer>
            <DetailsContainer width={{ sm: "75vw", lg: "60vw" }}>
              <DetailsSection my="5rem" textAlign="left">
                <h3 style={{ marginBottom: "2rem" }}>Location Analysis</h3>
                <p dangerouslySetInnerHTML={{ __html: data.location }}></p>
              </DetailsSection>
            </DetailsContainer>
            <DetailsContainer width={{ sm: "85vw", lg: "60vw" }}>
              <DetailsSection my="5rem">
                <h3 style={{ marginBottom: "2rem" }}>Deal Breakdown</h3>
                <DealBreakdown data={data} />
              </DetailsSection>
            </DetailsContainer>
            <Section>
              <DetailsContainer width={{ sm: "70vw", lg: "50vw" }}>
                <p>
                  <strong style={{ color: COLORS.BLUE }}>NB:</strong> The house
                  models are just estimations of what the homes will look like
                  after they are built. The final product might look different
                  and Cofundie will keep updating the images with recent and up
                  to date models which are closer to the final results
                </p>
              </DetailsContainer>
              <Button
                my="5rem"
                bg={COLORS.LIME}
                color={COLORS.BLUE}
                borderColor={COLORS.BLUE}
                boxShadow="true"
                onClick={() => setVisible(true)}
              >
                Join the Waitlist
              </Button>
            </Section>
            <Section bg={COLORS.BLUE} mt="15rem" py="5rem" color="white">
              <Container width="70%">
                <h3 style={{ color: "white" }}>
                  Join thousands of Property Owners, Agents and Individuals that
                  love using Cofundie.
                </h3>
                <p style={{ paddingTop: "3rem" }}>
                  Signing up is easy, and our team will get you started in no
                  time.
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
          </>
        )}
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
        <WaitListForm />
      </Modal>
      <Footer />
    </DetailsPageStyle>
  );
};

export default connect((state) => ({
  listings: state.listings.data,
}))(DetailsPage);
