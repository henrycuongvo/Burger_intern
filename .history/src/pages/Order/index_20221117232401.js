import React from "react";
import styles from "./Order.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { useState } from "react";
import { Helmet } from "react-helmet";
const cx = classNames.bind(styles);
// const Order = () => {
//   const [num, setNum] = useState({
//     num1: 1,
//     num2: 1,
//     num3: 1,
//     num4: 1,
//   });
//   const handleClickLess = (data) => {
//     setNum({
//       ...num,
//       [data]: num[data] - 1,
//     });
//   };
//   const handleClickMore = (data) => {
//     setNum({
//       ...num,
//       [data]: num[data] + 1,
//     });
//   };
//   return (
//     <div className={cx("wrapper")}>
//       <Helmet>
//         <title>Order</title>
//       </Helmet>
//       <div className={cx("burger")}>
//         <div className={cx("content")}>
//           <div className={cx("sandwich")}></div>
//           <div className={cx("salad")}>Salad</div>
//           <div className={cx("bacon")}>Bacon</div>
//           <div className={cx("cheese")}>Cheese</div>
//           <div className={cx("meat")}>Meat</div>
//           <div className={cx("sandwich")}></div>
//         </div>
//       </div>
//       <div className={cx("table")}>
//         <div className={cx("total-price")}>
//           <div className={cx("price")}> Price</div>
//           <div className={cx("showPrice")}>{/* show Total Price */}</div>
//         </div>

//         {/*Selection */}

//         <div className={cx("selection")}>
//           <div className={cx("wrapper-select")}>
//             <div className={cx("select")}>
//               <span> Salad </span>
//               <div className={cx("wrapper-button")}>
//                 <Button
//                   onClick={() => {
//                     handleClickLess("num1");
//                   }}
//                   less
//                 >
//                   Less
//                 </Button>
//                 <div className={cx("show-number")}>{num.num1}</div>
//                 <Button
//                   onClick={() => {
//                     handleClickMore("num1");
//                   }}
//                   more
//                 >
//                   More
//                 </Button>
//               </div>
//             </div>
//             <div className={cx("select")}>
//               <span> Bacon </span>
//               <div className={cx("wrapper-button")}>
//                 <Button
//                   onClick={() => {
//                     handleClickLess("num2");
//                   }}
//                   less
//                 >
//                   Less
//                 </Button>
//                 <div className={cx("show-number")}>{num.num2}</div>
//                 <Button
//                   onClick={() => {
//                     handleClickMore("num2");
//                   }}
//                   more
//                 >
//                   More
//                 </Button>
//               </div>
//             </div>
//             <div className={cx("select")}>
//               <span> Cheese</span>
//               <div className={cx("wrapper-button")}>
//                 <Button
//                   onClick={() => {
//                     handleClickLess("num3");
//                   }}
//                   less
//                 >
//                   Less
//                 </Button>
//                 <div className={cx("show-number")}>{num.num3} </div>
//                 <Button
//                   onClick={() => {
//                     handleClickMore("num3");
//                   }}
//                   more
//                 >
//                   More
//                 </Button>
//               </div>
//             </div>
//             <div className={cx("select")}>
//               <span> Meat</span>
//               <div className={cx("wrapper-button")}>
//                 <Button
//                   onClick={() => {
//                     handleClickLess("num4");
//                   }}
//                   less
//                 >
//                   Less
//                 </Button>
//                 <div className={cx("show-number")}> {num.num4}</div>
//                 <Button
//                   onClick={() => {
//                     handleClickMore("num4");
//                   }}
//                   more
//                 >
//                   More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Button primary>Checkout</Button>
//     </div>
//   );
// };

// export default Order;
