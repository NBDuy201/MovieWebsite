import { ErrorRounded } from "@mui/icons-material";
import React from "react";
import { toast } from "react-toastify";

const useToast = (errors) => {
  React.useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      toast.error(arrErr[0]?.message, {
        pauseOnHover: false,
        delay: 0,
        className: "bg-secondary text-primary",
        icon: () => <ErrorRounded className="text-primary" />,
        progressClassName: "bg-primary",
      });
    }
  }, [errors]);

  return {};
};

export default useToast;
