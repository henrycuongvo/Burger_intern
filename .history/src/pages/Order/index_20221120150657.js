import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/burger.reducer';
import classNames from 'classnames/bind';

import Button from '../../components/Button';
import styles from './Order.module.scss';

const cx = classNames.bind(styles);

const SALAD = 'Salad';
const BACON = 'Bacon';
const CHEESE = 'Cheese';
const MEAT = 'Meat';

//Function ORDER
const Order = ({ name, setName }) => {
    // const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    const [total, setTotal] = useState(0);

    // useEffect(() => {
    //   if ((salad, bacon, cheese, meat)) {
    //     console.log("unlock");
    //   }
    // }, [salad, bacon, cheese, meat]);

    // // useEffect(() => {
    // //   return () => {
    // //     setName("");
    // //     console.log("Mới thoát OrderPage");
    // //   };
    // // }, []);

    // function changeValue(name, value) {
    //   switch (name) {
    //     case SALAD:
    //       if (salad + value >= 0) {
    //         setSalad(salad + value);
    //       } else setSalad(0);
    //       break;
    //     case BACON:
    //       setBacon(bacon + value);
    //       if (bacon + value >= 0) {
    //         setBacon(bacon + value);
    //       } else setBacon(0);
    //       break;
    //     case CHEESE:
    //       setCheese(cheese + value);
    //       if (cheese + value >= 0) {
    //         setCheese(cheese + value);
    //       } else setCheese(0);
    //       break;
    //     case MEAT:
    //       setMeat(meat + value);
    //       if (meat + value >= 0) {
    //         setMeat(meat + value);
    //       } else setMeat(0);
    //       break;
    //     default:
    //       break;
    //   }
    // }
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    {/* <div>
            {Array(salad).fill(
              <div className="salad" value="Salad">
                {" "}
                Salad{" "}
              </div>
            )}
          </div> */}
                    <table>
                        <tr>
                            <td>SALAD</td>
                            <td>
                                {' '}
                                <Button less>
                                    {/* onClick={() => changeValue(SALAD, -1)} */}
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button more>
                                    {/* onClick={() => changeValue(SALAD, -1)} */}
                                    More
                                </Button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Order;
