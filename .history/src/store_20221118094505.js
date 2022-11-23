import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};
