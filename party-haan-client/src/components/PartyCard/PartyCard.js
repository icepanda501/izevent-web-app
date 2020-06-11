import React from 'react';
import { Card, Divider } from 'antd';
import CustomButton from '../CustomButton';

import './PartyCard.css';

const PartyCard = ({ party }) => {
  const { title, image, maxJoiner, joiner } = party;
  return (
    <div className="party-card-wrapper">
      <Card
        hoverable
        style={{ width: 150 }}
        cover={<img alt="example" height="150" src={image} />}
        bodyStyle={{
          padding: '10px',
        }}
      >
        <div className="party-card-body">{title}</div>
        <Divider />
        <div className="party-card-footer">
          <div className="party-card-joiner-number">
            จำนวน
            {' '}
            {joiner.length}
            /
            {maxJoiner}
            {' '}
            คน
          </div>
          <CustomButton className="party-card-join-button" shape="round" size="sm">เข้าร่วมปาร์ตี้</CustomButton>
        </div>
      </Card>
    </div>
  );
};

export default PartyCard;
