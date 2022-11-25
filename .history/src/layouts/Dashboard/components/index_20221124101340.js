import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function HeaderDoashboard({ children }) {
    const navigate = useNavigate('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('burger_order')}>
                <div className={cx('burger')}>
                    <Button
                        main
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        {' '}
                        Burger Builder
                    </Button>
                </div>

                <div className={cx('order')}>
                    <Button
                        main
                        onClick={() => {
                            navigate('/order');
                        }}
                    >
                        {' '}
                        Order
                    </Button>
                </div>
            </div>

            <div className={cx('login_register')}>
                <div className={cx('login')}>
                    <Button
                        main
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        {' '}
                        Login
                    </Button>
                </div>
                <div className={cx('register')}>
                    <Button
                        main
                        onClick={() => {
                            navigate('/register');
                        }}
                    >
                        {' '}
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeaderDoashboard;
