import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import classNames from 'classnames/bind';

import styles from './User.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const items = [
    {
        label: <Link to>Your Profile</Link>,
        key: '0',
    },
    {
        label: <Link to>Setting</Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'Log out',
        key: '3',
    },
];
const User = () => (
    <Dropdown
        overlayClassName={'dropdown'}
        overlayStyle={{ paddingTop: '10px' }}
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <img
                    className={cx('avatar')}
                    src="https://anhhd.com/wp-content/uploads/2021/10/Chiem-nguong-89-avatar-dep-nhat-co-luong-dowload-nhieu-nhat.jpg"
                    alt="avatar"
                />
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default User;
