import React, { createContext, useContext, useState } from 'react';
import sha256 from 'js-sha256';

import { getCookie, setCookie } from '../util';
import cliente, { source } from './cliente';
import Notification from '../components/Notification/Notification';

const AppContext = createContext();

const AppState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setTokenState] = useState(getCookie('systoken'));
  const [usuario, setUsuarioState] = useState(getCookie('usuario'));
  const [id, setId] = useState(getCookie('usuario_id'));
  const [notifications, setNotification] = useState([]);

  console.log(cliente);

  const setToken = value => {
    setCookie('systoken', value);
    setTokenState(value);
  };

  const setUsuario = value => {
    setCookie('usuario', value);
    setUsuarioState(value);
  };

  const setUserId = value => {
    setCookie('usuario_id', value);
    setId(value);
  };

  const login = ({ usuario, password }) => {
    setLoading(true);
    return cliente
      .post('/', { usuario, password: sha256(password) }, {
        cancelToken: null
      })
      .then(({ data }) => {
        const { token, user } = data;
        setToken(token);
        setUserId(user.id);
        setUsuario(user.nombre);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const dropMessage = id => {
    setNotification(prev => prev.filter(p => p.id !== id));
  };

  const sendMessage = (message, type = 'SUUCCESS') => {
    setNotification(prev => [
      {
        id: Date.now(),
        message,
        type
      },
      ...prev
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        token,
        id,
        usuario,
        setId,
        login,
        loading,
        setUserId,
        setToken,
        sendMessage
      }}
    >
      <div className="notification-container">
        {notifications.map(note => (
          <Notification key={note.id} dropMessage={dropMessage} {...note} />
        ))}
      </div>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppState;
