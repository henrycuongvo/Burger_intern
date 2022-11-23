import { configureStore } from "@reduxjs/toolkit";
import bugerReducer from "./redux/burgerSlide";
export const store = configureStore({
  reducer: {
    burger: bugerReducer,
  },
});
