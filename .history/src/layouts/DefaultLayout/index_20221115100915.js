import classNames from "classnames/bind";
import styles from "DefaultLayout.module.scss";

import Header from "../Header";

function DefaultLayout(children) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
