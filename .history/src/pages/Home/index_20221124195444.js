import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet';
import { tableStyles, rowStyle, leftColumnStyle } from 'react';

import styles from './Home.module.scss';
import Button from 'components/Button';
import { decrement, increment, incrementByAmount } from 'redux/reducers/burger.reducer';
const cx = classNames.bind(styles);

export default function BurgerBuilder() {
    //Get Data from Store
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);
    useEffect(() => {
        dispatch(incrementByAmount());
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle Button Check Out
    const handleCheckOut = () => {};

    return (
        <>
            <Helmet>
                <title> Order</title>
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
                    <tbody>
                        <table style={tableStyles} className={cx('total-price')}>
                            <tr style={rowStyle}>
                                <td style={leftColumnStyle}>Price</td>
                                <td style={leftColumnStyle}>${getPrice}</td>
                            </tr>
                        </table>
                    </tbody>

                    <tbody>
                        <table style={tableStyles} className={cx('selection')}>
                            <tr style={rowStyle}>
                                <td style={leftColumnStyle}> Salad</td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        less
                                        value="salad"
                                        onClick={() => dispatch(decrement(String('salad')))}
                                    >
                                        Less
                                    </Button>
                                </td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        more
                                        onClick={() => dispatch(increment(String('salad')))}
                                    >
                                        More
                                    </Button>
                                </td>
                            </tr>
                            <tr style={rowStyle}>
                                <td style={leftColumnStyle}> Bacon</td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        less
                                        onClick={() => dispatch(decrement(String('bacon')))}
                                    >
                                        Less
                                    </Button>
                                </td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        more
                                        onClick={() => dispatch(increment(String('bacon')))}
                                    >
                                        More
                                    </Button>
                                </td>
                            </tr>
                            <tr style={rowStyle}>
                                <td style={leftColumnStyle}> Cheese</td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        less
                                        onClick={() => dispatch(decrement(String('cheese')))}
                                    >
                                        Less
                                    </Button>
                                </td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        more
                                        onClick={() => dispatch(increment(String('cheese')))}
                                    >
                                        More
                                    </Button>
                                </td>
                            </tr>
                            <tr style={rowStyle}>
                                <td style={leftColumnStyle}> Meat</td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        less
                                        onClick={() => dispatch(decrement(String('meat')))}
                                    >
                                        Less
                                    </Button>
                                </td>
                                <td style={leftColumnStyle}>
                                    {' '}
                                    <Button
                                        more
                                        onClick={() => dispatch(increment(String('meat')))}
                                    >
                                        More
                                    </Button>
                                </td>
                            </tr>
                        </table>
                    </tbody>
                </div>
                <div className="checkout">
                    <Button
                        primary
                        onClick={() => {
                            navigate('/order');
                        }}
                    >
                        {' '}
                        Check out
                    </Button>
                </div>
            </div>
        </>
    );
}
