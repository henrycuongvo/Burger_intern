import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Table } from 'antd';

import styles from './Order.module.scss';
import { Helmet } from 'react-helmet';
import HeaderUser from 'layouts/HeaderUser';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_ACTION, REQUEST } from 'redux/constans';
import { getProductListAction } from 'redux/action/burger.action';
import { get } from 'immer/dist/internal';
import axios from 'axios';
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
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList.data);
    console.log(productList);
    const handleGetData = () => {
        dispatch(getProductListAction());
    };

    return (
        <>
            <Helmet>
                <title> Orders</title>
            </Helmet>
            <HeaderUser />
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <button onClick> Get</button>
        </>
    );
}

export default Orders;
