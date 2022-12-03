import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Table } from 'antd';

import styles from './Order.module.scss';
import { Helmet } from 'react-helmet';
import HeaderUser from 'layouts/HeaderUser';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from 'redux/action/product.action';
const cx = classNames.bind(styles);
const columns = [
    {
        title: 'Ingredients',
        dataIndex: 'ingredients',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
];
const data = [];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

function Orders() {
    const { productList } = useSelector((state) => state.product.data);

    const dispatch = useDispatch();
    const handleGetProduct = () => {
        dispatch(getProductListAction());
        console.log({ productList });
    };

    return (
        <>
            <Helmet>
                <title> Orders</title>
            </Helmet>
            <HeaderUser />
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <button
                onClick={() => {
                    handleGetProduct();
                }}
            >
                {' '}
                Get
            </button>
        </>
    );
}

export default Orders;
