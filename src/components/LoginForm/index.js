import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  return (
    <>
      <div className="auth__top">
        <h2>Welcome to Tima Chat</h2>
        <p>Please enter a username and password</p>
      </div>

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={
              <UserOutlined
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,.25)",
                  alignItems: "center",
                }}
              />
            }
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,.25)",
                  alignItems: "center",
                }}
              />
            }
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Link className="auth__register-link" to="/register">
          Registration
        </Link>
      </Form>
    </>
  );
};

export default LoginForm;
