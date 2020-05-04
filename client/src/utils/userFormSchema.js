import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .min(5, "minimum 5 character")
    .required("username required"),
  password: yup
    .string()
    .min(5, "minimum 5 character")
    .required("password required"),
});
