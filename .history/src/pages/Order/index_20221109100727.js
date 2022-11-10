import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
const cx = classNames.bind(styles);
function Order() {
  const numbers = [{ num1: 0 }, { num2: 0 }, { num3: 0 }, { num4: 0 }];
  console.log(num);

  const [num, setNum] = useState(0);

  const handleClickPlus = () => {
    setNum(num + 1);
  };
  const handleClickReduce = () => {
    setNum(num - 1);
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
                <Button more>More</Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Bacon </span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{num}</div>
                <Button onClick={handleClickPlus} more>
                  More
                </Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Cheese</span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{num}</div>
                <Button onClick={handleClickPlus} more>
                  More
                </Button>
              </div>
            </div>
            <div className={cx("select")}>
              <span> Meat</span>
              <div className={cx("wrapper-button")}>
                <Button less>Less</Button>
                <div className={cx("show-number")}>{num}</div>
                <Button onClick={handleClickPlus} more>
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
