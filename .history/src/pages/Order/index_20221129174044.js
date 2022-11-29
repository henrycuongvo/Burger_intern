import React from 'react';
import classNames from 'classnames/bind';

import styles from './Order.module.scss';
import { Helmet } from 'react-helmet';
import HeaderUser from 'layouts/HeaderUser';
const cx = classNames.bind(styles);
function Order() {
    return (
        <>
            <Helmet>
                <title> Orders</title>
            </Helmet>
            <HeaderUser />
        </>
    );
}

export default Order;
