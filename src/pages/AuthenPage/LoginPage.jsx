import React from "react";
import TextInput from "./../../components/input/TextInput";
import Button from "./../../components/button/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { authRoutes } from "../../common/page-routes";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "./../../components/authen/FormImage";

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-108px)] flex">
      <FormContainer>
        {/* Form */}
        <form className="w-1/2 pr-3 h-full flex flex-col gap-4 flex-1 justify-center">
          <h2 className="font-bold text-6xl text-primary text-center">Login</h2>
          <TextInput
            type="email"
            name="email"
            className="outline-slate-500 mt-5"
            placeholder="Email"
          />
          <TextInput
            type="password"
            name="email"
            className="outline-slate-500 mt-5"
            placeholder="Password"
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
          <Button type="submit" className="p-3">
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
