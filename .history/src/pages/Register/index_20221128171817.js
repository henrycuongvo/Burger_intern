import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Route, useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes/index';

import { registerAction } from 'redux/action/user.action';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
const cx = classNames.bind(styles);

const Register = () => {
    const [registerForm] = Form.useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const registerData = useSelector((state) => state.user);
    console.log(registerData);

    useEffect(() => {
        if (registerData.error) {
            registerForm.setFields([
                {
                    name: 'email',
                    errors: [registerData.error],
                },
            ]);
        }
    }, [registerData.error]);

    const handleRegister = (values) => {
        dispatch(
            registerAction({
                data: {
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                    role: 'user',
                },
                // callback: {
                //     goToLogin: () => navigate(ROUTES.LOGIN),
                // },
            }),
        );
        dispatch({
            type: 'REGISTER_ACTION',
            payload: {
                data: {
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                    role: 'user',
                },
                // callback: {
                //     goToLogin: () => navigate(ROUTES.LOGIN),
                // },
            },
        });
        console.log(registerData);
    };
    return (
        <>
            <div className={cx('wrapper')}>
                <Form
                    form={registerForm}
                    name="registerForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={(values) => handleRegister(values)}
                    autoComplete="off"
                    style={{ padding: '0 2px' }}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullName!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            { type: 'email', message: 'Email không hợp lệ' },
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
                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!',
                                        ),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={registerData.loading}
                    >
                        Đăng ký
                    </Button>
                </Form>
            </div>
        </>
    );
};
export default Register;
