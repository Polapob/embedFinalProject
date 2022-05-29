import { Switch, Typography } from 'antd';
import React from 'react';
import { SwitchClickEventHandler } from 'antd/lib/switch';
import './Header.css';

const { Title } = Typography;

interface Props {
  toggleDisabled: SwitchClickEventHandler;
}
const Header: React.FC<Props> = ({ toggleDisabled }: Props) => (
  <div
    style={{
      marginBottom: '2rem',
      padding: '0rem 3rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title
        className="TitleHeader"
        level={1}
        style={{
          fontSize: '64px',
          color: '#8000FF',
          marginBottom: '0px',
          marginRight: '1.25rem',
        }}
      >
        Smart LED
      </Title>
      <Switch className="verticalSwitch" onClick={toggleDisabled} />
    </div>

    <Typography
      style={{
        fontSize: '20px',
        fontWeight: '500',
      }}
    >
      Bright your productivity up!
    </Typography>
  </div>
);
export default React.memo(Header);
