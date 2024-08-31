import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('User registered:', values);
    resetForm(); // Reset form after submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
