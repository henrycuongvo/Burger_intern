import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
const cx = classNames.bind(styles);
function Order() {
  const ingredients = ["salad", "bacon", "cheese", "meat"];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("burger")}>
        <div className={cx("content")}>
          <div className={cx("sandwich")}></div>
          <div className={cx("salad")}>Salad</div>
          <div className={cx("bacon")}>Bacon</div>
          <div className={cx("cheese")}>Cheese</div>
          <div className={cx("meat")}>Meat</div>
          <div className={cx("sandwich")}></div>
        </div>
      </div>
      <div className={cx("table")}>
        <div className={cx("price")}></div>
        <div className={cx("table-select")}></div>
      </div>
      <Button primary href="https://www.facebook.com/">
        {" "}
        Click here
      </Button>
      <Button less> Less</Button>
      <Button more onClick>
        More
      </Button>
    </div>
  );
}

export default Order;
