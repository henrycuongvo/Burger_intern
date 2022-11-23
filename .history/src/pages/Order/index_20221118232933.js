import React from "react";
import Button from "../../components/Button";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../redux/burgerSlide";
import styles from "./Order.module.scss";
import { setCart } from "../../store";

const Order = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return <></>;
};

export default Order;
