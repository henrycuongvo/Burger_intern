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
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('sandwich')}></div>
                    <div>
                        {Array(getCart.salad).fill(
                            <div className={cx('salad')} value="salad">
                                {' '}
                                Salad{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(getCart.bacon).fill(
                            <div className={cx('bacon')} value="Bacon">
                                {' '}
                                Bacon{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(getCart.cheese).fill(
                            <div className={cx('cheese')} value="Cheese">
                                {' '}
                                Cheese{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(getCart.meat).fill(
                            <div className={cx('meat')} value="Meat">
                                {' '}
                                Meat{' '}
                            </div>,
                        )}
                    </div>
                    <div className={cx('sandwich')}></div>
                </div>
                <div className={cx('table')}>
                    <table className={cx('total-price')}>
                        <tr>
                            <td>Price</td>
                            <td>${getPrice}</td>
                        </tr>
                    </table>
                </div>
                <div className={cx('table_info')}>
                    <div className={cx('contact_data')}>
                        <div className={cx('name')}></div>
                        <div className={cx('phone')}></div>
                        <div className={cx('email')}></div>
                        <div className={cx('address')}></div>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
