import React from "react";
import classNames from "classnames/bind";
import styles from "Checkout.module.scss";

const cx = classNames.bind(styles);

const Checkout = () => {
  return <div className={cx("wrapper")}> Checkout Page</div>;
};

export default Checkout;
