import classNames from "classnames/bind";
import styles from " Order.module.scss";
const cx = classNames.bind(styles);
function Order() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("burger")}></div>
        <div className={cx("table")}></div>
      </div>
    </>
  );
}

export default Order;
