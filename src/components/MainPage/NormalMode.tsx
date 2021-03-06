import { Button, Col, Typography } from 'antd';
import React from 'react';
import './NormalMode.css';
import BrightnessPart from './NormalMode/BrightnessPart';
import ColorPart from './NormalMode/ColorPart';

const { Title } = Typography;

interface Props {
  disabled: boolean;
  selectedState: number;
  handleOnClick: React.MouseEventHandler<HTMLDivElement>;
  handleDataChange: (mode: string, data: string | number) => void;
  handleOnSave: React.MouseEventHandler<HTMLButtonElement>;
}

const NormalMode: React.FC<Props> = ({
  disabled,
  handleOnClick,
  selectedState,
  handleDataChange,
  handleOnSave,
}: Props) => (
  <Col
    xs={21}
    sm={21}
    md={11}
    style={{
      border: `${
        !disabled && selectedState === 0
          ? '5px solid #8000FF'
          : '5px solid rgb(255,255,255)'
      } `,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      padding: '1.25rem 2rem',
      alignItems: 'center',
      background: 'rgb(255,255,255)',
      // eslint-disable-next-line no-nested-ternary
      opacity: disabled ? 0.4 : selectedState === 0 ? 1 : 0.6,
      boxShadow: ' 0px 0px 20px 1px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.75rem',
    }}
    onClick={handleOnClick}
  >
    <Title
      className="NormalModeTitle"
      level={2}
      style={{ color: 'rgba(128, 0, 255, 1)', marginBottom: '0rem' }}
    >
      Normal Mode
    </Title>
    <Title
      className="NormalModeDescription"
      level={4}
      style={{ marginTop: '0rem' }}
    >
      Manually adjust by yourself
    </Title>
    <BrightnessPart handleDataChange={handleDataChange} />
    <ColorPart handleDataChange={handleDataChange} />
    <Button
      type="primary"
      size="large"
      disabled={disabled}
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5rem 0rem',
        backgroundColor: 'rgba(128, 0, 255, 1)',
        width: '80%',
      }}
      onClick={handleOnSave}
    >
      Save Setting
    </Button>
  </Col>
);
export default React.memo(NormalMode);
