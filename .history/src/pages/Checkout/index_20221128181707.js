import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { Helmet } from 'react-helmet';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router';

import { useSelector } from 'react-redux';
import Button from 'components/Button';
const cx = classNames.bind(styles);

const Checkout = () => {
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);

    const navigate = useNavigate();
    //Declaretion Form ContactData
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: '${label} is required!',
        types: {
            // eslint-disable-next-line no-template-curly-in-string
            email: '${label} is not a valid email!',
            // eslint-disable-next-line no-template-curly-in-string
            number: '${label} is not a valid number!',
        },
        number: {
            // eslint-disable-next-line no-template-curly-in-string
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <>
            <Helmet>
                <title> Checkout</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('nav')}>
                        <Button main> BurgerBuilder </Button>
                        <Button primary> Orders </Button>
                        <Button primary> Logout </Button>
                    </div>
                </div>
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

                {/* Table Contact Data */}
                <Form
                    className={cx('table_info')}
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        className={cx('item')}
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={cx('item')}
                        name={['user', 'phone']}
                        label="Phone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        className={cx('item')}
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        className={cx('item')}
                        name={['user', 'address']}
                        label="Address"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={cx('item')}
                        name={['user', 'note']}
                        label="Note"
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Form>
                <Button
                    order
                    onClick={() => {
                        navigate('/order');
                    }}
                >
                    {/* Handle button if order ends then navigate to */}
                    Order
                </Button>
            </div>
        </>
    );
};

export default Checkout;
