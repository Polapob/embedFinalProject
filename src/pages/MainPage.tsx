import "antd/dist/antd.min.css";
import "./MainPage.css";
import { Row } from "antd";
import Header from "../components/MainPage/Header";
import NormalMode from "../components/MainPage/NormalMode";
import AutoMode from "../components/MainPage/AutoMode";
import { useState, MouseEventHandler, useCallback, useEffect } from "react";
import { SwitchClickEventHandler } from "antd/lib/switch";

const MainPage = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<number>(0);
  const [counter, setCounter] = useState<number>(3);
  const [startCountDown, setStartCountDown] = useState<boolean>(false);

  const toggleDisabled: SwitchClickEventHandler = () => {
    setDisabled((prevValue) => !prevValue);
    if (disabled) {
      setStartCountDown(true);
    }
  };
  
  useEffect(() => {
    if (startCountDown && counter > 0) {
      setStartCountDown(true);
      const timer = setTimeout(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          }
          return prevCounter;
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else if (startCountDown) {
      setStartCountDown(false);
      setCounter(3);
    }
  }, [selectedState, counter, startCountDown]);

  const handleNormalModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled && !startCountDown) {
        setSelectedState(0);
        setStartCountDown(true);
      }
    }, [disabled, startCountDown]);
  console.log(counter, startCountDown);
  const handleAutoModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled && !startCountDown) {
        setSelectedState(1);
        setStartCountDown(true);
      }
    }, [disabled, startCountDown]);

  return (
    <div className="mainBackground">
      <Header toggleDisabled={toggleDisabled} />
      <Row
        justify="space-between"
        style={{ position: "relative", alignItems: "flex-start" }}
      >
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
