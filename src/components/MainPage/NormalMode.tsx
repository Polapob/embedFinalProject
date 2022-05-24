import { Col, Slider, Typography } from "antd";
import { HexColorPicker } from "react-colorful";
import {
  MouseEventHandler,
  memo,
  Dispatch,
  SetStateAction,
} from "react";
import "./NormalMode.css";

const { Title } = Typography;

const NormalMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}> = ({ disabled, handleOnClick, selectedState, color, setColor }) => {
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
        padding: "1.5rem 2rem",
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
      <Title
        level={4}
        style={{
          marginTop: "0.5rem",
          textAlign: "left",
          width: "100%",
        }}
      >
        Brightness
      </Title>
      <div
        style={{
          width: "100%",
        }}
      >
        <Slider style={{ width: "100%" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography style={{ fontSize: "16px" }}>Dim</Typography>
          <Typography style={{ fontSize: "16px" }}>Bright</Typography>
        </div>
      </div>
      <Title
        level={4}
        style={{
          paddingTop: "1rem",
          width: "100%",
        }}
      >
        Color
      </Title>
      <div>
        <HexColorPicker color={color} onChange={setColor} />
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            marginTop: "0.75rem",
            gap: "1rem",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Hex
          </Typography>
          <div
            style={{
              backgroundColor: "rgba(240, 242, 245, 1)",
              marginBottom:"0.75rem",
              width: "100%",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
            }}
          >
            {color}
          </div>
        </div>
      </div>
    </Col>
  );
};
export default memo(NormalMode);
