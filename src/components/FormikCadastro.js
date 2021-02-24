import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'react-router-dom/Link';
import { Countries } from '../data/country-dial-codes'
import InputMask from 'react-input-mask';

import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const schemaLogin = yup.object().shape({
    escola: yup.string().required(),
    email: yup.string().required(),
    pass: yup.string().required(),
    country: yup.string().required(),
    phone: yup.string().required(),
  });




function validateEmail (value) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return true;
    }
    return false;
};



export default function FormikLogin(props) {
  
    return(
            <Formik
              validationSchema={schemaLogin}
              onSubmit={async (values) => {
                (values.email == "adm@envixo.com" && values.pass == "adm") 
                ? alert('Cadastro')
                : alert('Cadastro');
              }}
              initialValues={{
                email: '',
                pass: '',
                escola: '',
                country: '',
                phone: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className={props.className}
                  id={props.id}
                >
                  <Form.Group controlId="escola">
                    <Form.Control 
                    type="text"
                    placeholder="Nome da Escola"
                    name="escola"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.escola}
                    isInvalid={touched.escola && !!errors.escola}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Control 
                    type="email"
                    placeholder="Seu e-mail"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isInvalid={touched.email && !!errors.email || touched.email && validateEmail(values.email)}
                    />
                  </Form.Group>
                  <Form.Group controlId="pass">
                    <Form.Control 
                    type="password"
                    placeholder="Crie uma senha" 
                    name="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                    isInvalid={touched.pass && !!errors.pass}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} xs={3} controlId="telefone">
                      <Form.Control 
                      as="select"
                      defaultValue="+55"
                      name="country"
                      onBlur={handleBlur}
                      value={values.country}
                      className="styleSelect"
                      onChange={handleChange}
                      >
                        {Countries.countries && Countries.countries.map((e, value) => {
                        return <option value={value} ccode={e.ccode}>+{e.value}</option>;
                        })}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs={9} controlId="telefone">
                      <InputMask
                      mask="99 99999-9999"
                      type="tel"
                      placeholder="00 00000-0000" 
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      isInvalid={touched.phone && !!errors.phone}
                      className="form-control"
                      />
                    </Form.Group>
                  </Form.Row>
                </Form>
              )}
            </Formik>
    )
}