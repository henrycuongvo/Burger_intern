import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className="content">
          <div className="sanwich"></div>
          <div className="salad"></div>
          <div className="bacon"></div>
          <div className="cheese"></div>
          <div className="sanwich"></div>
          <div className="meat"></div>
        </div>
      </div>
      <div className={cx("table")}>{/* Table */}</div>
    </div>
  );
}

export default Order;
