import React from "react";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { color } from "styled-system";

import { COLORS } from "app-constants";
// import useIntersect from "hooks/useIntersect";

// const ListingStyle = styled.div.attrs(props => ({
//   style: {
//     // opacity: props.ratio || 0.75
//   }
// }))``;
const ListingStyle = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  border-radius: 6px;
  background-color: white;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ListingImage = styled.img`
  border-radius: 6px;
  object-fit: contain;
  width: 100%;
  height: 35rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 25rem;
  }
`;

const Divider = styled.div`
  grid-area: divider;
  border-left: 2px solid ${COLORS.BLUE};
  height: 100%;
`;

const ListingInfo = styled.div`
  text-align: left;
  font-weight: 700;
  padding: 2rem 2rem;

  display: grid;
  align-items: space-between;
  grid-template-columns: 59% 2% 39%;
  grid-template-rows: auto;
  grid-template-areas: "detail divider figure";
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 64% 2% 34%;
    padding: 2rem 1.5rem;
  }
`;

const ListingFigure = styled.div`
  ${color}

  margin-bottom: 1rem;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.5rem;
  }
`;

const ListingLabel = styled.span`
  ${color}

  margin-bottom: 1rem;
  width: fit-content;
  border-radius: 4px;
  display: block;
  padding: 0.5rem 2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

const ListingLocation = styled.p`
  text-align: left;
  font-size: 90%;
`;

const ListingName = styled.p`
  text-align: left;
  font-weight: 700;
  font-size: 110%;
`;

// const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
// const thresholds = [];
// for (let i = 75; i < 100; i++) {
//   thresholds.push(Number((i * 0.01).toFixed(2)));
// }
// console.log(thresholds);

const Listing = ({ listing: data }) => {
  // const [ref, entry] = useIntersect({
  //   threshold: buildThresholdArray()
  //   // threshold: thresholds
  // });
  const history = useHistory();
  return (
    <ListingStyle
      style={{ marginBottom: "6rem" }}
      onClick={() => history.push(`/details/${data.id}`)}
      // ref={ref}
      // ratio={entry.intersectionRatio}
    >
      <ListingName>
        <span style={{ color: `${COLORS.BLUE}` }}>{data.name}:</span>{" "}
        {data.phase}
      </ListingName>
      <ListingLocation style={{ marginBottom: "2rem" }}>
        Accra-Ghana
      </ListingLocation>

      <Card>
        <ListingImage src={data.images ? data.images[0] : ""} alt="" />

        <ListingInfo>
          <div>
            <ListingLabel color={COLORS.BLUE} bg={COLORS.LIME}>
              Hold Period
            </ListingLabel>
            <ListingLabel color={COLORS.LIME} bg={COLORS.BLUE}>
              Projected Returns
            </ListingLabel>
            <ListingLabel color={COLORS.BLUE} bg={COLORS.BACKGROUND_LIGHT_BLUE}>
              Structure
            </ListingLabel>
          </div>
          <Divider />
          <div>
            <ListingFigure>
              {data.details ? data.details.holdPeriod : null}
            </ListingFigure>
            <ListingFigure>
              {data.details ? data.details.projectedReturn : null}
            </ListingFigure>
            <ListingFigure>
              {data.details ? data.details.structure : null}
            </ListingFigure>
          </div>
        </ListingInfo>
      </Card>
    </ListingStyle>
  );
};

Listing.propTypes = {};

export default Listing;
