import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
const cx = classNames.bind(styles);
function Order() {
  const [num, setNum] = useState(0);
  // const handlePlusIngredient = () => {
  //   setNum(num + 1);
  // };

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
          <div className={cx("showPrice")}>{/* show Total Price */}</div>
        </div>

        {/*Table Selection */}

        <div className={cx("selection")}>
          <div className={cx("select")}>
            <span> Salad </span>
            <Button less>Less</Button>
            <div className={cx("show-numer")}>{num}</div>
            <Button more>More</Button>
          </div>
          <div className={cx("select")}>
            <span> Bacon </span>
            <Button less>Less</Button>
            <div className={cx("show-numer")}>{num}</div>
            <Button more>More</Button>
          </div>
          <div className={cx("select")}>
            <span> Cheese</span>
            <Button less>Less</Button>
            <div className={cx("show-numer")}>{num}</div>
            <Button more>More</Button>
          </div>
          <div className={cx("select")}>
            <span> Meat</span>
            <Button less>Less</Button>
            <div className={cx("show-numer")}>{num}</div>
            <Button more>More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
