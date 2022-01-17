import React, { useReducer } from 'react';

import ActivoContext from './activoContext';
import ActivoReducer from './activoReducer';
import {
  AGREGAR_ACTIVO,
  CARGAR_ACTIVO,
  EDITAR_ACTIVO,
  ELIMINAR_ACTIVO,
  AGREGAR_REQUERIMIENTO,
  CARGAR_REQUERIMIENTO,
  EDITAR_REQUERIMIENTO,
  ELIMINAR_REQUERIMIENTO
} from '../types';

import cliente from '../cliente';
import { getCookie } from '../../util';

const ActivoState = ({ children }) => {
  const initialState = {
    activos_criticos: [],
    requerimientos: []
  };

  const [state, dispatch] = useReducer(ActivoReducer, initialState);

  const cargar = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/activos_criticos/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_ACTIVO,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregar = activo => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/activos_criticos/nuevo', activo);
        dispatch({
          type: AGREGAR_ACTIVO,
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
        await cliente.delete(`/activos_criticos/eliminar/${id}`);

        dispatch({
          type: ELIMINAR_ACTIVO,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizar = activo => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/activos_criticos/editar/${activo.id}`, activo);
        dispatch({
          type: EDITAR_ACTIVO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarRequerimiento = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/requerimientos/${id}`);
        dispatch({
          type: CARGAR_REQUERIMIENTO,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregarRequerimiento = requerimiento => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/requerimientos/nuevo', requerimiento);
        dispatch({
          type: AGREGAR_REQUERIMIENTO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const eliminarRequerimiento = id => {
    return new Promise(async (resolve, reject) => {
      try {
        await cliente.delete(`/requerimientos/eliminar/${id}`);

        dispatch({
          type: ELIMINAR_REQUERIMIENTO,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizarRequerimiento = requerimiento => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(
          `/requerimientos/editar/${requerimiento.id}`,
          requerimiento
        );
        dispatch({
          type: EDITAR_REQUERIMIENTO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <ActivoContext.Provider
      value={{
        ...state,
        actualizar,
        agregar,
        cargar,
        eliminar,
        actualizarRequerimiento,
        agregarRequerimiento,
        cargarRequerimiento,
        eliminarRequerimiento
      }}
    >
      {children}
    </ActivoContext.Provider>
  );
};

export default ActivoState;
