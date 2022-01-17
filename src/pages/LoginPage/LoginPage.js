import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import './LoginPage.css';
import { useAppContext } from '../../context/appContext';

const LoginPage = () => {
  const [error, setError] = useState();
  const { login, loading } = useAppContext();

  const onSubmit = (values) => {
    login(values).catch(error => {
      setError(error.response.data.error);      
    });
  }  

  return (
    <div className="login">
      <Formik onSubmit={onSubmit} initialValues={{ usuario: '', password: '' }}>
        {({ handleSubmit, handleChange, values }) => (
          <Form autoComplete="off" onSubmit={handleSubmit} className="login-form">
            <h1>Iniciar sesión</h1>
            <Form.Control
              type="text"
              name="usuario"
              value={values.usuario}
              onChange={handleChange}
              placeholder="Usuario"
            />
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
            <Button variant="primary" type="submit" disabled={loading}>
              Iniciar sesión
            </Button>
            <div className="login-link">
              ¿No tienes una cuenta?
              <Link to="nueva_cuenta">Registrate</Link>
            </div>
            <div className="login-error">{error}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
