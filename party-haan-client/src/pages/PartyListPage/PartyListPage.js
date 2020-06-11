import React from 'react';
import { Row, Col } from 'antd';
import PartyCard from '../../components/PartyCard';

const partyList = [
  {
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'ปาร์ตี้สำหรับกลุ่มคนชอบ anime ถ้าคุณสนใจจะรออะไร join เลย !!',
    detail: 'anime party',
    joiner: ['1', '2', '3', '4', '5'],
    maxJoiner: 10,
    owner: 'ownerId',
  },
  {
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'ปาร์ตี้สำหรับกลุ่มคนชอบ anime ถ้าคุณสนใจจะรออะไร join เลย !!',
    detail: 'anime party',
    joiner: ['1', '2', '3', '4', '5'],
    maxJoiner: 10,
    owner: 'ownerId',
  },
  {
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'ปาร์ตี้สำหรับกลุ่มคนชอบ anime ถ้าคุณสนใจจะรออะไร join เลย !!',
    detail: 'anime party',
    joiner: ['1', '2', '3', '4', '5'],
    maxJoiner: 10,
    owner: 'ownerId',
  },
  {
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'ปาร์ตี้สำหรับกลุ่มคนชอบ anime ถ้าคุณสนใจจะรออะไร join เลย !!',
    detail: 'anime party',
    joiner: ['1', '2', '3', '4', '5'],
    maxJoiner: 10,
    owner: 'ownerId',
  },
  {
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'ปาร์ตี้สำหรับกลุ่มคนชอบ anime ถ้าคุณสนใจจะรออะไร join เลย !!',
    detail: 'anime party',
    joiner: ['1', '2', '3', '4', '5'],
    maxJoiner: 10,
    owner: 'ownerId',
  },
];

const PartyListPage = () => (
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

export default PartyListPage;
