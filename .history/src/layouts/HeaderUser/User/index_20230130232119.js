import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import classNames from 'classnames/bind';

import styles from './User.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames(styles);

const items = [
    {
        label: <Link to>1st menu item</Link>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
const User = () => (
    <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Click me
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default User;
