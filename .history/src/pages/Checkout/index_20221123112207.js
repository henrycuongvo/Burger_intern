import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import Order from '../Order';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

const Checkout = () => {
    return (
        <>
            <Helmet>
                <title> Checkout</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <Order />
            </div>
        </>
    );
};

export default Checkout;
