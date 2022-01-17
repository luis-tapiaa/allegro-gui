import {
  AGREGAR_CONTENEDOR,
  CARGAR_CONTENEDOR,
  EDITAR_CONTENEDOR,
  ELIMINAR_CONTENEDOR
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case CARGAR_CONTENEDOR:
      return { ...state, contenedores: payload };
    case AGREGAR_CONTENEDOR:
      return { ...state, contenedores: [payload, ...state.contenedores] };
    case EDITAR_CONTENEDOR:
      return {
        ...state,
        contenedores: state.contenedores.map(contenedor =>
          contenedor.id === payload.id ? payload : contenedor
        )
      };
    case ELIMINAR_CONTENEDOR:
      return {
        ...state,
        contenedores: state.contenedores.filter(contenedor => contenedor.id !== payload)
      };
    default:
      return state;
  }
};
