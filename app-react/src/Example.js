import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '',password:'',password_confirmation:'' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required('Required'),
        lastName: Yup.string()
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
        .min(6, 'Must be 6 characters or more')
          .required('Required'),
          password_confirmation: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <label htmlFor="password_confirmation">Password confirmation</label>
        <Field name="password_confirmation" type="password" />
        <ErrorMessage name="password_confirmation" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Register;