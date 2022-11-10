import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
const cx = classNames.bind(styles);
const ingredients = ["salad", "bacon", "cheese", "meat"];
console.log(ingredients);
function Order() {
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
        <div className={cx("table-select")}>
          {ingredients.map((select, index) => {
            <div className={cx("wrapper-selection")}>
              <span key={index}> {select.index}</span>
              <Button less>Less</Button>
              <Button more>More</Button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
