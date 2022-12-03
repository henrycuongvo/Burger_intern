import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Table } from 'antd';

import styles from './Order.module.scss';
import { Helmet } from 'react-helmet';
import HeaderUser from 'layouts/HeaderUser';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from 'redux/action/product.action';
import axios from 'axios';
const cx = classNames.bind(styles);

const data = [];
function Orders() {
    const [product, setProduct] = useState();
    // useEffect(() => {
    //     fetch('http://localhost:4000/products')
    //         .then((res) => {
    //             res.json();
    //         })
    //         .then((data) => {
    //             setProduct(data);
    //         });
    // }, []);
    const productList = useSelector((state) => state.product.data);

    const dispatch = useDispatch();
    const handleGetProduct = () => {
        dispatch(getProductListAction());
    };

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
