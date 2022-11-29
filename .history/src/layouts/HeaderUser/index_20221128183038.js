import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import styles from './HeaderUser.module.scss';

const cx = classNames.bind(styles);

function Header({ children }) {
    const navigate = useNavigate('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home')}>
                <Button
                    main
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    {' '}
                    Burger Builder
                </Button>
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
        </div>
    );
}

export default Header;
