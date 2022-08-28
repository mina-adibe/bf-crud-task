import * as yup from "yup";

export const validationSchema = yup.object({
  id: yup.number("Enter id").required("Id is required"),
  userId: yup.number("Enter userId").required("userId is required"),
  title: yup
    .string("Enter your email")
    .required("title is required")
    .min(8, "body should be of minimum 20  characters length"),
  body: yup
    .string("Enter your password")
    .required("body is required")
    .min(8, "body should be of minimum 20  characters length"),
});
