import classNames from "classnames/bind";
import styles from "/DefaultLayout.module.scss";

import Header from "../Header";

function DefaultLayout(children) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}> {children}</div>
    </div>
  );
}

export default DefaultLayout;
