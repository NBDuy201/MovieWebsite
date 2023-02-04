import React from "react";
import TextInput from "./../../components/input/TextInput";
import Button from "./../../components/button/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { authRoutes } from "../../common/page-routes";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "./../../components/authen/FormImage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/schema";
import useToast from "./../../hooks/useToast";

const LoginPage = () => {
  // Form
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Handle login
  const handleLogin = async (data) => {
    console.log("🚀 ~ file: LoginPage.jsx:26 ~ handleLogin ~ data", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  useToast(errors);

  return (
    <div
      onSubmit={handleSubmit(handleLogin)}
      className="h-[calc(100vh-108px)] flex"
    >
      <FormContainer>
        {/* Form */}
        <form className="w-1/2 pr-3 h-full flex flex-col gap-y-6 flex-1 justify-center">
          <h2 className="font-bold text-6xl text-primary text-center">Login</h2>
          <TextInput
            type="email"
            name="email"
            className="outline-slate-500"
            placeholder="Email"
            control={control}
          />
          <TextInput
            type="password"
            name="pwd"
            className="outline-slate-500"
            placeholder="Password"
            control={control}
            hasIcon={true}
          />
          <Typography variant="caption">
            Don't have an account ?{" "}
            <Typography
              variant="caption"
              component={Link}
              to={authRoutes.REGISTER}
              className="text-primary underline"
            >
              Register here
            </Typography>
          </Typography>
          <Button type="submit" className="p-3" isLoading={isSubmitting}>
            Login
          </Button>
        </form>
        {/* Image */}
        <FormImage />
      </FormContainer>
    </div>
  );
};

export default LoginPage;
