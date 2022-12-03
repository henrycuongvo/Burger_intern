import React from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { Helmet } from 'react-helmet';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import HeaderUser from 'layouts/HeaderUser';
import { ROUTES } from 'constants/routes';
import { CREATE_PRODUCT_REQUEST } from 'redux/reducers/product.reducer';
const cx = classNames.bind(styles);

const initialValues = {
    name: '',
    phone: '',
    email: '',
    address: '',
    note: '',
};
console.log(initialValues);
const Checkout = () => {
    const getCart = useSelector((state) => state.burger.cart);
    const getPrice = useSelector((state) => state.burger.totalPrice);
    const dispatch = useDispatch();
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
    const handleOrderProduct = () => {
        dispatch(
            CREATE_PRODUCT_REQUEST({
                data: { getCart, getPrice },
                callback: {
                    goToList: () => navigate(ROUTES.USER.ORDERS),
                },
            }),
        );
    };

    return (
        <>
            <Helmet>
                <title> Checkout</title>
            </Helmet>
            <HeaderUser />
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

                {/* Table Contact Data */}
                <Form
                    // onFinish={handleOrderProduct}
                    initialValues={initialValues}
                    className={cx('table_info')}
                    {...layout}
                    name="nest-messages"
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        className={cx('item')}
                        name="name"
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
                        name="phone"
                        label="Phone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        className={cx('item')}
                        name="email"
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
                        name="address"
                        label="Address"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item className={cx('item')} name="note" label="Note">
                        <Input.TextArea />
                    </Form.Item>
                </Form>
                <div className={cx('order')}>
                    <Button
                        order
                        onClick={(values) => {
                            handleOrderProduct(values);
                        }}
                    >
                        {/* Handle button if order ends then navigate to */}
                        Order
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
