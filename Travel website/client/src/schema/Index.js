import * as Yup from "yup";

export const SchemaProvide = Yup.object({

  phone: Yup.string().matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/  , 'Phone number is not valid').required("Enter phone number"),
  email: Yup.string().email().required("Please enter your email"),
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  //phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Please enter your phone number'),
  pickup: Yup.string().min(5).max(15).required("Please enter pickup point"),
  charge: Yup.number().min(10).max(100).required("Enter the amount you will charge"),
  time: Yup.string().required("Enter the timing"),
  image: Yup.mixed().required('Please upload a file'),

});