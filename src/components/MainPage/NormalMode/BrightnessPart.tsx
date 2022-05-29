import React from 'react';
import { Typography, Slider } from 'antd';
import useUpdateBrightness from '../../../hooks/useUpdateBrightness';

const { Title } = Typography;

interface Props {
  handleDataChange: (mode: string, data: string | number) => void;
}

const BrightnessPart: React.FC<Props> = ({ handleDataChange }: Props) => {
  const [brightness, handleBrightnessChange] = useUpdateBrightness(handleDataChange);

  return (
    <>
      <Title
        level={4}
        style={{
          marginTop: '0.5rem',
          textAlign: 'left',
          width: '100%',
        }}
      >
        Brightness
      </Title>
      <div
        style={{
          width: '100%',
        }}
      >
        <Slider
          value={brightness}
          style={{ width: '100%' }}
          onChange={handleBrightnessChange}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}
        >
          <Typography style={{ fontSize: '16px' }}>Dim</Typography>
          <Typography style={{ fontSize: '16px' }}>Bright</Typography>
        </div>
      </div>
    </>
  );
};
export default React.memo(BrightnessPart);
