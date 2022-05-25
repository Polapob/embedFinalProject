import "antd/dist/antd.min.css";
import "./MainPage.css";
import { Row} from "antd";
import Header from "../components/MainPage/Header";
import NormalMode from "../components/MainPage/NormalMode";
import AutoMode from "../components/MainPage/AutoMode";
import { useState, MouseEventHandler, useCallback } from "react";
import { SwitchClickEventHandler } from "antd/lib/switch";

const MainPage = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<number>(0);

  const toggleDisabled: SwitchClickEventHandler = () => {
    setDisabled((prevValue) => !prevValue);
  };

  const handleNormalModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled) {
        setSelectedState(0);
      }
    }, [disabled]);
  const handleAutoModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled) {
        setSelectedState(1);
      }
    }, [disabled]);

  return (
    <div className="mainBackground">
      <Header toggleDisabled={toggleDisabled} />
      <Row justify="space-between" style={{ position: "relative",alignItems:"flex-start" }}>
        <NormalMode
          disabled={disabled}
          selectedState={selectedState}
          handleOnClick={handleNormalModeClick}
        />
        <AutoMode
          disabled={disabled}
          selectedState={selectedState}
          handleOnClick={handleAutoModeClick}
        />
      </Row>
    </div>
  );
};
export default MainPage;
