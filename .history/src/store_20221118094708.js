import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
