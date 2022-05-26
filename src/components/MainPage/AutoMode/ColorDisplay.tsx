import { Col, Typography } from "antd";
import "./ColorDisplay.css";

const ColorDisplay: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Col span={21} style = {{width:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}>
      <div
        className="ColorDisplayContainer"
        style={{
          backgroundColor: "rgba(128, 0, 255, 1)",
          height: "60px",
          borderRadius: "0.25rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "1rem",
          marginBottom: "0.5rem",
         
        }}
      >
        <Typography
          style={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
          className = "ColorDisplayCode"
        >
          {color}
        </Typography>
      </div>
    </Col>
  );
};
export default ColorDisplay;
