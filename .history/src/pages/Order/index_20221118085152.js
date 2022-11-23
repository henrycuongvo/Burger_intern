import React from "react";
import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const cx = classNames.bind(styles);
const SALAD = "Salad";
const BACON = "Bacon";
const CHEESE = "Cheese";
const MEAT = "Meat";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [salad, setSalad] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [total, setTotal] = useState(0);

  function changeValue(name, value) {
    switch (name) {
    }
  }
};

export default Order;
