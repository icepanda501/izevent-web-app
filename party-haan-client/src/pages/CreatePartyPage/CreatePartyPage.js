import React from 'react';
import { Row, Col } from 'antd';

import CreatePartyCard from '../../components/CreatePartyCard';

const CreatePartyPage = () => (
  <div>
    <Row justify="center">
      <Col>
        <div><p>สร้างปาร์ตี้</p></div>
      </Col>
    </Row>
    <Row justify="center">
      <Col>
        <CreatePartyCard />
      </Col>
    </Row>
  </div>
);

export default CreatePartyPage;
