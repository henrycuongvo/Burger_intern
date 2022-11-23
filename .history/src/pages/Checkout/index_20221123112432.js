import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { Helmet } from 'react-helmet';

import { useSelector, useDispatch } from 'react-redux';
const cx = classNames.bind(styles);

const Checkout = () => {
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);
    return (
        <>
            <Helmet>
                <title> Checkout</title>
            </Helmet>
            <div className={cx('wrapper')}></div>
        </>
    );
};

export default Checkout;
