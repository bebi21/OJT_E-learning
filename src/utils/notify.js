import { Button, Divider, notification, Space } from 'antd';

const success = (type) => {
  notification.success({
    message: type,
    placement: "top",
    style: {
      top: 200,
    },
    duration: 1.5,
  });
};
const failed = (type) => {
  notification.error({
    message: type,
    placement: "top",
    style: {
      top: 200,
    },
    duration: 1.5,
  });
};
export { success, failed };
