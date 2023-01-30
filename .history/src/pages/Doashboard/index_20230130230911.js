import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet';

import styles from './Doashboard.module.scss';
import Button from 'components/Button';
import {
    decrement,
    increment,
    incrementByAmount,
} from 'redux/reducers/burger.reducer';
import HeaderUser from 'layouts/HeaderUser';
import { ROUTES } from 'constants/routes';
const cx = classNames.bind(styles);

export default function Doashboard() {
    //Get Data from Store
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);

    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    let disable;
    if (salad === 0 || bacon === 0 || cheese === 0 || meat <= 0) {
        disable = true;
    } else {
        disable = false;
    }

    useEffect(() => {
        setSalad(getCart.salad);
        setBacon(getCart.bacon);
        setCheese(getCart.cheese);
        setMeat(getCart.meat);
    }, [getCart]);

    useEffect(() => {
        dispatch(incrementByAmount());
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

    //handle Button Check Out
    const handleCheckOut = () => {
        if (isLoggedIn === true) {
            navigate(ROUTES.USER.CHECKOUT);
        } else navigate(ROUTES.LOGIN);
    };

    return (
        <>
            <Helmet>
                <title> Burger Builder</title>
            </Helmet>
            <HeaderUser />
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('sandwich')}></div>
                    <div>
                        {Array(salad).fill(
                            <div className={cx('salad')} value="salad">
                                {' '}
                                Salad{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(bacon).fill(
                            <div className={cx('bacon')} value="Bacon">
                                {' '}
                                Bacon{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(cheese).fill(
                            <div className={cx('cheese')} value="Cheese">
                                {' '}
                                Cheese{' '}
                            </div>,
                        )}
                    </div>
                    <div>
                        {Array(meat).fill(
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
                                    disabled={disable}
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
                    <Button
                        primary
                        onClick={() => {
                            handleCheckOut();
                        }}
                    >
                        Check out
                    </Button>
                </div>
            </div>
        </>
    );
}
