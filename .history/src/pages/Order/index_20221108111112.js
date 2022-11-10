import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className={cx("table")}></div>
      </div>
    </div>
  );
}

export default Order;
