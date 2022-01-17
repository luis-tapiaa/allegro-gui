import {
  AGREGAR_ACTIVO,
  AGREGAR_REQUERIMIENTO,
  CARGAR_ACTIVO,
  CARGAR_REQUERIMIENTO,
  EDITAR_ACTIVO,
  EDITAR_REQUERIMIENTO,
  ELIMINAR_ACTIVO,
  ELIMINAR_REQUERIMIENTO
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case CARGAR_ACTIVO:
      return { ...state, activos_criticos: payload };
    case AGREGAR_ACTIVO:
      return { ...state, activos_criticos: [payload, ...state.activos_criticos] };
    case EDITAR_ACTIVO:
      return {
        ...state,
        activos_criticos: state.activos_criticos.map(activo =>
          activo.id === payload.id ? payload : activo
        )
      };
    case ELIMINAR_ACTIVO:
      return {
        ...state,
        activos_criticos: state.activos_criticos.filter(activo => activo.id !== payload)
      };
    case CARGAR_REQUERIMIENTO:
      return { ...state, requerimientos: payload };
    case AGREGAR_REQUERIMIENTO:
      return { ...state, requerimientos: [payload, ...state.requerimientos] };
    case EDITAR_REQUERIMIENTO:
      return {
        ...state,
        requerimientos: state.requerimientos.map(requerimiento =>
          requerimiento.id === payload.id ? payload : requerimiento
        )
      };
    case ELIMINAR_REQUERIMIENTO:
      return {
        ...state,
        requerimientos: state.requerimientos.filter(requerimiento => requerimiento.id !== payload)
      };
    default:
      return state;
  }
};
