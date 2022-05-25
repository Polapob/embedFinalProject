import { Fragment } from "react";
import ColorBox from "./ColorBox";
import { Typography,Row } from "antd";
import ColorDisplay from "./ColorDisplay";

const {Title} = Typography;

const ColorPart = () => {
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
      <Row justify="center" style={{ width: "90%" }}>
        <ColorBox
          colorText="RED"
          borderColor="rgba(255, 0, 0, 1)"
          colorCode="80"
        ></ColorBox>
        <ColorBox
          colorText="GREEN"
          borderColor="rgba(0, 255, 0, 1)"
          colorCode="00"
        />
        <ColorBox
          colorText="BLUE"
          borderColor="rgba(0, 0, 255, 1)"
          colorCode="FF"
        />
        <ColorDisplay />
      </Row>
    </Fragment>
  );
};
export default ColorPart;
