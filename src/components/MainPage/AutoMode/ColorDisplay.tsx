import {Col,Typography} from "antd";

const ColorDisplay:React.FC<{color:string}> = ({color})=>{
    return <Col span={21}>
            
    <div
      style={{
        backgroundColor: "rgba(128, 0, 255, 1)",
        height: "60px",
        margin: "0.5rem 0rem",
        borderRadius: "0.25rem",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Typography
        style={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
      >
        {color}
      </Typography>
    </div>
  </Col>
}
export default ColorDisplay;