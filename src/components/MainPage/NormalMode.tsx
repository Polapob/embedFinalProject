import { Button, Col, Typography } from "antd";
import { MouseEventHandler, memo } from "react";
import "./NormalMode.css";
import BrightnessPart from "./NormalMode/BrightnessPart";
import ColorPart from "./NormalMode/ColorPart";

const { Title } = Typography;

const NormalMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
  handleDataChange: (mode: string, data: string | number) => void;
  handleOnSave: MouseEventHandler<HTMLButtonElement>;
}> = ({
  disabled,
  handleOnClick,
  selectedState,
  handleDataChange,
  handleOnSave,
}) => {
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
      <BrightnessPart handleDataChange={handleDataChange} />
      <ColorPart handleDataChange={handleDataChange} />
      <Button
        type="primary"
        size="large"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0.5rem 0rem",
          backgroundColor: "rgba(128, 0, 255, 1)",
          width: "80%",
        }}
        onClick={handleOnSave}
      >
        Save Setting
      </Button>
    </Col>
  );
};
export default memo(NormalMode);
