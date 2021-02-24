import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'react-router-dom/Link';


import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const schemaLogin = yup.object().shape({
    email: yup.string().required('O campo email é obrigatório'),
    pass: yup.string().required('O campo senha é obrigatório'),
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
                (values.email == "adm@freebieapp.com.br" && values.pass == "adm") 
                ? alert('login')
                : document.getElementById('invalidCred').classList.add('showError');
              }}
              initialValues={{
                email: '',
                pass: '',
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
                  <h3 id="invalidCred" className="invalidCred mb-4">O email e/ou senha estão incorretos.</h3>
                  <Form.Group controlId="email">
                    <Form.Control 
                    type="email"
                    placeholder="E-mail"
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
                    placeholder="Senha" 
                    name="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                    isInvalid={touched.pass && !!errors.pass}
                    />
                  </Form.Group>
                  <Form.Group controlId="utilsForm" className="d-flex flex-row">
                    <span><Link to="/" className="forgotPass" >Esqueci minha senha</Link></span>
                  </Form.Group>
                </Form>
              )}
            </Formik>
    )
}