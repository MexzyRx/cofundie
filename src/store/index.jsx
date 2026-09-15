import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings";

const store = configureStore({
  reducer: {
    listings: listingsReducer
  }
});

export default store;
