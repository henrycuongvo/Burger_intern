import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
};

export const burgerSlide = createSlice({
  name: "burger",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = burgerSlide.actions;

export default burgerSlide.reducer;
