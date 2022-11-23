import classNames from 'classnames/bind';
import Button from '../../components/Button';
import styles from '../Order.module.scss';

import { useSelector } from 'react-redux';

//Decleration for className
const cx = classNames.bind(styles);
const Order = () => {
    const cartState = useSelector((state) => state.cart);
    console.log(cartState);
    return (
        <>
            <div className="">
                <Button less>less</Button>
                <Button more> more</Button>
            </div>
        </>
    );
};
export default Order;
