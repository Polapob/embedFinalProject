import React from 'react';
import { Typography } from 'antd';
import { HexColorPicker } from 'react-colorful';
import useUpdateColor from '../../../hooks/useUpdateColor';

const { Title } = Typography;

interface Props {
  handleDataChange: (mode: string, data: string | number) => void;
}

const ColorPart: React.FC<Props> = ({ handleDataChange }: Props) => {
  const [color, setColor] = useUpdateColor(handleDataChange);
  return (
    <>
      <Title
        level={4}
        style={{
          paddingTop: '1rem',
          width: '100%',
        }}
      >
        Color
      </Title>
      <HexColorPicker
        color={color}
        onChange={setColor}
        style={{ width: '75%' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          margin: '0.75rem 0rem',
          gap: '1rem',
        }}
      >
        <Typography
          style={{
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Hex
        </Typography>
        <div
          style={{
            backgroundColor: 'rgba(240, 242, 245, 1)',
            width: '100%',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem',
          }}
        >
          {color}
        </div>
      </div>
    </>
  );
};
export default React.memo(ColorPart);
