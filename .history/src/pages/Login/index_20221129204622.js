import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ROUTES } from 'routes';
import { loginAction } from 'redux/action/user.action';
import styles from './Login.module.scss';
import Header from 'layouts/Header';
import PrivateRoute from 'pages/PrivateRoute';

const cx = classNames.bind(styles);

const Login = () => {
    const [loginForm] = Form.useForm();

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
            loginAction({
                data: {
                    email: values.email,
                    password: values.password,
                    accessToken: true,
                },
                callback: {
                    goToDashboard: () => navigate('/'),

                    goToHome: () => navigate(state?.prevPath || '/checkout'),
                },
            }),
        );
        console.log(loginAction);
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
                    label="Mật khẩu"
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
                    Bạn chưa có tài khoản?{' '}
                    <Link to={ROUTES.REGISTER}>Đăng ký</Link>
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loginData.loading}
                >
                    Đăng nhập
                </Button>
            </Form>
        </>
    );
};

export default Login;
