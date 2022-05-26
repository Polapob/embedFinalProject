import { Fragment,memo } from "react";
import ColorBox from "./ColorBox";
import { Typography, Row } from "antd";
import ColorDisplay from "./ColorDisplay";
import "./ColorPart.css";

const { Title } = Typography;

const preprocessColor = (colorHex: string) =>
  colorHex?.length === 7
    ? {
        red: colorHex.slice(1, 3),
        green: colorHex.slice(3, 5),
        blue: colorHex.slice(5),
      }
    : { red: "80", blue: "00", green: "ff" };

const ColorPart: React.FC<{ color: string }> = ({ color }) => {
  const { red, green, blue } = preprocessColor(color);
  return (
    <Fragment>
      <Title
        level={4}
        style={{
          paddingTop: "1rem",
          width: "100%",
        }}
      >
        Color
      </Title>
      <Row className="ColorPartGrid" justify="center" style={{ width: "90%",columnGap:"0.5rem" }}>
        <ColorBox
          colorText="RED"
          borderColor="rgba(255, 0, 0, 1)"
          colorCode={red}
        ></ColorBox>
        <ColorBox
          colorText="GREEN"
          borderColor="rgba(0, 255, 0, 1)"
          colorCode={blue}
        />
        <ColorBox
          colorText="BLUE"
          borderColor="rgba(0, 0, 255, 1)"
          colorCode={green}
        />
        <ColorDisplay color={ color || "#8000ff"} />
      </Row>
    </Fragment>
  );
};
export default memo(ColorPart);
