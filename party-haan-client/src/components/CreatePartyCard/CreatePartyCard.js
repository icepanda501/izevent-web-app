import React from 'react';
import { Input, Form, Card } from 'antd';

import CustomButton from '../CustomButton';

const CreatePartyCard = () => {
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
          label="ชื่อปาร์ตี้"
          name="title"
          rules={[{ required: true, message: 'Please input your party name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="จำนวน"
          name="maxJoiner"
          rules={[{ required: true, message: 'Please input your max joiner!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <div className="submit-button-layout">
            <CustomButton type="primary" htmlType="submit">
              สร้างปาร์ตี้
            </CustomButton>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreatePartyCard;
