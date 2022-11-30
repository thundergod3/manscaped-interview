import { toast } from "react-toastify";

const toastConfig = {
  autoClose: 5000,
  position: toast.POSITION.TOP_RIGHT,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const useNotification = () => {
  const openNotificationSuccess = (title: string) =>
    toast(title, {
      type: toast.TYPE.SUCCESS,
      ...toastConfig,
    });

  const openNotificationInfo = (title: string) =>
    toast(title, {
      type: toast.TYPE.INFO,
      ...toastConfig,
    });

  const openNotificationError = (title: string) =>
    toast(title, {
      type: toast.TYPE.ERROR,
      ...toastConfig,
    });

  return {
    openNotificationSuccess,
    openNotificationInfo,
    openNotificationError,
  };
};

export default useNotification;
