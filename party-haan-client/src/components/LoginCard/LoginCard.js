import React from 'react';
import { Card, Form, Input, Checkbox } from 'antd';

import CustomButton from '../CustomButton';

import './LoginCard.css';

const LoginCard = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Card>
      <Form
        layout="vertical"
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="submit-button-layout">
            <CustomButton type="primary" htmlType="submit">
              เข้าสู่ระบบ
            </CustomButton>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginCard;
