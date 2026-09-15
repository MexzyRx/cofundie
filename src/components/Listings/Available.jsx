import React from "react";
import { connect } from "react-redux";

import Listings from "./Listings";

const ComingSoon = ({ data: listings }) => {
  return <Listings listings={listings} />;
};

export default connect(state => ({
  data: state.listings.data
}))(ComingSoon);
