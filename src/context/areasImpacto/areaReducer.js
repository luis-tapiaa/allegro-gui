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

export default (state, { type, payload }) => {
  switch (type) {
    case CARGAR_AREA_IMPACTO:
      return { ...state, areas_impacto: payload };
    case AGREGAR_AREA_IMPACTO:
      return { ...state, areas_impacto: [payload, ...state.areas_impacto] };
    case EDITAR_AREA_IMPACTO:
      return {
        ...state,
        areas_impacto: state.areas_impacto.map(area => (area.id === payload.id ? payload : area))
      };
    case ELIMINAR_AREA_IMPACTO:
      return {
        ...state,
        areas_impacto: state.areas_impacto.filter(area => area.id !== payload)
      };
    case CARGAR_CRITERIO:
      return { ...state, criterios: payload };
    case AGREGAR_CRITERIO:
      return { ...state, criterios: [payload, ...state.criterios] };
    case EDITAR_CRITERIO:
      return {
        ...state,
        criterios: state.criterios.map(criterio =>
          criterio.id === payload.id ? payload : criterio
        )
      };
    case ELIMINAR_CRITERIO:
      return {
        ...state,
        criterios: state.criterios.filter(criterio => criterio.id !== payload)
      };
    default:
      return state;
  }
};
