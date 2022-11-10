import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className={cx("content")}>
          <div className={cx("sanwich")}></div>
          <div className={cx("salad")}></div>
          <div className={cx("bacon")}></div>
          <div className={cx("cheese")}></div>
          <div className={cx("meat")}></div>
          <div className={cx("sanwich")}></div>
        </div>
      </div>
      <div className={cx("")}></div>
    </div>
  );
}

export default Order;
