import { Col, Typography } from "antd";

const ColorBox:React.FC<{colorText:string,colorCode:string,borderColor:string}> = ({colorText,colorCode,borderColor}) => {
  return (
    <Col
      span={7}
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginRight: "0.5rem",
      }}
    >
      <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
        GREEN
      </Typography>
      <Typography style={{ fontWeight: "bold", fontSize: "32px" }}>
          {colorCode}
      </Typography>
    </Col>
  );
};
export default ColorBox;
