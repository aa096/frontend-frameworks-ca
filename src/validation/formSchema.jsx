import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().min(3).required("Please enter your full name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    subject: yup.string().min(3).required("Please enter a subject"),
    body: yup.string().min(3).required("Please enter your message"),
  })
  .required();

export default schema;
