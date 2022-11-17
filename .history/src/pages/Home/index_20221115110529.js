import React from "react";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";

import styles from "./Home.module.scss";

function Home() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Helmet>
        <title>Burger Builder</title>
      </Helmet>{" "}
      <div className={cx("content")}>
        <h1>HomePage</h1>
      </div>
    </div>
  );
}

export default Home;
