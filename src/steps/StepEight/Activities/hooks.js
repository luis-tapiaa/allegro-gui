import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useContenedorContext } from '../../../context/contenedores/contenedorContext';
import { usePreocupacionContext } from '../../../context/areasPreocupacion/preocupacionContext';
import { useAreaContext } from '../../../context/areasImpacto/areaContext';

export const useActivityOne = () => {
  const history = useHistory();

  const next = () => {
    history.push('/paso-8/actividad-2');
  };

  return { next };
};

export const useActivityTwo = () => {
  const history = useHistory();
  const [area, setArea] = useState({});
  const { areas_impacto } = useAreaContext();
  const { areas_preocupacion, actualizar, cargarGravedad, gravedades } = usePreocupacionContext();

  useEffect(() => {
    if (areas_preocupacion.length !== 0) {
      setArea(areas_preocupacion[0]);
      cargarGravedad(areas_preocupacion[0].id);
    }
  }, [areas_preocupacion]);

  const onChangeArea = ({ target }) => {
    setArea(areas_preocupacion.find(a => a.id === parseInt(target.value, 10)));
    cargarGravedad(target.value);
  };

  const onSubmit = () => {
    actualizar(area);
  };

  const back = () => {
    history.push('/paso-8/actividad-1');
  };

  const next = () => {
    history.push('/paso-8/actividad-3');
  };

  const onChange = ({ target }) => {
    setArea(prev => ({ ...prev, accion_tomada: parseInt(target.id, 10) }));
  };

  let total = 0;
  areas_impacto.forEach(impacto => {
    const gravedad = gravedades.find(g => g.areaImpactoId === impacto.id) || {};
    const score = impacto.prioridad * (gravedad.valor + 1);
    total += isNaN(score) ? 0 : score;
  });

  return {
    areas_preocupacion,
    area,
    onChange,
    onChangeArea,
    next,
    back,
    onSubmit,
    total
  };
};

export const useActivityThree = () => {
  const history = useHistory();
  const {
    areas_preocupacion,
    cargarControl,
    controles,
    agregarControl,
    eliminarControl,
    actualizarControl
  } = usePreocupacionContext();
  const { contenedores } = useContenedorContext();
  const [values, setValues] = useState([]);
  const [value, setValue] = useState({});
  const [area, setArea] = useState();

  const items = areas_preocupacion.filter(area => area.accion_tomada === 2) || [];

  useEffect(() => {
    setValues(controles);
  }, [controles]);

  useEffect(() => {
    if (items.length !== 0) {
      setArea(items[0].id);
      cargarControl(items[0].id);
    }
    //eslint-disable-next-line
  }, [areas_preocupacion]);

  const onChangeArea = ({ target }) => {
    setArea(target.value);
    cargarControl(target.value);
  };

  const onChangeValue = ({ target }) => {
    setValue(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmit = () => {};

  const back = () => {
    history.push('/paso-8/actividad-2');
  };

  const next = () => {
    history.push('/');
  };

  const onChange = id => ({ target }) => {
    const { name, value } = target;
    setValues(prev => prev.map(p => (p.id === id ? { ...p, [name]: value } : p)));
  };

  const onAdd = item => {
    if (item.descripcion.trim() !== '') {
      return agregarControl({ ...item, areaPreocupacionId: area });
    }
  };

  const onEdit = item => () => {
    if (item.descripcion.trim() !== '') {
      actualizarControl(item);
    }
  };
  const onDelete = item => () => {
    eliminarControl(item.id);
  };

  return {
    contenedores,
    onChangeValue,
    value,
    values,
    back,
    next,
    onSubmit,
    onChange,
    items,
    area,
    onChangeArea,
    setValue,
    onAdd,
    onEdit,
    onDelete
  };
};
