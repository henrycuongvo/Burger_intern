import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Table } from 'antd';

import styles from './Order.module.scss';
import HeaderUser from 'layouts/HeaderUser';
import { getProductListAction } from 'redux/action/product.action';
// const cx = classNames.bind(styles);

const data = [];
function Orders() {
    const dispatch = useDispatch();

    const [product, setProduct] = useState();

    useEffect(() => {
        dispatch(getProductListAction());
    }, []);
    const productList = useSelector((state) => state.product.productList);
    console.log(productList);
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
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            <Helmet>
                <title> Orders</title>
            </Helmet>
            <HeaderUser />
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <button> Get</button>
        </>
    );
}

export default Orders;
