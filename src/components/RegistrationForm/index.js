import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

import "./Registration.scss";

const Index = () => {
  return (
    <div>
      <div className="auth__top">
        <h2>Registration form to Tima Chat</h2>
        <p>We're glad you chose Tima Chat</p>
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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={
              <MailOutlined
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,.25)",
                  alignItems: "center",
                }}
              />
            }
            placeholder="email"
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
            placeholder="verify password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Link className="auth__register-link" to="/">
          Login
        </Link>
      </Form>
    </div>
  );
};

export default Index;
