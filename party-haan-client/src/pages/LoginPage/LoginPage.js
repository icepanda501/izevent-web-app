import React from 'react';
import { navigate } from '@reach/router';
import { Row, Col } from 'antd';
import LoginCard from '../../components/LoginCard';
import CustomButton from '../../components/CustomButton';

const LoginPage = () => {
  const navigateToCreateUser = () => {
    navigate('/createUser');
  };
  return (
    <div>
      <Row justify="center">
        <Col>
          <p>เข้าสู่ระบบ</p>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <LoginCard />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <CustomButton onClick={navigateToCreateUser}>สร้างบัญชีผู้ใช้</CustomButton>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
