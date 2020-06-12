import React from 'react';

import { Card, Input, Form, Checkbox } from 'antd';

import CustomButton from '../CustomButton';

const CreateUserCard = ({ onFinish, onFinishFailed }) => (
  <Card>
    <Form
      layout="vertical"
      name="createUserForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="ชื่อผู้ใช้งาน"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="อีเมล์"
        name="email"
        rules={[{ type: 'email', required: true, message: 'your email is wrong !' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="รหัสผ่าน"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          { validator: (_, value) => (value ? Promise.resolve(true) : Promise.reject('Should accept agreement')) },
        ]}
      >
        <Checkbox>
          ฉันยอมรับเงื่อนไขและข้อตกลงเกี่ยวกับการใช้งาน PartyHaan รวมถึงนโยบายความเป็นส่วนตัว
        </Checkbox>
      </Form.Item>
      <Form.Item
        name="needPromotion"
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

export default CreateUserCard;
