import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { authRoutes } from "../../common/page-routes";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "../../components/authen/FormImage";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/schema";
import useToast from "./../../hooks/useToast";

const RegisterPage = () => {
  // Form
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // Handle login
  const handleRegister = async (data) => {
    console.log("🚀 ~ file: RegisterPage.jsx:25 ~ handleRegister ~ data", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  useToast(errors);

  return (
    <div className="h-[calc(100vh-108px)] flex">
      <FormContainer extendH={true}>
        {/* Form */}
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="w-1/2 pr-3 h-full flex flex-col gap-y-6 flex-1 justify-center"
        >
          <h2 className="font-bold text-6xl text-primary text-center">
            Register
          </h2>
          <TextInput
            type="text"
            name="fullName"
            className="outline-slate-500"
            placeholder="Full name"
            control={control}
          />
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
          <TextInput
            type="password"
            name="cpwd"
            className="outline-slate-500"
            placeholder="Re-enter password"
            control={control}
            hasIcon={true}
          />
          <Typography variant="caption">
            Already have an account ?{" "}
            <Typography
              variant="caption"
              component={Link}
              to={authRoutes.LOGIN}
              className="text-primary underline"
            >
              Login here
            </Typography>
          </Typography>
          <Button type="submit" className="p-3" isLoading={isSubmitting}>
            Register
          </Button>
        </form>
        {/* Image */}
        <FormImage />
      </FormContainer>
    </div>
  );
};

export default RegisterPage;
