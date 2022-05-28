import { notification } from "antd";
import "./Notification.css";
export const Notification = (warningText: string) => {
    notification.error({
      message: "Error Occured",
      description: warningText,
      className: "notification",
    });
  };

