const ConvertHexStringToInt = (hexString: string) => ({
  red: parseInt(hexString.slice(1, 3), 16),
  green: parseInt(hexString.slice(3, 5), 16),
  blue: parseInt(hexString.slice(5, 7), 16),
});

const GetBrightnessFromRGB = (red: number, green: number, blue: number) => {
  const max = Math.max(red / 255, green / 255, blue / 255);
  const min = Math.min(red / 255, green / 255, blue / 255);
  return (max + min) / 2;
};

const GetBrightnessFromColor = (hexString: string) => {
  const { red, green, blue } = ConvertHexStringToInt(hexString);
  return GetBrightnessFromRGB(red, green, blue);
};

export default GetBrightnessFromColor;
