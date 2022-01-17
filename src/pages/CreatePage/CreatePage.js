import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { sha256 } from 'js-sha256';

import { useAppContext } from '../../context/appContext';
import cliente from '../../context/cliente';

const CreatePage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAppContext();

  const onSubmit = values => {
    if (
      values.confirmacion === values.password &&
      values.password.trim() !== '' &&
      values.usuario.trim() !== ''
    ) {
      setLoading(true);
      cliente
        .post('/usuarios/nuevo', {
          usuario: values.usuario,
          nombre: values.nombre,
          password: sha256(values.password)
        })
        .then(({ data }) => {
          login(values);
        })
        .catch(err => {
          if (err.response.data.name === 'SequelizeUniqueConstraintError') {
            setError('Usuario existente.');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError('Usuario y contraseña requeridos.');
    }
  };

  console.log(loading);

  return (
    <div className="login">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          usuario: '',
          nombre: '',
          confirmacion: '',
          password: ''
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form autoComplete="off" onSubmit={handleSubmit} className="login-form">
            <h1>Crear una cuenta</h1>
            <Form.Control
              name="usuario"
              value={values.usuario}
              onChange={handleChange}
              placeholder="Usuario"
            />
            <Form.Control
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              placeholder="Nombre"
            />
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
            <Form.Control
              type="password"
              name="confirmacion"
              value={values.confirmacion}
              onChange={handleChange}
              placeholder="Repetir contraseña"
            />
            <Button variant="primary" type="submit" disabled={loading}>
              Registrarte
            </Button>
            <div className="login-link">
              ¿Tienes una cuenta?
              <Link to="/login">Inicia sesión</Link>
            </div>
            <div className="login-error">{error}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePage;
