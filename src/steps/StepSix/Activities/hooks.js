import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { usePreocupacionContext } from '../../../context/areasPreocupacion/preocupacionContext';

export const useActivityOne = () => {
  const history = useHistory();
  const {
    areas_preocupacion,
    consecuencias,
    cargarConsecuencia,
    actualizarConsecuencia: actualizar,
    agregarConsecuencia: agregar,
    eliminarConsecuencia: eliminar
  } = usePreocupacionContext();
  const [area, setArea] = useState({});
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (areas_preocupacion.length !== 0) {
      setArea(areas_preocupacion[0]);
      cargarConsecuencia(areas_preocupacion[0].id);
    }
  }, [areas_preocupacion]);

  useEffect(() => {
    setValues(consecuencias);
  }, [consecuencias]);

  const onChangeArea = ({ target }) => {
    const selectedArea =
      areas_preocupacion.find(area => area.id === parseInt(target.value, 10)) || {};
    setArea(selectedArea);
    cargarConsecuencia(selectedArea.id);
  };

  const onAdd = item => {
    if (item.trim() !== '') {
      return agregar({ descripcion: item, areaPreocupacionId: area.id });
    }
  };

  const onEdit = item => () => {
    if (item.descripcion.trim() !== '') {
      actualizar(item);
    }
  };

  const onDelete = item => () => {
    eliminar(item.id);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues(prev =>
      prev.map(item => (item.id === parseInt(name, 10) ? { ...item, descripcion: value } : item))
    );
  };

  const next = () => {
    history.push('/paso-7');
  };

  return {
    areas_preocupacion,
    area,
    onChangeArea,
    value,
    values,
    setValue,
    onAdd,
    onChange,
    onEdit,
    onDelete,
    next
  };
};
