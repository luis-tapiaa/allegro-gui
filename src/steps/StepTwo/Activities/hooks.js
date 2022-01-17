import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../../context/appContext';
import { useActivoContext } from '../../../context/activosCriticos/activoContext';

export const useActivityOne = () => {
  const history = useHistory();
  const { id } = useAppContext();
  const { activos_criticos, eliminar, agregar, actualizar } = useActivoContext();

  const onSubmit = () => {
    history.push('/paso-2/actividad-2');
  };

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

  return { activos_criticos, onSubmit, onAdd, onEdit, onDelete };
};

export const useActivityTwo = () => {
  const history = useHistory();
  const {
    activos_criticos,
    requerimientos,
    cargarRequerimiento,
    agregarRequerimiento,
    actualizarRequerimiento,
    actualizar
  } = useActivoContext();
  const [selectedActivo, setActivo] = useState({});
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (activos_criticos.length !== 0) {
      setActivo(activos_criticos[0]);
      cargarRequerimiento(activos_criticos[0].id);
    }
  }, [activos_criticos]);

  useEffect(() => {
    if (requerimientos.length === 0) {
      const nextValues = ['confidentiality', 'integrity', 'availability', 'other'].map(req => ({
        nombre: req,
        descripcion1: '',
        descripcion2: ''
      }));
      setValues(nextValues);
    } else {
      setValues(requerimientos);
    }
  }, [requerimientos]);

  const onSubmit = () => {
    const promises = [];
    if (requerimientos.length === 0) {
      console.log('CREAR VALUES');
      values.forEach(value => {
        promises.push(
          new Promise((resolve, reject) => {
            agregarRequerimiento({ ...value, activoCriticoId: selectedActivo.id })
              .then(resolve)
              .catch(reject);
          })
        );
      });
    } else {
      console.log('EDITAR VALUES');
      values.forEach(value => {
        promises.push(
          new Promise((resolve, reject) => {
            actualizarRequerimiento(value).then(resolve).catch(reject);
          })
        );
      });
    }

    Promise.all(promises).then(res => {
      const { requerimiento_importante, ...activo } = selectedActivo;
      if (requerimiento_importante) {
        const requerimiento = res.find(r => r.nombre === requerimiento_importante) || {};
        activo.requerimiento_importante = requerimiento.id;
      }
      actualizar(activo);
    });
  };

  const onChangeRequerimiento = ({ target }) => {
    const { id, name, value } = target;
    setValues(prev => prev.map(req => (req.nombre === id ? { ...req, [name]: value } : req)));
  };

  const onChangeActivo = ({ target }) => {
    setActivo(activos_criticos.find(activo => activo.id === parseInt(target.value, 10)));
    cargarRequerimiento(target.value);
  };
  const onChange = ({ target }) => {
    setActivo(prev => ({ ...prev, [target.name]: target.value }));
  };

  const back = () => {
    history.push('/paso-2/actividad-1');
  };

  const next = () => {
    history.push('/paso-3');
  };

  return {
    activos_criticos,
    values,
    onChangeRequerimiento,
    selectedActivo,
    onChange,
    onChangeActivo,
    back,
    next,
    onSubmit
  };
};
