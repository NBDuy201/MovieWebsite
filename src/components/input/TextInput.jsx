/* eslint-disable react/prop-types */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { useController } from "react-hook-form";

const TextInput = ({
  className,
  type = "text",
  name,
  control,
  defaultValue = "",
  hasIcon,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });

  const [togglePassword, setTogglePassword] = React.useState(false);

  return (
    <div className="flex relative items-center">
      <input
        type={type === "password" && togglePassword ? "text" : type}
        name={name}
        className={`w-full rounded-md p-2 ${
          hasIcon ? "pr-10" : ""
        } bg-transparent outline-none ${className}`}
        {...props}
        {...field}
      />
      {hasIcon ? (
        togglePassword ? (
          <VisibilityOff
            className="absolute right-2 cursor-pointer"
            onClick={() => {
              setTogglePassword(false);
            }}
          ></VisibilityOff>
        ) : (
          <Visibility
            className="absolute right-2 cursor-pointer"
            onClick={() => {
              setTogglePassword(true);
            }}
          ></Visibility>
        )
      ) : null}
    </div>
  );
};

export default TextInput;
