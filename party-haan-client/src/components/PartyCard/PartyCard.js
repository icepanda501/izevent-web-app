import React from 'react';
import { Card, Divider } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../CustomButton';
import { loadPartyList } from '../../redux/actions';

import { selectUser } from '../../redux/selects';
import { joinPartyHandler, leavePartyHandler, deletePartyHandler } from '../../api/apiHandler';

import './PartyCard.css';

const PartyCard = ({ party }) => {
  const { id, title, image, maxJoiner, joinerList, owner } = party;
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  const joinParty = async () => {
    try {
      const result = await joinPartyHandler(user.token, id);
      if (result.status === 200) {
        dispatch(loadPartyList());
      }
    } catch (error) {
      alert(error);
    }
  };

  const leaveParty = async () => {
    try {
      const result = await leavePartyHandler(user.token, id);
      if (result.status === 200) {
        dispatch(loadPartyList());
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteParty = async () => {
    try {
      const result = await deletePartyHandler(user.token, id);
      if (result.status === 200) {
        dispatch(loadPartyList());
      }
    } catch (error) {
      alert(error);
    }
  };

  const renderButton = () => {
    if (joinerList.includes(user && user.id)) {
      return <CustomButton className="party-card-button leave" onClick={leaveParty} size="sm">ออกจากปาร์ตี้</CustomButton>;
    } if (party.joinerList.length >= party.maxJoiner) {
      return <CustomButton className="party-card-button" size="sm">ปาร์ตี้เต็มแล้ว</CustomButton>;
    }
    return <CustomButton className="party-card-button join" onClick={joinParty} size="sm">เข้าร่วมปาร์ตี้</CustomButton>;
  };

  return (
    <div className="party-card-wrapper">
      <Card
        hoverable
        style={{ width: 150 }}
        cover={(
          <>
            { user && owner === user.id && <CloseCircleOutlined onClick={deleteParty} className="party-card-delete" /> }
            <img alt="example" height="150" src={image} />
          </>
        )}
        bodyStyle={{
          padding: '5px',
        }}
      >
        <div className="party-card-body">{title}</div>
        <Divider />
        <div className="party-card-footer">
          <div className="party-card-joiner-number">
            จำนวน
            {' '}
            {joinerList.length}
            /
            {maxJoiner}
            {' '}
            คน
          </div>
          { renderButton() }
        </div>
      </Card>
    </div>
  );
};

export default PartyCard;
