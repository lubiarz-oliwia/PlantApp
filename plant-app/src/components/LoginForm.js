import React from 'react';
import { func } from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { ButtonComponent as Button } from './Button';

const validationSchema = yup.object({
  username: yup
    .string('Wpisz login.')
    .required('Login jest wymagany.'),
  password: yup
    .string('Wpisz hasło.')
    .required('Hasło jest wymagane.'),
});

export const LoginForm = ({ onLoginFormSubmit }) => (
  <>
    <div className="form">
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

