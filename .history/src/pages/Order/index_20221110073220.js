import React from "react";
import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
const cx = classNames.bind(styles);
const Order = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  //khai báo từng state thì dở quá nên t không khai báo, muốn gộp vô thành 1 state chung rồi truyền dữ liệu vô á

  const handleClickPlus = (num, num1, num2, num3, ...Number) => {
    setNum(Number + 1);
  };

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

        {/*Selection */}

        <div className={cx("selection")}>
          <div className={cx("wrapper-select")}>
            <div className={cx("select")}>
              <span> Salad </span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{num}</div>
                <Button onClick={(num) => handleClickPlus(num)} more>
                  More
                </Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Bacon </span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{}</div>
                <Button onClick={handleClickPlus} more>
                  More
                </Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Cheese</span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{}</div>
                <Button more>More</Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Meat</span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{}</div>
                <Button more>More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button primary>Checkout</Button>
    </div>
  );
};

export default Order;
