import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

import Button from '../../components/Button';
import styles from './HeaderUser.module.scss';
import { USER_LOGOUT } from 'redux/reducers/user.reducer';

const cx = classNames.bind(styles);

function HeaderUser({ children }) {
    const navigate = useNavigate('');
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(USER_LOGOUT({}));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home')}>
                <Button
                    main
                    onClick={() => {
                        navigate(ROUTES.USER.DASHBOARD);
                    }}
                >
                    {' '}
                    Burger Builder
                </Button>
                <Button
                    main
                    onClick={() => {
                        navigate(ROUTES.USER.ORDERS);
                    }}
                >
                    {' '}
                    Orders
                </Button>
                <Button
                    main
                    onClick={() => {
                        
                            handleLogout(),
                    }}
                >
                    {' '}
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default HeaderUser;
