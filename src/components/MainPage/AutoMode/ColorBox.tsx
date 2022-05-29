import { Col, Typography } from 'antd';
import React from 'react';
import './ColorBox.css';

interface Props {
  colorText: string;
  colorCode: string;
  borderColor: string;
}

const ColorBox: React.FC<Props> = ({
  colorText,
  colorCode,
  borderColor,
}: Props) => (
  <Col
    span={7}
    style={{
      border: `2px solid ${borderColor}`,
      borderRadius: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    className="ColorBoxContainer"
  >
    <Typography
      className="ColorBoxText"
      style={{ fontWeight: 'bold', fontSize: '20px' }}
    >
      {colorText}
    </Typography>
    <Typography
      className="ColorBoxText"
      style={{ fontWeight: 'bold', fontSize: '32px' }}
    >
      {colorCode}
    </Typography>
  </Col>
);
export default ColorBox;
