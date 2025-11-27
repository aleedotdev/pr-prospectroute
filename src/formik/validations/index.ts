import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required("First name is required")
    .max(100, "First name must be less than 100 characters"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required")
    .max(255, "Email must be less than 255 characters"),
  mobile: Yup.string()
    .trim()
    .required("Mobile number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid mobile number")
    .min(10, "Mobile number must be at least 10 digits")
    .max(20, "Mobile number must be less than 20 characters"),
  agencyEmployees: Yup.string().required("Please select the number of employees"),
});