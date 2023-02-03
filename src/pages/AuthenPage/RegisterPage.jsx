import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { authRoutes } from "../../common/page-routes";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "../../components/authen/FormImage";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";

const RegisterPage = () => {
  return (
    <div className="h-[calc(100vh-108px)] flex">
      <FormContainer extendH={true}>
        {/* Form */}
        <form className="w-1/2 pr-3 h-full flex flex-col gap-4 flex-1 justify-center">
          <h2 className="font-bold text-6xl text-primary text-center">
            Register
          </h2>
          <TextInput
            type="text"
            name="fullName"
            className="outline-slate-500 mt-5"
            placeholder="Full name"
          />
          <TextInput
            type="email"
            name="email"
            className="outline-slate-500 mt-5"
            placeholder="Email"
          />
          <TextInput
            type="password"
            name="pwd"
            className="outline-slate-500 mt-5"
            placeholder="Password"
          />
          <TextInput
            type="password"
            name="cpwd"
            className="outline-slate-500 mt-5"
            placeholder="Re-enter password"
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
          <Button type="submit" className="p-3">
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
