import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const PlusButton = ({ className, onClick, size = 'large', height = '100px', width = '100px', iconSize = '44px' }) => (
  <Button
    className={className}
    onClick={onClick}
    shape="circle"
    icon={<PlusOutlined style={{ fontSize: iconSize }} />}
    size={size}
    style={{
      height,
      width,
    }}
  />
);

export default PlusButton;
