import { CheckCircle, Close, ErrorRounded } from "@mui/icons-material";
import React from "react";
import { toast } from "react-toastify";

const useToast = (errors = []) => {
  function showErrToast(errMsg) {
    return toast.error(errMsg, {
      pauseOnHover: false,
      delay: 0,
      className: "bg-secondary text-primary",
      icon: () => <ErrorRounded className="text-primary" />,
      closeButton: () => <Close fontSize="small" className="text-white" />,
      progressClassName: "bg-primary",
    });
  }

  function showSuccessToast(successMsg) {
    return toast.success(successMsg, {
      pauseOnHover: false,
      delay: 0,
      className: "bg-secondary text-white",
      icon: () => <CheckCircle className="text-green-500" />,
      closeButton: () => <Close fontSize="small" className="text-white" />,
      progressClassName: "bg-green-500",
    });
  }

  React.useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      showErrToast(arrErr[0]?.message);
    }
  }, [errors]);

  return { showErrToast, showSuccessToast };
};

export default useToast;
