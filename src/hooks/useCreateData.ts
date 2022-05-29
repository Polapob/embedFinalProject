import { useState, useCallback, MouseEventHandler } from 'react';
import { ModeDataInterface } from '../components/MainPage/AutoMode';
import SwitchMode from '../utils/SwitchMode';
import Notification from '../components/MainPage/Notification';

const useCreateData = () => {
  const [normalData, setNormalData] = useState<ModeDataInterface>({
    mode: 'normal',
    color: '#b32aa9',
    brightness: 50,
  });

  const handleDataChange = useCallback(
    (mode: string, data: string | number) => {
      if (mode === 'color' && typeof data === 'string') {
        setNormalData((prevData) => ({ ...prevData, color: data }));
      } else if (mode === 'brightness' && typeof data === 'number') {
        setNormalData((prevData) => ({ ...prevData, brightness: data }));
      }
    },
    [],
  );

  const handleOnSave: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
    const { errorMessage } = await SwitchMode(normalData);
    if (errorMessage !== '') {
      Notification('Error happened in Database Please try again later!');
    }
  }, [normalData]);
  return [handleDataChange, handleOnSave] as const;
};
export default useCreateData;
