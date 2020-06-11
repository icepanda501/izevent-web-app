import React from 'react';

import { Card, Input, Form, Checkbox } from 'antd';

import CustomButton from '../CustomButton';

const CreateUserCard = () => {
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
          label="ชื่อผู้ใช้งาน"
          name="username"
          rules={[{ required: true, message: 'Please input your party username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="รหัสผ่าน"
          name="password"
          rules={[{ required: true, message: 'Please input your max password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) },
          ]}
        >
          <Checkbox>
            ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน PartyHaan รวมถึงนโยบายความเป็นส่วนตัว
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="promotion"
          valuePropName="checked"
        >
          <Checkbox>
            ฉันต้องการรับข่าวสารเกี่ยวกับโปรโมชั่นจาก PartyHaan
          </Checkbox>
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

export default CreateUserCard;
