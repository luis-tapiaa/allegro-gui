import React, { useReducer } from 'react';

import AreaContext from './areaContext';
import AreaReducer from './areaReducer';
import {
  AGREGAR_AREA_IMPACTO,
  AGREGAR_CRITERIO,
  CARGAR_AREA_IMPACTO,
  CARGAR_CRITERIO,
  EDITAR_AREA_IMPACTO,
  EDITAR_CRITERIO,
  ELIMINAR_AREA_IMPACTO,
  ELIMINAR_CRITERIO
} from '../types';

import cliente from '../cliente';
import { getCookie } from '../../util';

const AreaState = ({ children }) => {
  const initialState = {
    areas_impacto: [],
    criterios: []
  };

  const [state, dispatch] = useReducer(AreaReducer, initialState);

  const cargar = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/areas_impacto/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_AREA_IMPACTO,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregar = area => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/areas_impacto/nuevo', area);
        dispatch({
          type: AGREGAR_AREA_IMPACTO,
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
        await cliente.delete(`/areas_impacto/eliminar/${id}`);
        dispatch({
          type: ELIMINAR_AREA_IMPACTO,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizar = area => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/areas_impacto/editar/${area.id}`, area);
        dispatch({
          type: EDITAR_AREA_IMPACTO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarCriterio = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/criterios/${id}`);
        dispatch({
          type: CARGAR_CRITERIO,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregarCriterio = criterio => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/criterios/nuevo', criterio);
        dispatch({
          type: AGREGAR_CRITERIO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const eliminarCriterio = id => {
    return new Promise(async (resolve, reject) => {
      try {
        await cliente.delete(`/criterios/eliminar/${id}`);
        dispatch({
          type: ELIMINAR_CRITERIO,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizarCriterio = criterio => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/criterios/editar/${criterio.id}`, criterio);
        dispatch({
          type: EDITAR_CRITERIO,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <AreaContext.Provider
      value={{
        ...state,
        actualizar,
        agregar,
        cargar,
        eliminar,
        actualizarCriterio,
        agregarCriterio,
        cargarCriterio,
        eliminarCriterio
      }}
    >
      {children}
    </AreaContext.Provider>
  );
};

export default AreaState;
