import React from "react";
import TextInput from "./../../components/input/TextInput";
import Button from "./../../components/button/Button";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
import { authPaths, moviePaths } from "~/routes/page-path";
import PageLogo from "~/components/logo/PageLogo";

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
      navigate(moviePaths.HOME);
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
    <FormContainer>
      {/* Form */}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-1/2 pr-10 h-full flex flex-col gap-y-6 flex-1 justify-center py-10"
      >
        <PageLogo wrapperClass={"mb-8"} />
        <h2 className="font-bold text-5xl text-primary">Login</h2>
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

        <Button type="submit" className="p-3" isLoading={isSubmitting}>
          Login
        </Button>

        <Typography variant="caption" className="mt-8">
          Don&apos;t have an account?.
          <Typography
            variant="caption"
            component={Link}
            to={authPaths.REGISTER}
            className="text-primary underline ml-1"
          >
            Register here
          </Typography>
        </Typography>
      </form>
      {/* Image */}
      <FormImage />
    </FormContainer>
  );
};

export default LoginPage;
