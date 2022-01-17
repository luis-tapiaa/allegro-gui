import React, { useReducer } from 'react';

import CuestionarioContext from './cuestionarioContext';
import CuestionarioReducer from './cuestionarioReducer';
import { AGREGAR_CUESTIONARIO, CARGAR_CUESTIONARIO, EDITAR_CUESTIONARIO } from '../types';

import cliente from '../cliente';
import { getCookie } from '../../util';

const CuestionarioState = ({ children }) => {
  const initialState = {
    cuestionarios: []
  };

  const [state, dispatch] = useReducer(CuestionarioReducer, initialState);

  const cargar = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/cuestionarios/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_CUESTIONARIO,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregar = cuestionario => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/cuestionarios/nuevo', cuestionario);
        dispatch({
          type: AGREGAR_CUESTIONARIO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizar = cuestionario => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(
          `/cuestionarios/editar/${cuestionario.id}`,
          cuestionario
        );
        dispatch({
          type: EDITAR_CUESTIONARIO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <CuestionarioContext.Provider
      value={{
        ...state,
        actualizar,
        agregar,
        cargar
      }}
    >
      {children}
    </CuestionarioContext.Provider>
  );
};

export default CuestionarioState;
