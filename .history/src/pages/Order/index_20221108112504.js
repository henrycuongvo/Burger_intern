import styles from "./Order.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className="content">
          <div className="sanwich"></div>
          <div className="salad"> Salad</div>
          <div className="bacon"> Bacon</div>
          <div className="cheese">Cheese</div>
          <div className="sanwich">Meat</div>
          <div className="meat"></div>
        </div>
      </div>
      <div className={cx("table")}>{/* Table */}</div>
    </div>
  );
}

export default Order;
