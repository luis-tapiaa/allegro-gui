import { AGREGAR_CUESTIONARIO, CARGAR_CUESTIONARIO, EDITAR_CUESTIONARIO } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case CARGAR_CUESTIONARIO:
      return { ...state, cuestionarios: payload };
    case AGREGAR_CUESTIONARIO:
      return { ...state, cuestionarios: [payload, ...state.cuestionarios] };
    case EDITAR_CUESTIONARIO:
      return {
        ...state,
        cuestionarios: state.cuestionarios.map(cuestionario =>
          cuestionario.id === payload.id ? payload : cuestionario
        )
      };
    default:
      return state;
  }
};
