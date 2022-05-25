import { Col, Slider, Typography } from "antd";
import { Fragment, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { MouseEventHandler, memo, Dispatch, SetStateAction } from "react";
import "./NormalMode.css";
import BrightnessPart from "./NormalMode/BrightnessPart";
import ColorPart from "./NormalMode/ColorPart";

const { Title } = Typography;

const NormalMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
}> = ({ disabled, handleOnClick, selectedState }) => {
  console.log("re-render!");
  return (
    <Col
      span={11}
      style={{
        border: `${
          !disabled && selectedState === 0
            ? "5px solid #8000FF"
            : "5px solid rgb(255,255,255)"
        } `,
        width: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        padding: "1.25rem 2rem",
        alignItems: "center",
        background: "rgb(255,255,255)",
        opacity: disabled ? 0.4 : selectedState === 0 ? 1 : 0.6,
        boxShadow: " 0px 0px 20px 1px rgba(0, 0, 0, 0.1)",
      }}
      onClick={handleOnClick}
    >
      <Title
        level={2}
        style={{ color: "rgba(128, 0, 255, 1)", marginBottom: "0rem" }}
      >
        Normal Mode
      </Title>
      <Title level={4} style={{ marginTop: "0rem" }}>
        Manually adjust by yourself
      </Title>
      <BrightnessPart />
      <ColorPart />
    </Col>
  );
};
export default memo(NormalMode);
