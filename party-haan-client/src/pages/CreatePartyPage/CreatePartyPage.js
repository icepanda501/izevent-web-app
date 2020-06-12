import React from 'react';
import { navigate } from '@reach/router';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selects';
import { createPartyHandler } from '../../api/apiHandler';
import CreatePartyCard from '../../components/CreatePartyCard';

const CreatePartyPage = () => {
  const { data: user } = useSelector(selectUser);
  if (!user) {
    navigate('/login');
  }

  const onFinish = async values => {
    const result = await createPartyHandler(user.token, {
      ...values,
      joinerList: [user.id],
      owner: user.id,
    });
    if (result.status === 200) {
      navigate('/');
    }
  };

  return (
    <div>
      <Row justify="center">
        <Col>
          <div><p>สร้างปาร์ตี้</p></div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span="20">
          <CreatePartyCard onFinish={onFinish} />
        </Col>
      </Row>
    </div>
  );
};

export default CreatePartyPage;
