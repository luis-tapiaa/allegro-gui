import React from 'react';

import { PrivateRoute, ProtectedRoute, Router, Switch } from './components/Router';
import { useAppContext } from './context/appContext';
import { CreatePage, HomePage, LoginPage } from './pages';

export default function App() {
  const { token } = useAppContext();

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/login" token={token}>
          <LoginPage />
        </PrivateRoute>
        <PrivateRoute path="/nueva_cuenta" token={token}>
          <CreatePage />
        </PrivateRoute>
        <ProtectedRoute path="/" token={token}>
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
