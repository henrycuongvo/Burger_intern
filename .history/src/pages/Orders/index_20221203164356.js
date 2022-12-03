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
        setProduct(productList);
    }, [product]);

    const productList = useSelector((state) => state.product.productList.data);
    const tableData = (productList.data || []).map((item) => {
        return {
            ingredients: `Salad (${item.getCart.salad}), Bacon (${item.getCart.bacon}), Cheese (${item.getCart.cheese}), Meat (${item.getCart.meat})`,
            price: `${item.getPrice}$`,
        };
    });
    const [sortedInfo, setSortedInfo] = useState({});
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
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
        },
    ];
    const onChange = (sorter) => {
        console.log('params', sorter);
        setSortedInfo(sorter);
    };
    // const [sortedInfo, setSortedInfo] = useState({});

    // const handleChange = (sorter) => {
    //     console.log('Various parameters', sorter);
    //     setSortedInfo(sorter);
    // };
    // const setAgeSort = () => {
    //     setSortedInfo({
    //         order: 'descend',
    //         columnKey: 'age',
    //     });
    // };
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
        </>
    );
}

export default Orders;
