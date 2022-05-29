import React from 'react';
import { Typography, Row } from 'antd';
import ColorBox from './ColorBox';
import ColorDisplay from './ColorDisplay';
import './ColorPart.css';

const { Title } = Typography;

const preprocessColor = (colorHex: string) => (colorHex?.length === 7
  ? {
    red: colorHex.slice(1, 3),
    green: colorHex.slice(3, 5),
    blue: colorHex.slice(5),
  }
  : { red: '80', green: '00', blue: 'ff' });

interface Props {
  color: string;
}
const ColorPart: React.FC<Props> = ({ color }: Props) => {
  const { red, green, blue } = preprocessColor(color);
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
      <Row
        className="ColorPartGrid"
        justify="center"
        style={{ width: '90%', columnGap: '0.5rem' }}
      >
        <ColorBox
          colorText="RED"
          borderColor="rgba(255, 0, 0, 1)"
          colorCode={red}
        />
        <ColorBox
          colorText="GREEN"
          borderColor="rgba(0, 255, 0, 1)"
          colorCode={green}
        />
        <ColorBox
          colorText="BLUE"
          borderColor="rgba(0, 0, 255, 1)"
          colorCode={blue}
        />
        <ColorDisplay color={color || '#8000ff'} />
      </Row>
    </>
  );
};
export default React.memo(ColorPart);
