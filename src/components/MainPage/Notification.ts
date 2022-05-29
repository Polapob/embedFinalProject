import { notification } from 'antd';
import './Notification.css';

const Notification = (warningText: string) => {
  notification.error({
    message: 'Error Occured',
    description: warningText,
    className: 'notification',
  });
};
export default Notification;
