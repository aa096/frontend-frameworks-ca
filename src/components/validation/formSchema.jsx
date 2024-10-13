import * as Yup from "yup";

const schema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  subject: Yup.string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  body: Yup.string()
    .required("Message is required")
    .min(3, "Message must be at least 3 characters"),
});

export default schema;
