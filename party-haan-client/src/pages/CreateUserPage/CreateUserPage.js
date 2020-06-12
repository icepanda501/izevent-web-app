import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { selectUser } from '../../redux/selects';
import CreateUserCard from '../../components/CreateUserCard';
import { createUser } from '../../redux/actions';

import './CreateUserPage.css';

const CreateUserPage = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  if (user) {
    navigate('/');
  }
  const onFinish = async values => {
    dispatch(createUser(values));
  };
  return (
    <div>
      <Row justify="center">
        <Col>
          <div className="create-user-page-title"><p>สร้างบัญชีผู้ใช้</p></div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <CreateUserCard onFinish={onFinish} />
        </Col>
      </Row>
    </div>
  );
};

export default CreateUserPage;
