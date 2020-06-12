import React from 'react';
import { Row, Col } from 'antd';

import CreateUserCard from '../../components/CreateUserCard';
import { createUserHandler } from '../../api/apiHandler';

const CreateUserPage = () => {
  const onFinish = async values => {
    console.log('Success:', values);
    const reuslt = await createUserHandler('', values);
    console.log(reuslt);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Row justify="center">
        <Col>
          <div><p>สร้างบัญชีผู้ใช้</p></div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <CreateUserCard onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Col>
      </Row>
    </div>
  );
};

export default CreateUserPage;
