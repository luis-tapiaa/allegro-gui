import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Route, Switch, useHistory } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcumb';
import { useAppContext } from '../../context/appContext';
import Print from '../Print/Print';
import {
  Menu,
  StepEight,
  StepFive,
  StepFour,
  StepOne,
  StepSeven,
  StepSix,
  StepThree,
  StepTwo
} from '../../steps';
import './HomePage.css';

const HomePage = () => {
  const history = useHistory();
  const { setToken, setUserId, usuario } = useAppContext();
  const routes = [
    { path: '/paso-1', component: StepOne },
    { path: '/paso-2', component: StepTwo },
    { path: '/paso-3', component: StepThree },
    { path: '/paso-4', component: StepFour },
    { path: '/paso-5', component: StepFive },
    { path: '/paso-6', component: StepSix },
    { path: '/paso-7', component: StepSeven },
    { path: '/paso-8', component: StepEight },
    { path: '/imprimir', component: Print }
  ];

  return (
    <div>
      <Navbar
        className="justify-content-between"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div className="menu-left">UNAM Dirección General de Bibliotecas y Servicios Digitales de Informacións</div>
        <div className="menu-center">Sistema de Gestión de Seguridad de la Información</div>
        <Nav>
          <NavDropdown alignRight title={`${usuario}  `}>
            <NavDropdown.Item as="button">Configuración</NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={() => {
                history.push('/imprimir');
              }}
            >
              Imprimir
            </NavDropdown.Item>
            <NavDropdown.Item as="button">Ayuda</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as="button"
              onClick={() => {
                setToken();
                setUserId();
              }}
            >
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Navbar as="div" bg="navigation" expand="lg">
        <Breadcrumb />
      </Navbar>
      <Switch>
        <Route exact path="/" component={Menu} />
        {routes.map((route, index) => (
          <Route key={`step-${index}`} path={route.path} component={route.component} />
        ))}
      </Switch>
      <footer>
        <div>
          <img alt="logo" src="https://dgb.unam.mx/images/logo_DGBSDI_9c9d9d.png" />
        </div>
        <div>
          <div>© 2021 - Sistema de Gestión de Seguridad de la Información</div>
          <div>Todos los derechos reservados. Dirección General de Bibliotecas y Servicios Digitales de
            Información, UNAM.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
