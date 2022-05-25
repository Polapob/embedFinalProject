import "antd/dist/antd.min.css";
import "./MainPage.css";
import { Row, Modal, Typography } from "antd";
import Header from "../components/MainPage/Header";
import NormalMode from "../components/MainPage/NormalMode";
import AutoMode from "../components/MainPage/AutoMode";
import { useState, MouseEventHandler, useCallback, useEffect } from "react";
import { SwitchClickEventHandler } from "antd/lib/switch";

const MainPage = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<{
    selectedState: number;
    counter: number;
    startCountDown: boolean;
  }>({ selectedState: 0, counter: 5, startCountDown: false });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const toggleDisabled: SwitchClickEventHandler = () => {
    if (disabled) {
      setSelectedState((prevState) => ({
        ...prevState,
        selectedState: 0,
        startCountDown: true,
        counter: 5,
      }));
    }
    setDisabled(!disabled);
  };

  useEffect(() => {
    if (selectedState.startCountDown && selectedState.counter > 0) {
      if (!selectedState.startCountDown) {
        setSelectedState((prevState) => ({
          ...prevState,
          startCountDown: true,
        }));
      }
      const timer = setTimeout(() => {
        setSelectedState((prevState) => {
          if (prevState.counter > 0) {
            return { ...prevState, counter: prevState.counter - 1 };
          }
          return prevState;
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else if (selectedState.startCountDown) {
      setOpenModal(false);
      setSelectedState((prevState) => ({
        ...prevState,
        counter: 5,
        startCountDown: false,
      }));
    }
  }, [selectedState.counter, selectedState.startCountDown]);

  const handleNormalModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled && !selectedState.startCountDown) {
        setSelectedState((prevState) =>
          prevState.selectedState !== 0
            ? { ...prevState, selectedState: 0, startCountDown: true }
            : { ...prevState, startCountDown: false }
        );
      } else if (!disabled) {
        setOpenModal(true);
      }
    }, [disabled, selectedState.startCountDown]);

  const handleAutoModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (!disabled && !selectedState.startCountDown) {
        setSelectedState((prevState) =>
          prevState.selectedState !== 1
            ? { ...prevState, selectedState: 1, startCountDown: true }
            : { ...prevState, startCountDown: false }
        );
      } else if (!disabled) {
        setOpenModal(true);
      }
    }, [disabled, selectedState.startCountDown]);
  return (
    <div className="mainBackground">
      <Header toggleDisabled={toggleDisabled} />
      <Row
        justify="space-between"
        style={{ position: "relative", alignItems: "flex-start" }}
      >
        <NormalMode
          disabled={disabled}
          selectedState={selectedState.selectedState}
          handleOnClick={handleNormalModeClick}
        />
        <AutoMode
          disabled={disabled}
          selectedState={selectedState.selectedState}
          handleOnClick={handleAutoModeClick}
        />
      </Row>
      <Modal
        className="removeCancelButton"
        title="Warning"
        visible={openModal}
        onOk={closeModal}
        closable={false}
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
          You must Wait for {selectedState.counter} second to change Mode.
        </Typography>
      </Modal>
    </div>
  );
};
export default MainPage;
