import classNames from "classnames/bind";
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
