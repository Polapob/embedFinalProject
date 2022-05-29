import { useState, useEffect } from 'react';

const useUpdateBrightness = (
  handleDataChange: (mode: string, data: string | number) => void,
) => {
  const [brightness, setBrightness] = useState<number>(50);
  const handleBrightnessChange = (newValue: number) => {
    setBrightness(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDataChange('brightness', brightness);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [brightness, handleDataChange]);

  return [brightness, handleBrightnessChange] as const;
};
export default useUpdateBrightness;
