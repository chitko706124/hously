import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heart: [],
};

export const heart = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addHeart: (state, { payload }) => {
      state.heart = [...state.heart, payload];
    },
    removeHeart: (state, { payload }) => {
      state.heart = state.heart.filter((item) => item !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHeart, removeHeart } = heart.actions;

export default heart.reducer;
