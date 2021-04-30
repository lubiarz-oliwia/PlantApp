import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { editUserData, getUserData } from '../actions/userData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { func } from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { ButtonComponent as Button } from './Button';

const validationSchema = yup.object({
  name: yup
    .string('Wpisz imię.')
    .required('Imię jest wymagane.'),
  surname: yup
    .string('Wpisz nazwisko.')
    .required('Nazwisko jest wymagane.'),
  street: yup
    .string('Wpisz ulicę.')
    .required('Ulica jest wymagany.'),
  postalCode: yup
    .string('Wpisz kod pocztowy.')
    .required('Kod pocztowy jest wymagany.'),
});

export const YourDetails = () => {
  const [userData, setUserData] = useState({ name: '', surname: '', street: '', postalCode: '' });
  const [showEditForm, setShowEditForm] = useState(true);

  const getUserName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user.username;
    }
    return '';
  }

  useEffect(() => {
    getUserData(setUserData);
  }, []);

  const { name, surname, street, postalCode, id } = userData;

  const handleChangeData = (data) => {
    editUserData(id, data, setUserData);
    setShowEditForm(!showEditForm);
  };

  return (
    <>
      {showEditForm ? (
        <Card style={{ marginBottom: "10px" }}>
          <Card.Body>
            <Card.Title>
              Username: {getUserName()}
            </Card.Title>
            <Card.Text>
              Imię: {name}
            </Card.Text>
            <Card.Text>
              Nazwisko: {surname}
            </Card.Text>
            <Card.Text>
              Ulica: {street}
            </Card.Text>
            <Card.Text>
              Kod pocztowy: {postalCode}
            </Card.Text>
            <Card.Text style={{ color: "green" }}>
              Edytuj swoje dane
                    <FontAwesomeIcon
                icon={faUserEdit}
                className="iconTile"
                style={{ marginLeft: "10px" }}
                onClick={() => setShowEditForm(!showEditForm)}
              />
            </Card.Text>
          </Card.Body>
        </Card>) : null}

      {!showEditForm ? (
        <div className="form">
          <Formik
            initialValues={{
              name: name,
              surname: surname,
              street: street,
              postalCode: postalCode
            }}
            validationSchema={validationSchema}
            onSubmit={handleChangeData}
          >
            {({ values, setFieldValue, handleSubmit, handleChange, handleBlur }) => (
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="name">Imię</Form.Label>
                  <Form.Control
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="name">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="surname">Nazwisko</Form.Label>
                  <Form.Control
                    id="surname"
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="surname">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="street">Ulica</Form.Label>
                  <Form.Control
                    id="street"
                    name="street"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="street">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="postalCode">Kod pocztowy</Form.Label>
                  <Form.Control
                    id="postalCode"
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="postalCode">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Form.Group>
                <div className="forButton">
                  <Button
                    className="sellButton"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Zapisz!
                      </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : null}
    </>
  )
};


