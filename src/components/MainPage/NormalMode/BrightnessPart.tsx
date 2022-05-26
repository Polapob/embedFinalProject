import { useState, memo, Fragment, useEffect } from "react";
import { Typography, Slider } from "antd";

const { Title } = Typography;

const BrightnessPart: React.FC<{
  handleDataChange: (mode: string, data: string | number) => void;
}> = ({ handleDataChange }) => {
  const [brightness, setBrightness] = useState<number>(50);
  const handleBrightnessChange = (newValue: number) => {
    setBrightness(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDataChange("brightness", brightness);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [brightness, handleDataChange]);

  return (
    <Fragment>
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
        <Slider
          value={brightness}
          style={{ width: "100%" }}
          onChange={handleBrightnessChange}
        />
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
    </Fragment>
  );
};
export default memo(BrightnessPart);
