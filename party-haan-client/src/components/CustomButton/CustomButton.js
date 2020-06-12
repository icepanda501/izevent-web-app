import React from 'react';
import { Button } from 'antd';

import './CustomButton.css';

const CustomButton = (props) => <Button className="custom-button" shape="round" {...props} />;

export default CustomButton;
