import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setListings: {
      reducer(state, action) {
        state.data = action.payload;
      }
    }
  }
});

export const { setListings } = listingsSlice.actions;

export default listingsSlice.reducer;
