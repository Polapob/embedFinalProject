import { Col, Row, Typography } from "antd";
import { MouseEventHandler, memo } from "react";
import GithubLogo from "../../picture/GitHub.svg";

const { Title, Paragraph, Text } = Typography;

const AutoMode: React.FC<{
  disabled: boolean;
  selectedState: number;
  handleOnClick: MouseEventHandler<HTMLDivElement>;
}> = ({ disabled, selectedState, handleOnClick }) => {
  return (
    <Col span={11} style={{ width: "450px" }}>
      <div
        onClick={handleOnClick}
        style={{
          border: `${
            !disabled && selectedState === 1
              ? "5px solid #8000FF"
              : "5px solid rgb(255,255,255)"
          } `,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          padding: "1.5rem 2rem",
          alignItems: "center",
          background: "rgb(255,255,255)",
          position: "relative",
          opacity: disabled ? 0.4 : selectedState === 1 ? 1 : 0.6,
        }}
      >
        <Title
          level={2}
          style={{ color: "rgba(128, 0, 255, 1)", marginBottom: "0rem" }}
        >
          Auto Mode
        </Title>
        <Title level={4} style={{ textAlign: "center", marginTop: "0rem" }}>
          Automatically adjust upon currently outside theme
        </Title>
        <Title
          level={4}
          style={{
            marginTop: "0.5rem",
            textAlign: "left",
            width: "100%",
          }}
        >
          Brightness
        </Title>
        <div
          style={{
            width: "100%",
          }}
        >
          <Paragraph
            style={{
              color: "rgba(128, 0, 255, 1)",
              textAlign: "center",
              fontSize: "72px",
              marginBottom: "0rem",
              marginTop: "0rem",
              fontWeight: "bold",
            }}
          >
            69
            <Text
              style={{
                color: "rgba(128, 0, 255, 1)",
                fontSize: "16px",
                fontWeight: "bold",
                marginLeft: "0.2rem",
              }}
            >
              Lux
            </Text>
          </Paragraph>
        </div>
        <Title
          level={4}
          style={{
            paddingTop: "1rem",
            width: "100%",
          }}
        >
          Color
        </Title>
        <Row justify="center" style={{ width: "90%" }}>
          <Col
            span={7}
            style={{
              border: "2px solid rgba(255, 0, 0, 1)",
              padding: "0.25rem 0rem",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginRight: "0.5rem",
            }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              RED
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "32px" }}>
              80
            </Typography>
          </Col>
          <Col
            span={7}
            style={{
              border: "2px solid rgba(0, 255, 0, 1)",
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
              00
            </Typography>
          </Col>
          <Col
            span={7}
            style={{
              border: "2px solid rgba(0, 0, 255, 1)",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              BLUE
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "32px" }}>
              FF
            </Typography>
          </Col>

          <Col span={21}>
            
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
                #8000FF
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
      <div
          style={{
         //   position: "absolute",
         //   bottom: "-3rem",
         //   right: "0px",
            border: "0px solid black",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            marginTop:"1rem",
            paddingRight:"0rem",
            
          }}
        >
          <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>
            2110366 Embedded Sys Lab Project
          </Typography>
          <img src={GithubLogo} alt="Github Logo" />
        </div>
    </Col>
  );
};
export default memo(AutoMode);
