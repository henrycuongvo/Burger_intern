import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ROUTES } from 'constants/routes';
import styles from './Login.module.scss';
import Header from 'layouts/Header';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
} from 'redux/reducers/user.reducer';

const cx = classNames.bind(styles);

const Login = () => {
    const [loginForm] = Form.useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = useLocation();

    const dispatch = useDispatch();
    const { loginData } = useSelector((state) => state.user);
    console.log(loginData);

    useEffect(() => {
        if (loginData.error) {
            loginForm.setFields([
                {
                    name: 'email',
                    errors: [' '],
                },
                {
                    name: 'password',
                    errors: [loginData.error],
                },
            ]);
        }
    }, [loginData.error]);

    const handleLogin = (values) => {
        dispatch(
            USER_LOGIN_REQUEST({
                data: {
                    email: values.email,
                    password: values.password,
                },
                callback: {
                    // goToDashboard: () => navigate('/login'),

                    goToHome: () =>
                        navigate(state?.prevPath || ROUTES.USER.CHECKOUT),
                },
            }),
        );
    };

    return (
        <>
            <Header />
            <Form
                className={cx('wrapper')}
                form={loginForm}
                name="loginForm"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={(values) => handleLogin(values)}
                autoComplete="off"
                style={{ padding: '0 2px' }}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="M???t kh???u"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <div style={{ marginBottom: 16 }}>
                    B???n ch??a c?? t??i kho???n?{' '}
                    <Link to={ROUTES.REGISTER}>????ng k??</Link>
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loginData.loading}
                >
                    ????ng nh???p
                </Button>
            </Form>
        </>
    );
};

export default Login;
