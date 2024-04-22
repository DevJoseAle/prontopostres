import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(7, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

  });


  export const BuyFormSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastName: Yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    address1: Yup.string().min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    city: Yup.string().min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    zipCode: Yup.string().min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phoneNumber: Yup.string().min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  })