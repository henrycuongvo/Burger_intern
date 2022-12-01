import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logoutAction } from 'redux/action/user.action';

import Button from '../../components/Button';
import styles from './HeaderUser.module.scss';

const cx = classNames.bind(styles);

function HeaderUser({ children }) {
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const location = useLocation;
    const handleLogout = () => {
        dispatch(logoutAction());
        console.log('Logout');
    };
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
                <Button main onClick={handleLogout}>
                    {' '}
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default HeaderUser;
