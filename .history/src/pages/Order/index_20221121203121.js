import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Button from '../../components/Button';
const cx = classNames.bind(styles);
const SALAD = 'Salad';
const BACON = 'Bacon';
const CHEESE = 'Cheese';
const MEAT = 'Meat';

export default function BurgerBuilder() {
    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setTotal(salad + cheese + bacon + meat);
    }, [salad, cheese, bacon, meat]);

    function handlechangeValue(name, value) {
        switch (name) {
            case SALAD:
                if (salad + value >= 0) {
                    setSalad(salad + value);
                } else setSalad(0);
                break;
            case BACON:
                setBacon(bacon + value);
                if (bacon + value >= 0) {
                    setBacon(bacon + value);
                } else setBacon(0);
                break;
            case CHEESE:
                setCheese(cheese + value);
                if (cheese + value >= 0) {
                    setCheese(cheese + value);
                } else setCheese(0);
                break;
            case MEAT:
                setMeat(meat + value);
                if (meat + value >= 0) {
                    setMeat(meat + value);
                } else setMeat(0);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('sandwich')}></div>
                    <div>
                        {Array(salad).fill(
                            <div className={cx('salad')} value="Salad">
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
                            <td>${total}</td>
                        </tr>
                    </table>

                    <table className={cx('selection')}>
                        <tr>
                            <td> Salad</td>
                            <td>
                                {' '}
                                <Button less onClick={() => handlechangeValue(SALAD, -1)}>
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button more onClick={() => handlechangeValue(SALAD, +1)}>
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Bacon</td>
                            <td>
                                {' '}
                                <Button less onClick={() => handlechangeValue(BACON, -1)}>
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button more onClick={() => handlechangeValue(BACON, +1)}>
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Cheese</td>
                            <td>
                                {' '}
                                <Button less onClick={() => handlechangeValue(CHEESE, -1)}>
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button more onClick={() => handlechangeValue(CHEESE, +1)}>
                                    More
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td> Meat</td>
                            <td>
                                {' '}
                                <Button less onClick={() => handlechangeValue(MEAT, -1)}>
                                    Less
                                </Button>
                            </td>
                            <td>
                                {' '}
                                <Button more onClick={() => handlechangeValue(MEAT, +1)}>
                                    More
                                </Button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="checkout">
                    <Button primary> Check out</Button>
                </div>
            </div>
        </>
    );
}
