import classNames from 'classnames/bind';
import Button from '../../components/Button';
import styles from './Order.module.scss';
import { increment, decrement, incrementByAmount } from '../../redux/reducers/burger.reducer';

import { useDispatch, useSelector } from 'react-redux';

//Decleration for className
const cx = classNames.bind(styles);
const Order = () => {
    const cartState = useSelector((state) => state.burger.cart);
    const dispatch = useDispatch();

    return (
        <>
            <div className={cx('wrapper')}>
                <Button less onClick={() => dispatch(increment())}>
                    less
                </Button>
                <Button more onClick={() => dispatch(decrement())}>
                    {' '}
                    more
                </Button>
                {cartState.state}
            </div>
        </>
    );
};
export default Order;
