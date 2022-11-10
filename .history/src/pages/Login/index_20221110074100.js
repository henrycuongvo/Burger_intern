import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const cx = classNames.bind(styles);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className={cx("login-form")}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div className={cx("wrapper")}>
        <Form.Item className={cx("item")}>
          <div className={cx("login-title")}>Sign In</div>
        </Form.Item>
        <Form.Item
          className={cx("item")}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className={cx("site-form-item-icon")} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          className={cx("item")}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className={cx("site-form-item-icon")} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className={cx("login-form-forgot")} href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={cx("login-form-button")}
          >
            Log in
          </Button>
          Or{" "}
          <Link Link to="/register">
            register now!
          </Link>
        </Form.Item>
      </div>
    </Form>
  );
};
export default Login;
