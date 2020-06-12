import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar';
import './Topbar.css';

const Topbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="topbar-wrapper">
        <div className="topbar-title">Party Haan</div>
        <div className="topbar-avatar-group">
          <Avatar size="large" onClick={showDrawer} icon={<UserOutlined />} />
        </div>
      </div>
      <Sidebar visible={visible} onClose={onClose} />
    </>
  );
};

export default Topbar;
