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
    GET_PRODUCT_LIST_REQUEST,
} from 'redux/action/product.action';
// const cx = classNames.bind(styles);

const data = [];
function Orders() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState();

    useEffect(() => {
        dispatch(GET_PRODUCT_LIST_REQUEST());
        setProduct(productList);
    }, [product]);

    const productList = useSelector((state) => state.product.productList.data);

    //Map ProductList
    const tableData = (productList.data || []).map((item) => {
        return {
            ingredients: `Salad (${item.getCart.salad}), Bacon (${item.getCart.bacon}), Cheese (${item.getCart.cheese}), Meat (${item.getCart.meat})`,
            Price: parseInt(`${item.getPrice}$`),
        };
    });

    //Handle Sort Price Column
    const [sortedInfo, setSortedInfo] = useState({});
    const columns = [
        {
            title: 'Ingredients',
            dataIndex: 'ingredients',
        },

        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
            sorter: (a, b) => a.age - b.age,
            sortOrder:
                sortedInfo.columnKey === 'Price' ? sortedInfo.order : null,
            ellipsis: true,
        },
    ];
    // const setAgeSort = () => {
    //     setSortedInfo({
    //         order: 'descend',
    //         columnKey: 'age',
    //     });
    // };

    // const onChange = (sorter) => {
    //     console.log('params', sorter);
    //     setSortedInfo(sorter);
    // };
    const handleChange = (sorter) => {
        setSortedInfo(sorter);
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
                onChange={handleChange}
            />
        </>
    );
}

export default Orders;
