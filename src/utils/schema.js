import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email not valid")
    .required("Please enter your email"),
  pwd: yup.string().required("Please enter your password"),
});

const registerSchema = yup.object({
  fullName: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Email not valid")
    .required("Please enter your email"),
  pwd: yup.string().required("Please enter your password"),
  cpwd: yup.string().required("Please re-enter your password"),
});

export { loginSchema, registerSchema };
