import "antd/dist/antd.min.css";
import "./MainPage.css";
import { Row, Modal, Typography, notification } from "antd";
import Header from "../components/MainPage/Header";
import NormalMode from "../components/MainPage/NormalMode";
import AutoMode, { ModeDataInterface } from "../components/MainPage/AutoMode";
import { useState, MouseEventHandler, useCallback, useEffect } from "react";
import { SwitchClickEventHandler } from "antd/lib/switch";
import SwitchMode from "../utils/SwitchMode";
import { Notification } from "../components/MainPage/Notification";





const MainPage = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [normalData, setNormalData] = useState<ModeDataInterface>({
    mode: "normal",
    color: "#b32aa9",
    brightness: 50,
  });

  const handleDataChange = useCallback(
    (mode: string, data: string | number) => {
      if (mode === "color" && typeof data === "string") {
        setNormalData((prevData) => ({ ...prevData, color: data }));
      } else if (mode === "brightness" && typeof data === "number") {
        setNormalData((prevData) => ({ ...prevData, brightness: data }));
      }
    },
    []
  );

  const handleOnSave: MouseEventHandler<HTMLButtonElement> =
    useCallback(async () => {
      const { errorMessage } = await SwitchMode(normalData);
      if (errorMessage !== "") {
        Notification(
          "Error happened in Database Please try again later!"
        );
      }
    }, [normalData]);

  const [selectedState, setSelectedState] = useState<{
    selectedState: number;
    counter: number;
    startCountDown: boolean;
  }>({ selectedState: 0, counter: 5, startCountDown: false });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const toggleDisabled: SwitchClickEventHandler = useCallback(async () => {
    if (disabled) {
      setDisabled(!disabled);
      setSelectedState((prevState) => ({
        ...prevState,
        selectedState: 0,
        startCountDown: true,
        counter: 5,
      }));
    } else {
      setDisabled(!disabled);
      const { errorMessage } = await SwitchMode({
        mode: "off",
        brightness: 0,
        color: "#000000",
      });
      if (errorMessage !== "") {
        Notification(
          "Error happened in Database Please try again later!"
        );
      }
    }
  }, [disabled]);

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
    useCallback(async () => {
      if (!disabled && !selectedState.startCountDown) {
        setSelectedState((prevState) => ({
          ...prevState,
          selectedState: 0,
          startCountDown: prevState.selectedState !== 0,
        }));
      } else if (!disabled && selectedState.selectedState === 1) {
        setOpenModal(true);
      }
    }, [disabled, selectedState.startCountDown, selectedState.selectedState]);

  const handleAutoModeClick: MouseEventHandler<HTMLDivElement> =
    useCallback(async () => {
      if (!disabled && !selectedState.startCountDown) {
        setSelectedState((prevState) => ({
          ...prevState,
          selectedState: 1,
          startCountDown: prevState.selectedState !== 1,
        }));

        if (selectedState.selectedState !== 1) {
          const { errorMessage } = await SwitchMode({
            brightness: 20,
            mode: "auto",
            color: "#FF00FF",
          });
          if (errorMessage !== "") {
            Notification(
              "Error happened in Database Please try again later!"
            );
          }
        }
      } else if (!disabled && selectedState.selectedState === 0) {
        setOpenModal(true);
      }
    }, [disabled, selectedState.startCountDown, selectedState.selectedState]);

  return (
    <div className="mainBackground">
      <Header toggleDisabled={toggleDisabled} />
      <Row
        className="MainGrid"
        justify="space-between"
        style={{ position: "relative", alignItems: "flex-start" }}
      >
        <NormalMode
          disabled={disabled}
          selectedState={selectedState.selectedState}
          handleOnClick={handleNormalModeClick}
          handleDataChange={handleDataChange}
          handleOnSave={handleOnSave}
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
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
        centered
      >
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
          You must Wait for {selectedState.counter} second to change Mode.
        </Typography>
      </Modal>
    </div>
  );
};
export default MainPage;
