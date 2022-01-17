import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../../context/appContext';
import { useActivoContext } from '../../../context/activosCriticos/activoContext';
import { usePreocupacionContext } from '../../../context/areasPreocupacion/preocupacionContext';

export const useActivityOne = step => {
  const history = useHistory();
  const { id } = useAppContext();
  const { activos_criticos } = useActivoContext();
  const { areas_preocupacion, eliminar, agregar, actualizar } = usePreocupacionContext();
  const [activo, setActivo] = useState();
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (activos_criticos.length !== 0) {
      setActivo(activos_criticos[0].id);
    }
  }, [activos_criticos]);

  useEffect(() => {
    setValues(areas_preocupacion);
  }, [areas_preocupacion]);

  const onChange = ({ target }) => {
    const { name, value } = target;

    setValues(prev =>
      prev.map(item => (item.id === parseInt(name, 10) ? { ...item, nombre: value } : item))
    );
  };

  const onChangeActivo = ({ target }) => {
    setActivo(parseInt(target.value, 10));
  };

  const next = () => {
    if (step === 4) {
      history.push('/paso-4/actividad-2');
    } else {
      history.push('/paso-5/actividad-3');
    }
  };

  const onAdd = value => {
    if (value.trim() !== '') {
      return agregar({ nombre: value, usuarioId: id, activoCriticoId: activo });
    }
  };
  const onEdit = item => () => {
    if (item.nombre.trim() !== '') {
      actualizar(item);
    } else {
      console.log('NO SE BORRARA');
    }
  };
  const onDelete = item => () => {
    eliminar(item.id);
  };

  return {
    areas_preocupacion,
    activos_criticos,
    activo,
    next,
    onAdd,
    onEdit,
    onDelete,
    onChange,
    onChangeActivo,
    values,
    value,
    setValue
  };
};

export const useActivityTwo = step => {
  const history = useHistory();
  const { activos_criticos } = useActivoContext();
  const { areas_preocupacion, actualizar } = usePreocupacionContext();

  const [activo, setActivo] = useState(0);
  const [area, setArea] = useState({});

  useEffect(() => {
    if (areas_preocupacion.length !== 0) {
      setArea(areas_preocupacion[0]);
    }
  }, [areas_preocupacion]);

  useEffect(() => {
    if (activos_criticos.length !== 0) {
      setActivo(activos_criticos[0].id);
    }
  }, [activos_criticos]);

  const onChangeArea = ({ target }) => {
    setArea(areas_preocupacion.find(area => area.id === parseInt(target.value, 10)) || {});
  };

  const onChangeActivo = ({ target }) => {
    const nextActivo = parseInt(target.value, 10);
    setActivo(nextActivo);
    const selectedValues = areas_preocupacion.filter(a => a.activoCriticoId === nextActivo);
    if (selectedValues.length !== 0) {
      setArea(selectedValues[0]);
    } else {
      setArea({});
    }
  };

  const onChange = ({ target }) => {
    const { name, value, checked } = target;

    if (value === 'on') {
      if (checked) {
        setArea(prev => ({ ...prev, resultado: (prev.resultado || 0) + parseInt(name, 10) }));
      } else {
        setArea(prev => ({ ...prev, resultado: (prev.resultado || 0) - parseInt(name, 10) }));
      }
    } else {
      setArea(prev => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = () => {
    actualizar(area);
  };

  const next = () => {
    if (step === 4) {
      history.push('/paso-5');
    } else {
      history.push('/paso-6');
    }
  };
  const back = () => {
    if (step === 4) {
      history.push('/paso-4/actividad-1');
    } else {
      history.push('/paso-5/actividad-2');
    }
  };

  return {
    onChange,
    onSubmit,
    onChangeActivo,
    onChangeArea,
    activos_criticos,
    areas_preocupacion,
    activo,
    area,
    next,
    back
  };
};
