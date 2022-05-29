import { SwitchClickEventHandler } from 'antd/lib/switch';
import {
  MouseEventHandler, useCallback, useEffect, useState,
} from 'react';
import SwitchMode from '../utils/SwitchMode';
import Notification from '../components/MainPage/Notification';

const useSelectMode = () => {
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
        mode: 'off',
        brightness: 0,
        color: '#000000',
      });
      if (errorMessage !== '') {
        Notification('Error happened in Database Please try again later!');
      }
    }
  }, [disabled]);

  // eslint-disable-next-line consistent-return
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
    }
    if (selectedState.startCountDown) {
      setOpenModal(false);
      setSelectedState((prevState) => ({
        ...prevState,
        counter: 5,
        startCountDown: false,
      }));
    }
  }, [selectedState.counter, selectedState.startCountDown]);

  const handleNormalModeClick: MouseEventHandler<HTMLDivElement> = useCallback(async () => {
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

  const handleAutoModeClick: MouseEventHandler<HTMLDivElement> = useCallback(async () => {
    if (!disabled && !selectedState.startCountDown) {
      setSelectedState((prevState) => ({
        ...prevState,
        selectedState: 1,
        startCountDown: prevState.selectedState !== 1,
      }));

      if (selectedState.selectedState !== 1) {
        const { errorMessage } = await SwitchMode({
          brightness: 20,
          mode: 'auto',
          color: '#FF00FF',
        });
        if (errorMessage !== '') {
          Notification('Error happened in Database Please try again later!');
        }
      }
    } else if (!disabled && selectedState.selectedState === 0) {
      setOpenModal(true);
    }
  }, [disabled, selectedState.startCountDown, selectedState.selectedState]);

  return [
    disabled,
    toggleDisabled,
    selectedState,
    openModal,
    closeModal,
    handleNormalModeClick,
    handleAutoModeClick,
  ] as const;
};
export default useSelectMode;
