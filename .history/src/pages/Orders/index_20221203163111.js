import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Table } from 'antd';

import styles from './Order.module.scss';
import HeaderUser from 'layouts/HeaderUser';
import {
    getProductListAction,
    getProductSuccess,
} from 'redux/action/product.action';
// const cx = classNames.bind(styles);

const data = [];
function Orders() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState();

    useEffect(() => {
        dispatch(getProductListAction());
    }, []);

    const productList = useSelector((state) => state.product.productList.data);
    console.log('🚀 ~ file: index.js:25 ~ Orders ~ productList', productList);
    const tableData = (productList.data || []).map((item) => {
        return {
            ingredients: `Salad (${item.getCart.salad}), Bacon (${item.getCart.bacon}), Cheese (${item.getCart.cheese}), Meat (${item.getCart.meat})`,
            price: `${item.getPrice}$`,
        };
    });
    console.log(tableData);

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
    const onChange = (sorter) => {
        console.log('params', sorter);
    };

    return (
        <>
            <Helmet>
                <title> Orders</title>
            </Helmet>
            <HeaderUser />
            <Table
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
            />
            <button> Get</button>
        </>
    );
}

export default Orders;
