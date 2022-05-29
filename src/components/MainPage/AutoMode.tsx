/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable import/no-cycle */
import { Col, Typography } from 'antd';
import React from 'react';
import BrightnessPart from './AutoMode/BrightnessPart';
import ProjectLogo from './AutoMode/ProjectLogo';
import ColorPart from './AutoMode/ColorPart';
import './AutoMode.css';
import useFetchAutoModeData from '../../hooks/useFetchAutoModeData';

const { Title } = Typography;

export interface ModeDataInterface {
  mode: string;
  brightness: number;
  color: string;
}

interface Props {
  disabled: boolean;
  selectedState: number;
  handleOnClick: React.MouseEventHandler<HTMLDivElement>;
}

const AutoMode = ({ disabled, selectedState, handleOnClick }: Props) => {
  const autoModedata = useFetchAutoModeData(disabled, selectedState);
  return (
    <Col className="AutoModeGrid" xs={21} sm={21} md={11}>
      <div
        role="button"
        className="AutoModeContainer"
        onClick={handleOnClick}
        style={{
          border: `${
            !disabled && selectedState === 1
              ? '5px solid #8000FF'
              : '5px solid rgb(255,255,255)'
          } `,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          padding: '0rem 2rem',
          alignItems: 'center',
          background: 'rgb(255,255,255)',
          paddingTop: '1.5rem',
          paddingBottom: '4.5rem',
          // eslint-disable-next-line no-nested-ternary
          opacity: disabled ? 0.4 : selectedState === 1 ? 1 : 0.6,
          borderRadius: '0.75rem',
        }}
      >
        <Title
          className="AutoModeTitle"
          level={2}
          style={{ color: 'rgba(128, 0, 255, 1)', marginBottom: '0rem' }}
        >
          Auto Mode
        </Title>
        <Title
          className="AutoModeDescription"
          level={4}
          style={{ textAlign: 'center', marginTop: '0rem' }}
        >
          Automatically adjust upon currently outside theme
        </Title>
        <BrightnessPart brightness={autoModedata.brightness} />
        <ColorPart color={autoModedata.color} />
      </div>
      <ProjectLogo />
    </Col>
  );
};
export default React.memo(AutoMode);
