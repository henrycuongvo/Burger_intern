import classNames from 'classnames/bind';
import Button from '../../components/Button';
import styles from './Order.module.scss';
import { increment, decrement, incrementByAmount } from '../../redux/reducers/burger.reducer';

import { useSelector } from 'react-redux';

//Decleration for className
const cx = classNames.bind(styles);
const Order = () => {
    const cartState = useSelector((state) => state.burger.cart);

    return (
        <>
            <div className={cx('wrapper')}>
                <Button less onClick={increment()}>
                    less
                </Button>
                <Button more onClick={decrement()}>
                    {' '}
                    more
                </Button>
            </div>
        </>
    );
};
export default Order;
