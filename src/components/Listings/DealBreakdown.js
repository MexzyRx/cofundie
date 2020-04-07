import React from "react";
import styled from "styled-components";
import { color, layout } from "styled-system";

import { COLORS } from "app-constants";

const ListingInfo = styled.div`
  /* ${layout} */
  text-align: left;
  font-weight: 700;
  padding: 4rem;
  background-color: white;
  border-radius: 4px;
  width: 100%;

  display: grid;
  align-items: space-between;
  grid-template-columns: 49% 2% 49%;
  grid-template-rows: auto;
  grid-template-areas: "detail divider figure";
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    grid-template-columns: 59% 2% 39%;
  }
`;

const ListingLabel = styled.span`
  ${color}

  margin-bottom: 2.5rem;
  font-size: 2rem;
  width: 70%;
  text-align: center;
  border-radius: 4px;
  display: block;
  padding: 2rem 2rem;
  color: ${props => props.color};
  background-color: ${props => props.bg};

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    width: fit-content;
  }
`;

const Divider = styled.div`
  grid-area: divider;
  border-left: 2px solid ${COLORS.BLUE};
  height: 100%;
`;

const ListingFigure = styled.div`
  ${color}

  margin-bottom: 2.5rem;
  margin-left: 2rem;
  font-size: 2.2rem;
  padding: 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

const DealBreakdown = ({ data }) => {
  return (
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
        <ListingLabel color={COLORS.BLUE} bg={COLORS.LIGHT_LIME}>
          Primary Material
        </ListingLabel>
        <ListingLabel color="white" bg={COLORS.BLUE}>
          Cost Per Share
        </ListingLabel>
      </div>
      <Divider />
      <div>
        <ListingFigure>{data.details.holdPeriod}</ListingFigure>
        <ListingFigure>{data.details.projectedReturn}</ListingFigure>

        <ListingFigure>{data.details.structure}</ListingFigure>

        <ListingFigure>{data.details.primaryMaterial}</ListingFigure>
        <ListingFigure>{data.details.sharePrice}</ListingFigure>
      </div>
    </ListingInfo>
  );
};

export default DealBreakdown;
