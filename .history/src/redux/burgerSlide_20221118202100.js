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

export const { increment, decrement, incrementByAmount } = burgerSlide.actions;

export default burgerSlide.reducer;
