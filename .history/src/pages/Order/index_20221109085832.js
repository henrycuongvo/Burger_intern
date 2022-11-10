import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
const cx = classNames.bind(styles);
function Order() {
  const [num, setNum] = useState(0);
  const handlePlusIngredient = () => {
    setNum(num + 1);
  };

  const ingredients = ["Salad", "Bacon", "Cheese", "Meat"];
  const showIngredients = ingredients.map((select, index) => {
    return (
      <div className={cx("wrapper-selection")}>
        <span className={cx("label")} key={index}>
          {" "}
          {select}
        </span>
        <div className={cx("wrapper-button")}>
          <Button less>Less</Button>
          <div className={cx("show-price")}>{num}</div>
          <Button more onClick={handlePlusIngredient}>
            More
          </Button>
        </div>
      </div>
    );
  });
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
        <div className={cx("total-price")}>
          <div className={cx("price")}> Price</div>
        </div>
        <div className={cx("select")}>{showIngredients}</div>
      </div>
    </div>
  );
}

export default Order;
