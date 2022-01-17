import React, { useReducer } from 'react';

import ContenedorContext from './contenedorContext';
import ContenedorReducer from './contenedorReducer';
import {
  AGREGAR_CONTENEDOR,
  CARGAR_CONTENEDOR,
  EDITAR_CONTENEDOR,
  ELIMINAR_CONTENEDOR
} from '../types';

import cliente from '../cliente';
import { getCookie } from '../../util';

const ContenedorState = ({ children }) => {
  const initialState = {
    contenedores: []
  };

  const [state, dispatch] = useReducer(ContenedorReducer, initialState);

  const cargar = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/contenedores/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_CONTENEDOR,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregar = contenedor => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/contenedores/nuevo', contenedor);
        dispatch({
          type: AGREGAR_CONTENEDOR,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const eliminar = id => {
    return new Promise(async (resolve, reject) => {
      try {
        await cliente.delete(`/contenedores/eliminar/${id}`);
        dispatch({
          type: ELIMINAR_CONTENEDOR,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizar = contenedor => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/contenedores/editar/${contenedor.id}`, contenedor);
        dispatch({
          type: EDITAR_CONTENEDOR,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <ContenedorContext.Provider
      value={{
        ...state,
        actualizar,
        agregar,
        cargar,
        eliminar
      }}
    >
      {children}
    </ContenedorContext.Provider>
  );
};

export default ContenedorState;
