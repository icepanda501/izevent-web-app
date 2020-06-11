import React from 'react';
import { Row, Col } from 'antd';

import CreateUserCard from '../../components/CreateUserCard';

const CreateUserPage = () => (
  <div>
    <Row justify="center">
      <Col>
        <div><p>สร้างบัญชีผู้ใช้</p></div>
      </Col>
    </Row>
    <Row justify="center">
      <Col span={20}>
        <CreateUserCard />
      </Col>
    </Row>
  </div>
);

export default CreateUserPage;
