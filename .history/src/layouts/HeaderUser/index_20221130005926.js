import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import styles from './HeaderUser.module.scss';

const cx = classNames.bind(styles);

function HeaderUser({ children }) {
    const navigate = useNavigate('');
    const location = useLocation;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home')}>
                <Button
                    main
                    onClick={() => {
                        navigate('/private/doashboard');
                    }}
                >
                    {' '}
                    Burger Builder
                </Button>
                <Button
                    main
                    onClick={() => {
                        navigate('/private/orders');
                    }}
                >
                    {' '}
                    Orders
                </Button>
                <Button main> Logout</Button>
            </div>
        </div>
    );
}

export default HeaderUser;
