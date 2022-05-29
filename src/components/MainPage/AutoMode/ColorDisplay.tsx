import React from 'react';
import { Col, Typography } from 'antd';
import './ColorDisplay.css';

interface Props {
  color: string;
}
const ColorDisplay: React.FC<Props> = ({ color }: Props) => (
  <Col
    span={21}
    style={{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <div
      className="ColorDisplayContainer"
      style={{
        backgroundColor: color,
        height: '60px',
        borderRadius: '0.25rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: '1rem',
        marginBottom: '0.5rem',
      }}
    >
      <Typography
        style={{ fontSize: '32px', color: 'white', fontWeight: 'bold' }}
        className="ColorDisplayCode"
      >
        {color}
      </Typography>
    </div>
  </Col>
);
export default ColorDisplay;
