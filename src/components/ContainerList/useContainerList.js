import { useEffect, useState } from 'react';

import { useAppContext } from '../../context/appContext';
import { useContenedorContext } from '../../context/contenedores/contenedorContext';

const defaultItem = (tipo = 0, localizacion = 0, usuarioId = 0) => ({
  tipo,
  localizacion,
  nombre: '',
  descripcion: '',
  propietario: '',
  usuarioId
});

export const useContainerList = tipo => {
  const { id } = useAppContext();
  const { contenedores, actualizar, agregar, eliminar } = useContenedorContext();
  const [value, setValue] = useState([defaultItem(tipo, 0, id), defaultItem(tipo, 1, id)]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (contenedores.length !== 0) {
      setValues(contenedores);
    }
  }, [contenedores]);

  const onChange = id => ({ target }) => {
    const { name, value } = target;
    console.log(name, value, id);
    setValues(prev => prev.map(item => (item.id === id ? { ...item, [name]: value } : item)));
  };

  const onChangeValue = index => ({ target }) => {
    setValue(prev =>
      prev.map((item, i) => (i === index ? { ...item, [target.name]: target.value } : item))
    );
  };

  const onAdd = index => () => {
    const item = value[index];
    if (item.nombre.trim() !== '') {
      agregar(item).then(() => {
        setValue([defaultItem(tipo, 0, id), defaultItem(tipo, 1, id)]);
      });
    }
  };
  const onEdit = item => () => {
    if (item.nombre.trim() !== '') {
      actualizar(item);
    }
  };
  const onDelete = item => () => {
    eliminar(item.id);
  };

  return { value, values, onChange, onChangeValue, onAdd, onEdit, onDelete };
};
