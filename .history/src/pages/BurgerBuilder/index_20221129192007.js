import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet';

import styles from './BurgerBuilder.module.scss';
import Button from 'components/Button';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementSaga,
} from 'redux/reducers/burger.reducer';
import Header from 'layouts/Header';
const cx = classNames.bind(styles);

export default function BurgerBuilder() {
    //Get Data from Store
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);
    const [product, setProduct] = useState(getCart);
    console.log(product);
    useEffect(() => {
        dispatch(incrementByAmount());
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle Button Check Out
    const handleCheckOut = () => {
        const isLoggedIn = Boolean(localStorage.getItem('asscestoken'));
        if (isLoggedIn === true) {
            navigate('/checkout');
        } else navigate('/login');
    };

    return (
        <>
            <Helmet>
                <title> BurgerBuilder</title>
            </Helmet>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('sandwich')}></div>
                    <div>
                        {Array(product.salad).fill(
                            <div className={cx('salad')} value="salad">
                                {' '}
                                Salad{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(product.bacon).fill(
                            <div className={cx('bacon')} value="Bacon">
                                {' '}
                                Bacon{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(product.cheese).fill(
                            <div className={cx('cheese')} value="Cheese">
                                {' '}
                                Cheese{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(product.meat).fill(
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

                    <table className={cx('selection')}>
                        <tr>
                            <td> Salad</td>
                            <td>
                                {' '}
                                <Button
                                    less
                                    value="salad"
                                    onClick={() =>
                                        dispatch(decrement(String('salad')))
                                    }
                                >
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button
                                    more
                                    onClick={() =>
                                        dispatch(increment(String('salad')))
                                    }
                                >
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Bacon</td>
                            <td>
                                {' '}
                                <Button
                                    less
                                    onClick={() =>
                                        dispatch(decrement(String('bacon')))
                                    }
                                >
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button
                                    more
                                    onClick={() =>
                                        dispatch(increment(String('bacon')))
                                    }
                                >
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Cheese</td>
                            <td>
                                {' '}
                                <Button
                                    less
                                    onClick={() =>
                                        dispatch(decrement(String('cheese')))
                                    }
                                >
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button
                                    more
                                    onClick={() =>
                                        dispatch(increment(String('cheese')))
                                    }
                                >
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Meat</td>
                            <td>
                                {' '}
                                <Button
                                    less
                                    onClick={() =>
                                        dispatch(decrement(String('meat')))
                                    }
                                >
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button
                                    more
                                    onClick={() =>
                                        dispatch(increment(String('meat')))
                                    }
                                >
                                    More
                                </Button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={cx('checkout')}>
                    <Button primary onClick={handleCheckOut}>
                        Check out
                    </Button>
                </div>
            </div>
        </>
    );
}
