import React from "react";
import styled from "styled-components";

import Listing from "./Listing";

const ListingsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5%;
  margin-bottom: 10rem;

  @media (min-width: 768px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-gap: 10%;

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    > * {
      display: inline-block;
    }
  }
`;

const Listings = ({ listings }) => {
  return (
    <ListingsStyle>
      {listings &&
        listings.map(listing => <Listing listing={listing} key={listing.id} />)}
    </ListingsStyle>
  );
};

export default Listings;
