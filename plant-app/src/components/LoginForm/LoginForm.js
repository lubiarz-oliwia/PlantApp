import React from 'react';
import { func } from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';

import { ButtonComponent as Button } from '../Button/Button';


const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required')
    .min(5, "Username must be at least 5 characters long"),
  password: yup
    .string('Enter your password')
    .required('Password is required')
    .matches(
      /^((?=.*[a-z]){1})((?=.*[A-Z]){1})(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain 8 characters, at least one small letter, at least one capital letter and at least one number"
    ),
});

export const LoginForm = ({ onLoginFormSubmit }) => (
  <>

  <div className="loginForm">

  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onLoginFormSubmit}
  >
    {({ values, handleSubmit, handleChange, handleBlur }) => (
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username">Login</Form.Label>
          <Form.Control
            id="username"
            name="username"
            values={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="username" />
        </Form.Group>
        <label htmlFor="password">Hasło</label>
        <Form.Control
          id="password"
          name="password"
          values={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="password" />
        <div className="forButton">
        <Button className="submitButton" type="submit" onClick={handleSubmit}>
          Zaloguj się
        </Button>
        </div>
      </Form>
    )}
  </Formik>
  </div>
  </>
);

LoginForm.propTypes = {
  onSubmit: func.isRequired,
}

