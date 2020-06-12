import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { selectPartyList, selectUser } from '../../redux/selects';
import { loadPartyList } from '../../redux/actions';
import PartyCard from '../../components/PartyCard';
import PlusButton from '../../components/PlusButton';
import Topbar from '../../components/Topbar';

import './PartyListPage.css';

const PartyListPage = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  if (!user) {
    navigate('/login');
  }
  const { data: partyList, loading: partyListLoading } = useSelector(selectPartyList);

  useEffect(() => {
    dispatch(loadPartyList());
  }, []);

  const goToCreateParty = () => {
    navigate('/createParty');
  };

  return (
    <div>
      <Row>
        <Col span="24">
          <Topbar />
        </Col>
      </Row>
      <Row>
        { partyList.map(party => <PartyCard key={party.id} party={party} />) }
        <div className="create-party-button">
          <PlusButton onClick={goToCreateParty} />
        </div>
      </Row>
    </div>
  );
};

export default PartyListPage;
