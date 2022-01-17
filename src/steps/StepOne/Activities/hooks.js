import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../../context/appContext';
import { useAreaContext } from '../../../context/areasImpacto/areaContext';

export const useActivityOne = () => {
  const history = useHistory();

  const { id } = useAppContext();
  const { areas_impacto, eliminar, agregar, actualizar } = useAreaContext();

  const onAdd = item => {
    if (item.trim() !== '') {
      return agregar({ nombre: item, usuarioId: id });
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

  const onSubmit = () => {
    history.push('/paso-1/actividad-2');
  };

  return { areas_impacto, onSubmit, onAdd, onEdit, onDelete };
};

const defaultItem = {
  nombre: '',
  bajo: '',
  moderado: '',
  alto: ''
};

export const useActivityTwo = () => {
  const history = useHistory();
  const [selectedArea, setArea] = useState();
  const {
    areas_impacto,
    criterios,
    cargarCriterio,
    actualizarCriterio,
    eliminarCriterio,
    agregarCriterio
  } = useAreaContext();
  const [values, setValues] = useState([]);
  const [value, setValue] = useState(defaultItem);

  useEffect(() => {
    if (areas_impacto.length !== 0) {
      cargarCriterio(areas_impacto[0].id);
      setArea(areas_impacto[0].id);
    }
  }, [areas_impacto]);

  useEffect(() => {
    setValues(criterios);
  }, [criterios]);

  const onChangeArea = ({ target }) => {
    setArea(target.value);
    cargarCriterio(target.value);
  };

  const back = () => {
    history.push('/paso-1/actividad-1');
  };

  const onSubmit = () => {
    history.push('/paso-1/actividad-3');
  };

  const onChange = ({ target }, criterio) => {
    setValues(prev =>
      prev.map(item => (item.id === criterio.id ? { ...item, [target.name]: target.value } : item))
    );
  };

  const onChangeValue = ({ target }) => {
    setValue(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onAdd = () => {
    if (value.nombre.trim() !== '') {
      agregarCriterio({ ...value, areaImpactoId: selectedArea }).then(() => {
        setValue(defaultItem);
      });
    }
  };

  const onEdit = item => () => {
    if (item.nombre.trim() !== '') {
      actualizarCriterio(item);
    } else {
      console.log('NO SE PUEDE');
    }
  };

  const onDelete = item => () => {
    eliminarCriterio(item.id);
  };

  return {
    selectedArea,
    value,
    onChangeValue,
    areas_impacto,
    back,
    onSubmit,
    onChangeArea,
    onChange,
    onEdit,
    onAdd,
    onDelete,
    values
  };
};

export const useActivityThree = () => {
  const history = useHistory();
  const { areas_impacto, actualizar } = useAreaContext();
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(areas_impacto);
  }, [areas_impacto]);

  const onSubmit = () => {
    const promises = [];
    const usedValues = values.map(area => parseInt(area.prioridad, 10));
    values.forEach(area => {
      const prev = areas_impacto.find(a => a.id === area.id);
      const prioridad = parseInt(area.prioridad, 10);

      if (prev.prioridad !== prioridad) {
        if (prioridad > 0 && prioridad <= areas_impacto.length) {
          const ocurrencias = usedValues.filter(u => u === prioridad) || [];
          
          if (ocurrencias.length === 1) {
            promises.push(
              new Promise((resolve, reject) => {
                actualizar(area).then(resolve).catch(reject);
              })
            );
          }
        }
      }
    });

    Promise.all(promises).then(() => {
      history.push('/paso-2');
    });
  };

  const back = () => {
    history.push('/paso-1/actividad-2');
  };

  const onChange = ({ target }) => {
    setValues(prev =>
      prev.map(area =>
        area.id === parseInt(target.name, 10) ? { ...area, prioridad: target.value } : area
      )
    );
  };

  return { values, back, onSubmit, onChange };
};
