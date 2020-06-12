import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import { Row, Col } from 'antd';
import LoginCard from '../../components/LoginCard';
import CustomButton from '../../components/CustomButton';
import { loginUser } from '../../redux/actions';
import { selectUser } from '../../redux/selects';

import './LoginPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { data: user, error } = useSelector(selectUser);
  if (user) {
    navigate('/');
  }
  const navigateToCreateUser = () => {
    navigate('/createUser');
  };
  const onLogin = values => {
    dispatch(loginUser(values));
  };
  return (
    <div>
      <Row justify="center">
        <Col>
          <div className="login-page-title"><p>เข้าสู่ระบบ</p></div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <LoginCard onLogin={onLogin} error={error} />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <CustomButton className="login-page-create-user-button" onClick={navigateToCreateUser}>สร้างบัญชีผู้ใช้</CustomButton>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
