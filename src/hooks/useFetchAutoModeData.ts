import { useState, useCallback, useEffect } from 'react';
// eslint-disable-next-line import/no-cycle
import { ModeDataInterface } from '../components/MainPage/AutoMode';
import FetchAutoModedata from '../utils/FetchAutoModeData';
import Notification from '../components/MainPage/Notification';

const useFetchAutoModeData = (disabled: boolean, selectedState: number) => {
  const [counter, setCounter] = useState<number>(0);
  const [autoModedata, setAutomodeData] = useState<ModeDataInterface>(
    {} as ModeDataInterface,
  );
  const fetchAutoModeData = useCallback(async () => {
    if (!disabled && selectedState === 1) {
      const { data, errorMessage } = await FetchAutoModedata();
      setAutomodeData(data);
      if (errorMessage !== '') {
        Notification('Error happened in Database Please try again later!');
      }
    }
  }, [disabled, selectedState]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!disabled && selectedState === 1 && counter === 0) {
      fetchAutoModeData();
      setCounter(10);
    } else if (!disabled && selectedState === 1) {
      const timer = setTimeout(() => {
        setCounter(0);
      }, 10000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setCounter(0);
    }
  }, [disabled, selectedState, counter, fetchAutoModeData]);
  return autoModedata;
};
export default useFetchAutoModeData;
