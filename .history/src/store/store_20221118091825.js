import { configureStore } from "@reduxjs/toolkit";
export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};
