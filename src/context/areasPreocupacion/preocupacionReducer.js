import {
  AGREGAR_AREA_PREOCUPACION,
  AGREGAR_CONSECUENCIA,
  AGREGAR_CONTROL,
  AGREGAR_SEVERIDAD,
  CARGAR_AREA_PREOCUPACION,
  CARGAR_CONSECUENCIA,
  CARGAR_CONTROL,
  CARGAR_SEVERIDAD,
  EDITAR_AREA_PREOCUPACION,
  EDITAR_CONSECUENCIA,
  EDITAR_CONTROL,
  EDITAR_SEVERIDAD,
  ELIMINAR_AREA_PREOCUPACION,
  ELIMINAR_CONSECUENCIA,
  ELIMINAR_CONTROL
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case CARGAR_AREA_PREOCUPACION:
      return { ...state, areas_preocupacion: payload };
    case AGREGAR_AREA_PREOCUPACION:
      return { ...state, areas_preocupacion: [payload, ...state.areas_preocupacion] };
    case EDITAR_AREA_PREOCUPACION:
      return {
        ...state,
        areas_preocupacion: state.areas_preocupacion.map(area =>
          area.id === payload.id ? payload : area
        )
      };
    case ELIMINAR_AREA_PREOCUPACION:
      return {
        ...state,
        areas_preocupacion: state.areas_preocupacion.filter(area => area.id !== payload)
      };
    case CARGAR_CONSECUENCIA:
      return { ...state, consecuencias: payload };
    case AGREGAR_CONSECUENCIA:
      return { ...state, consecuencias: [payload, ...state.consecuencias] };
    case EDITAR_CONSECUENCIA:
      return {
        ...state,
        consecuencias: state.consecuencias.map(consecuencia =>
          consecuencia.id === payload.id ? payload : consecuencia
        )
      };
    case ELIMINAR_CONSECUENCIA:
      return {
        ...state,
        consecuencias: state.consecuencias.filter(consecuencia => consecuencia.id !== payload)
      };
    case CARGAR_SEVERIDAD:
      return { ...state, gravedades: payload };
    case AGREGAR_SEVERIDAD:
      return { ...state, gravedades: [payload, ...state.gravedades] };
    case EDITAR_SEVERIDAD:
      return {
        ...state,
        gravedades: state.gravedades.map(gravedad =>
          gravedad.id === payload.id ? payload : gravedad
        )
      };
    case CARGAR_CONTROL:
      return { ...state, controles: payload };
    case AGREGAR_CONTROL:
      return { ...state, controles: [payload, ...state.controles] };
    case EDITAR_CONTROL:
      return {
        ...state,
        controles: state.controles.map(control => (control.id === payload.id ? payload : control))
      };
    case ELIMINAR_CONTROL:
      return {
        ...state,
        controles: state.controles.filter(control => control.id !== payload)
      };
    default:
      return state;
  }
};
