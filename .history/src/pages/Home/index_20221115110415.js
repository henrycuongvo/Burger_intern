import React from "react";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";

import Header from "../../layouts/Header";
import styles from "./Home.module.scss";

function Home() {
  const cx = classNames.bind(styles);
  return (
    <div>
      <Helmet>
        <title>Burger Builder</title>
      </Helmet>{" "}
      <h1>HomePage</h1>
    </div>
  );
}

export default Home;
