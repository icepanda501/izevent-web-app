/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { selectUser } from '../../redux/selects';
import { logoutUser } from '../../redux/actions';

const Sidebar = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  const logout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <Drawer
      title={(
        <div>
          <Avatar size="large" icon={<UserOutlined />} />
          {' '}
          {user && user.username}
        </div>
    )}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <div className="" onClick={logout}>LOGOUT</div>
    </Drawer>
  );
};

export default Sidebar;
