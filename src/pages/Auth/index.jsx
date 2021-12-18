import React from "react";
import { Form, Input, Checkbox } from "antd";
import { Button, Block } from "../../components";

import "./Auth.scss";

const Index = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Welcome to Tima Chat</h2>
          <p>Please enter a username and password</p>
        </div>

        <Block>
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
              <Input placeholder="Username" />
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
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <a className="auth__register-link" href="#">
              Registration
            </a>
          </Form>
        </Block>
      </div>
    </section>
  );
};

export default Index;
