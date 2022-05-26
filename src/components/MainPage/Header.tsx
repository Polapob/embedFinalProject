import { Switch, Typography } from "antd";
import {memo, MouseEventHandler} from "react";
import { SwitchClickEventHandler } from "antd/lib/switch";
import "./Header.css";
const { Title } = Typography;

const Header: React.FC<{ toggleDisabled:SwitchClickEventHandler  }> = ({toggleDisabled}) => {

  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "0rem 3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          className="TitleHeader"
          level={1}
          style={{
            fontSize: "64px",
            color: "#8000FF",
            marginBottom: "0px",
            marginRight: "1.25rem",
          }}
        >
          Smart LED
        </Title>
        <Switch className = "verticalSwitch" onClick={toggleDisabled} />
      </div>

      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Bright your productivity up!
      </Typography>
    </div>
  );
};
export default memo(Header);
