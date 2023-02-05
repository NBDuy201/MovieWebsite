import React from "react";
import TextInput from "./../../components/input/TextInput";
import Button from "./../../components/button/Button";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { authRoutes, movieRoutes } from "../../common/page-routes";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "./../../components/authen/FormImage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/schema";
import useToast from "./../../hooks/useToast";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { toast } from "react-toastify";
import { Close, ErrorRounded } from "@mui/icons-material";

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
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    console.log("🚀 ~ file: LoginPage.jsx:26 ~ handleLogin ~ data", data);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.pwd);
      navigate(movieRoutes.HOME);
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          toast.error("Incorrect password", {
            pauseOnHover: false,
            delay: 0,
            className: "bg-secondary text-primary",
            icon: () => <ErrorRounded className="text-primary" />,
            closeButton: () => (
              <Close fontSize="small" className="text-white" />
            ),
            progressClassName: "bg-primary",
          });
          break;

        default:
          break;
      }
    }
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
