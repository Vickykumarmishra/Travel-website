import * as Yup from "yup";

export const SchemaForm = Yup.object({

  
  username: Yup.string().min(3).max(25).required("Please enter userName"),
  //phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Please enter your phone number'),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).max(12).required("Please enter password")
});