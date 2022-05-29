import { useEffect, useState } from 'react';

const useUpdateColor = (
  handleDataChange: (mode: string, data: string | number) => void,
) => {
  const [color, setColor] = useState<string>('#b32aa9');

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDataChange('color', color);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [color, handleDataChange]);
  return [color, setColor] as const;
};
export default useUpdateColor;
