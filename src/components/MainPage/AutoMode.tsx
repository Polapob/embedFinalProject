import { Col, Typography } from "antd";
import { MouseEventHandler, memo } from "react";
import BrightnessPart from "./AutoMode/BrightnessPart";
import ProjectLogo from "./AutoMode/ProjectLogo";
import ColorPart from "./AutoMode/ColorPart";

const { Title } = Typography;

const AutoMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
}> = ({ disabled, selectedState, handleOnClick }) => {
  return (
    <Col span={11} style={{ width: "450px" }}>
      <div
        onClick={handleOnClick}
        style={{
          border: `${
            !disabled && selectedState === 1
              ? "5px solid #8000FF"
              : "5px solid rgb(255,255,255)"
          } `,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          padding: "1.5rem 2rem",
          alignItems: "center",
          background: "rgb(255,255,255)",
          position: "relative",
          opacity: disabled ? 0.4 : selectedState === 1 ? 1 : 0.6,
        }}
      >
        <Title
          level={2}
          style={{ color: "rgba(128, 0, 255, 1)", marginBottom: "0rem" }}
        >
          Auto Mode
        </Title>
        <Title level={4} style={{ textAlign: "center", marginTop: "0rem" }}>
          Automatically adjust upon currently outside theme
        </Title>
        <BrightnessPart />
        <ColorPart />
      </div>
      <ProjectLogo />
    </Col>
  );
};
export default memo(AutoMode);
