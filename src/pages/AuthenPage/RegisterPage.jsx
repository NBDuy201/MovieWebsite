import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FormContainer from "../../components/authen/FormContainer";
import FormImage from "../../components/authen/FormImage";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/schema";
import useToast from "./../../hooks/useToast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { authPaths } from "~/routes/page-path";
import PageLogo from "~/components/logo/PageLogo";

const RegisterPage = () => {
  // Form
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { showSuccessToast, showErrToast } = useToast(errors);

  // Handle login
  const handleRegister = async (data) => {
    console.log("🚀 ~ file: RegisterPage.jsx:25 ~ handleRegister ~ data", data);

    try {
      // Call api
      await createUserWithEmailAndPassword(auth, data.email, data.pwd);

      // Add to db
      const colRef = collection(db, "users");
      await addDoc(colRef, {
        name: data.fullName,
        email: data.email,
        password: data.pwd,
      });

      // Update current user
      await updateProfile(auth.currentUser, {
        displayName: data.fullName,
      });

      // Success msg
      showSuccessToast("Register successfully");
    } catch (error) {
      console.log(error);
      showErrToast("Register failed. Please try again later.");
    }
  };

  return (
    <FormContainer>
      {/* Image */}
      <FormImage />
      {/* Form */}
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-1/2 pl-10 h-full flex flex-col gap-y-6 flex-1 justify-center"
      >
        <PageLogo wrapperClass={"mb-8"} />
        <h2 className="font-bold text-5xl text-primary">Register</h2>
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

        <Button type="submit" className="p-3" isLoading={isSubmitting}>
          Register
        </Button>

        <Typography variant="caption" className="mt-8">
          Already have an account?
          <Typography
            variant="caption"
            component={Link}
            to={authPaths.LOGIN}
            className="text-primary underline ml-1"
          >
            Login here
          </Typography>
        </Typography>
      </form>
    </FormContainer>
  );
};

export default RegisterPage;
