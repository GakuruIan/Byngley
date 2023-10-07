import * as yup from 'yup'

export const validateSchema = yup.object().shape({
    firstname:yup.string().min(3,"Name too short").max(10).matches(/^[A-Za-z ]*$/,'Please enter valid name').required("Firstname is required"),
    lastname:yup.string().min(3,"Name too short").max(10).matches(/^[A-Za-z ]*$/,'Please enter valid name').required("Lastname is required"),
    email:yup.string().email("Please enter a valid email").required("Email is Required"),
    password:yup.string().min(8,"password must be 8 or more characters long").required("Password is required"),
    confirmpassword:yup.string().oneOf([yup.ref('password'),null],"passwords don't match").required("Please confirm your new password")
})

export const LoginSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Email is Required"),
    password:yup.string().min(8,"password must be 8 or more characters long").required("Password is required"),
})

export const CheckoutSchema = yup.object().shape({
  fullname:yup.string().min(5,"Name too short").max(40).matches(/^[A-Za-z ]*$/,'Please enter valid name').required("Firstname is required"),
  email:yup.string().email("Please enter a valid email").required("Email is Required"),
  phone:yup.string().required("phone number is required"),
  county:yup.string().required("County  is required"),
  town:yup.string().required("Town  is required"),
  ward:yup.string().required("Ward  is required"),
})