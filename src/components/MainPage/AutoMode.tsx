import { Col, Typography } from "antd";
import {
  MouseEventHandler,
  memo,
  useState,
  useEffect,
  useCallback,
} from "react";
import BrightnessPart from "./AutoMode/BrightnessPart";
import ProjectLogo from "./AutoMode/ProjectLogo";
import ColorPart from "./AutoMode/ColorPart";
import FetchAutoModedata from "../../utils/FetchAutoModeData";
import { clearInterval } from "timers";

const { Title } = Typography;

export interface ModeDataInterface {
  mode: string;
  brightness: number;
  color: string;
}

const AutoMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
}> = ({ disabled, selectedState, handleOnClick }) => {
  const [counter, setCounter] = useState<number>(0);
  const [autoModedata, setAutomodeData] = useState<ModeDataInterface>(
    {} as ModeDataInterface
  );
  const fetchAutoModeData = useCallback(async () => {
    if (!disabled && selectedState === 1) {
      const { data, errorMessage } = await FetchAutoModedata();
      setAutomodeData(data);
    }
  }, [disabled, selectedState]);

  useEffect(() => {
    if (!disabled && selectedState === 1 && counter === 0) {
      fetchAutoModeData();
      setCounter(10);
    } else if (!disabled && selectedState === 1) {
      const timer = setTimeout(() => {
        //console.log("run-this!");
        setCounter(0);
      }, 10000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setCounter(0);
    }
  }, [disabled, selectedState, counter, fetchAutoModeData]);
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
        <BrightnessPart brightness={autoModedata.brightness} />
        <ColorPart color={autoModedata.color} />
      </div>
      <ProjectLogo />
    </Col>
  );
};
export default memo(AutoMode);
