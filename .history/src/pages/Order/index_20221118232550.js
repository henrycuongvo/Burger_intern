import React from "react";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../redux/burgerSlide";
import styles from "./Order.module.scss";
import { setCart } from "../../store";
const cx = classNames.bind(styles);
const SALAD = "Salad";
const BACON = "Bacon";
const CHEESE = "Cheese";
const MEAT = "Meat";

const Order = () => {
  function Buger() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  }
  const [salad, setSalad] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [total, setTotal] = useState(0);
  // const cartState = useSelector((state) => state.cart);

  // const isAuthenticated = useSelector((state) => state.isAuthenticated);

  // useEffect(() => {
  //   if (cartState.salad) setSalad(cartState.salad);
  //   if (cartState.cheese) setCheese(cartState.cheese);
  //   if (cartState.bacon) setBacon(cartState.bacon);
  //   if (cartState.meat) setMeat(cartState.meat);
  // }, []);
  useEffect(() => {
    setTotal(salad + cheese + bacon + meat);
  }, [salad, cheese, bacon, meat]);
  // const handleSubmit = () => {
  //   const cart = {
  //     salad,
  //     bacon,
  //     cheese,
  //     meat,
  //   };
  //   dispatch(setCart(cart));
  //   if (!isAuthenticated) navigate("/login");
  //   else {
  //     navigate("/checkout");
  //   }
  // };
  // function changeValue(name, value) {
  //   switch (name) {
  //     case SALAD:
  //       if (salad + value >= 0) {
  //         setSalad(salad + value);
  //       } else setSalad(0);
  //       break;
  //     case BACON:
  //       setBacon(bacon + value);
  //       if (bacon + value >= 0) {
  //         setBacon(bacon + value);
  //       } else setBacon(0);
  //       break;
  //     case CHEESE:
  //       setCheese(cheese + value);
  //       if (cheese + value >= 0) {
  //         setCheese(cheese + value);
  //       } else setCheese(0);
  //       break;
  //     case MEAT:
  //       setMeat(meat + value);
  //       if (meat + value >= 0) {
  //         setMeat(meat + value);
  //       } else setMeat(0);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <Helmet>
        <title> Order</title>
      </Helmet>

      <div className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("sandwich")}></div>
          <div>
            {Array(salad).fill(
              <div className={cx("Salad")} value="Salad">
                {" "}
                Salad{" "}
              </div>
            )}
          </div>
          <div>
            {Array(bacon).fill(
              <div className={cx("bacon")} value="Bacon">
                {" "}
                Bacon{" "}
              </div>
            )}
          </div>
          <div>
            {Array(cheese).fill(
              <div className={cx("cheese")} value="Cheese">
                {" "}
                Cheese{" "}
              </div>
            )}
          </div>
          <div>
            {Array(meat).fill(
              <div className={cx("meat")} value="Meat">
                {" "}
                Meat{" "}
              </div>
            )}
          </div>
          <div className={cx("sandwich")}></div>
        </div>
      </div>
      <table className={cx("price")}>
        <tr>
          <td>Price</td>
          <td>${total}</td>
        </tr>
      </table>

      <table className={cx("burger_detail")}>
        <tr>
          <td> Salad</td>
          <td>
            {" "}
            <Button less onClick={() => (SALAD, -1)}>
              Less
            </Button>
          </td>
          <td>
            {" "}
            <Button more onClick={() => (SALAD, +1)}>
              More
            </Button>
          </td>
        </tr>
        <tr>
          <td> Bacon</td>
          <td>
            {" "}
            <Button less onClick={() => dispatch(increment())}>
              Less
            </Button>
          </td>
          <td>
            {" "}
            <Button more onClick={() => (BACON, +1)}>
              More
            </Button>
          </td>
        </tr>
        <tr>
          <td> Cheese</td>
          <td>
            {" "}
            <Button less onClick={() => (CHEESE, -1)}>
              Less
            </Button>
          </td>
          <td>
            {" "}
            <Button more onClick={() => (CHEESE, +1)}>
              More
            </Button>
          </td>
        </tr>
        <tr>
          <td> Meat</td>
          <td>
            {" "}
            <Button less onClick={() => (MEAT, -1)}>
              Less
            </Button>
          </td>
          <td>
            {" "}
            <Button more onClick={() => (MEAT, +1)}>
              More
            </Button>
          </td>
        </tr>
      </table>
      <div className="checkout">
        <Button primary> Check out</Button>
      </div>
    </>
  );
};

export default Order;
