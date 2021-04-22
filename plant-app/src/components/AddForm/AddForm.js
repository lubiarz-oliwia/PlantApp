import React from 'react';
import { func } from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RangeSlider from 'react-bootstrap-range-slider';
import { ButtonComponent as Button } from '../elements/Button/Button';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const validationSchema = yup.object({
  plantName: yup
    .string('Wpisz nazwę rośliny.')
    .required("To pole jest obowiązkowe."),
  price: yup
    .number('Wybierz cenę.')
    .min(5, "Cena min musi wynosić 5zł.")
    .required("Cena rośliny jest wymagana."),
  height: yup
    .number('Wybierz wysokość.')
    .min(5, "Wysokość musi wynosić min. 5 cm")
    .required("Wysokość rośliny jest wymagana."),
});

export const AddForm = ({ handleAddPlant }) => {

  return (
    <>
      <div className="form">
        <Formik
          initialValues={{
            plantName: '',
            price: 0,
            height: 0,
            age: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleAddPlant}
        >
          {({ values, setFieldValue, handleSubmit, handleChange, handleBlur }) => (
            <Form>
              <Form.Group>
                <Form.Label htmlFor="plantName">Nazwa rośliny</Form.Label>
                <Form.Control
                  id="plantName"
                  name="plantName"
                  values={values.plantName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="plantName">
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <label htmlFor="price">Cena</label>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    {console.log(values)}
                    <RangeSlider
                      value={values.price}
                      name="price"
                      min={0}
                      max={200}
                      step={5}
                      onChange={e => {
                        setFieldValue("price", e.target.value);
                      }}
                      variant="info"
                    />
                  </Col>
                  <Col xs="4">
                    <Form.Control value={values.price + " zł"} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ErrorMessage name="price">
                      {msg => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <label htmlFor="height">Wielkość</label>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <RangeSlider
                      value={values.height}
                      name="price"
                      min={0}
                      max={200}
                      step={2}
                      onChange={e => {
                        setFieldValue("height", e.target.value);
                      }}
                      variant="info"
                    />
                  </Col>
                  <Col xs="4">
                    <Form.Control value={values.height + " cm"} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ErrorMessage name="height">
                      {msg => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </Col>
                </Row>
              </Form.Group>


              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Dodaj komentarz</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Opcjonalnie" />
              </Form.Group>

              <Form.Group>
                <Form.File id="addPhoto" label="Dodaj zdjęcie" />
              </Form.Group>

              <div className="forButton">
                <Button
                  className="sellButton"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sprzedaj!
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

AddForm.propTypes = {
  onSubmit: func.isRequired,
}

