import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className={cx("content")}></div>
      </div>
      <div className={cx("")}></div>
    </div>
  );
}

export default Order;
