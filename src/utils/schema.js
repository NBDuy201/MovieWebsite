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
  pwd: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .when("password-lowercase", (password, field) => {
      if (!/[a-z]+/.test(password)) {
        return field.matches(
          /[a-z]+/,
          "Password too weak - should include atlest 1 lowercase"
        );
      }
    })
    .when("password-number", (password, field) => {
      if (!/[0-9]+/.test(password)) {
        return field.matches(
          /[0-9]+/,
          "Password too weak - should include atlest 1 number"
        );
      }
    })
    .when("password-uppercase", (password, field) => {
      if (!/[A-Z]+/.test(password)) {
        return field.matches(
          /[A-Z]+/,
          "Password too weak - should include atlest 1 uppercase"
        );
      }
    })
    .when("password-special", (password, field) => {
      if (!/[@$!%*#?&]+/.test(password)) {
        return field.matches(
          /[@$!%*#?&]+/,
          "Password too weak - should include atlest 1 special character"
        );
      }
    }),
  cpwd: yup
    .string()
    .required("Please re-enter your password")
    .oneOf([yup.ref("pwd"), null], "Passwords not match"),
});

export { loginSchema, registerSchema };
