import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { selectPartyList } from '../../redux/selects';
import { loadPartyList } from '../../redux/actions';
import PartyCard from '../../components/PartyCard';

const PartyListPage = () => {
  const dispatch = useDispatch();
  const { data: partyList, loading: partyListLoading } = useSelector(selectPartyList);

  useEffect(() => {
    dispatch(loadPartyList());
  }, []);

  return (
    <div>
      <Row justify="center">
        <Col>
          <p>ปาร์ตี้ทั้งหมด</p>
        </Col>
      </Row>
      <Row>
        { partyList.map(party => <PartyCard party={party} />) }
      </Row>
    </div>
  );
};

export default PartyListPage;
