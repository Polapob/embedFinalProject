import { Fragment } from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const BrightnessPart = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default BrightnessPart;
