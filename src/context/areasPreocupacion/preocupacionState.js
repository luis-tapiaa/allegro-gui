import React, { useReducer } from 'react';

import PreocupacionContext from './preocupacionContext';
import PreocupacionReducer from './preocupacionReducer';
import {
  AGREGAR_AREA_PREOCUPACION,
  AGREGAR_CONSECUENCIA,
  CARGAR_AREA_PREOCUPACION,
  CARGAR_CONSECUENCIA,
  EDITAR_AREA_PREOCUPACION,
  ELIMINAR_AREA_PREOCUPACION,
  EDITAR_CONSECUENCIA,
  ELIMINAR_CONSECUENCIA,
  CARGAR_SEVERIDAD,
  AGREGAR_SEVERIDAD,
  EDITAR_SEVERIDAD,
  CARGAR_CONTROL,
  AGREGAR_CONTROL,
  ELIMINAR_CONTROL,
  EDITAR_CONTROL
} from '../types';

import cliente from '../cliente';
import { getCookie } from '../../util';

const PreocupacionState = ({ children }) => {
  const initialState = {
    areas_preocupacion: [],
    consecuencias: [],
    gravedades: [],
    controles: []
  };

  const [state, dispatch] = useReducer(PreocupacionReducer, initialState);

  const cargar = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/areas_preocupacion/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_AREA_PREOCUPACION,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarFull = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/areas_preocupacion_full/${getCookie('usuario_id')}`);
        dispatch({
          type: CARGAR_AREA_PREOCUPACION,
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
        const { data } = await cliente.post('/areas_preocupacion/nuevo', area);
        dispatch({
          type: AGREGAR_AREA_PREOCUPACION,
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
        await cliente.delete(`/areas_preocupacion/eliminar/${id}`);

        dispatch({
          type: ELIMINAR_AREA_PREOCUPACION,
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
        const { data } = await cliente.patch(`/areas_preocupacion/editar/${area.id}`, area);
        dispatch({
          type: EDITAR_AREA_PREOCUPACION,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarConsecuencia = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/consecuencias/${id}`);
        dispatch({
          type: CARGAR_CONSECUENCIA,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregarConsecuencia = consecuencia => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/consecuencias/nuevo', consecuencia);
        dispatch({
          type: AGREGAR_CONSECUENCIA,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const eliminarConsecuencia = id => {
    return new Promise(async (resolve, reject) => {
      try {
        await cliente.delete(`/consecuencias/eliminar/${id}`);
        dispatch({
          type: ELIMINAR_CONSECUENCIA,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizarConsecuencia = consecuencia => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(
          `/consecuencias/editar/${consecuencia.id}`,
          consecuencia
        );
        dispatch({
          type: EDITAR_CONSECUENCIA,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarGravedad = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/gravedades/${id}`);
        dispatch({
          type: CARGAR_SEVERIDAD,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregarGravedad = gravedad => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/gravedades/nuevo', gravedad);
        dispatch({
          type: AGREGAR_SEVERIDAD,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizarGravedad = gravedad => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/gravedades/editar/${gravedad.id}`, gravedad);
        dispatch({
          type: EDITAR_SEVERIDAD,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const cargarControl = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.get(`/controles/${id}`);
        dispatch({
          type: CARGAR_CONTROL,
          payload: data.items
        });
        resolve(data.items);
      } catch (error) {
        reject(error);
      }
    });
  };

  const agregarControl = control => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.post('/controles/nuevo', control);
        dispatch({
          type: AGREGAR_CONTROL,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  const eliminarControl = id => {
    return new Promise(async (resolve, reject) => {
      try {
        await cliente.delete(`/controles/eliminar/${id}`);
  
        dispatch({
          type: ELIMINAR_CONTROL,
          payload: id
        });
        resolve(id);
      } catch (error) {
        reject(error);
      }
    });
  };

  const actualizarControl = control => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await cliente.patch(`/controles/editar/${control.id}`, control);
        dispatch({
          type: EDITAR_CONTROL,
          payload: data.item
        });
        resolve(data.item);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <PreocupacionContext.Provider
      value={{
        ...state,
        actualizar,
        agregar,
        cargar,
        cargarFull,
        eliminar,
        cargarControl,
        agregarControl,
        eliminarControl,
        actualizarControl,
        actualizarConsecuencia,
        agregarConsecuencia,
        cargarConsecuencia,
        eliminarConsecuencia,
        cargarGravedad,
        agregarGravedad,
        actualizarGravedad
      }}
    >
      {children}
    </PreocupacionContext.Provider>
  );
};

export default PreocupacionState;
