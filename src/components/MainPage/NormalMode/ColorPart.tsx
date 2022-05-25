import { Fragment, memo, useState } from "react";
import { Typography } from "antd";
import { HexColorPicker } from "react-colorful";

const { Title } = Typography;

const ColorPart = () => {
  const [color, setColor] = useState<string>("#b32aa9");
  return (
    <Fragment>
      <Title
        level={4}
        style={{
          paddingTop: "1rem",
          width: "100%",
        }}
      >
        Color
      </Title>
      <div>
        <HexColorPicker color={color} onChange={setColor} />
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            marginTop: "0.75rem",
            gap: "1rem",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Hex
          </Typography>
          <div
            style={{
              backgroundColor: "rgba(240, 242, 245, 1)",
              marginBottom: "0.75rem",
              width: "100%",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
            }}
          >
            {color}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(ColorPart);
