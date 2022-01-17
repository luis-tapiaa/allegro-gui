import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAreaContext } from '../../../context/areasImpacto/areaContext';
import { usePreocupacionContext } from '../../../context/areasPreocupacion/preocupacionContext';

export const useActivityTwo = () => {
  const history = useHistory();
  const { areas_impacto } = useAreaContext();
  const { areas_preocupacion, cargarGravedad, gravedades } = usePreocupacionContext();
  const [area, setArea] = useState();
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (areas_preocupacion.length !== 0) {
      setArea(areas_preocupacion[0].id);
      cargarGravedad(areas_preocupacion[0].id);
    }
    // eslint-disable-next-line
  }, [areas_preocupacion]);

  const onSubmit = () => {};

  const onChange = () => {};

  const next = () => {
    history.push('/paso-8');
  };

  const onChangeArea = ({ target }) => {
    setArea(parseInt(target.value, 10));
    cargarGravedad(target.value);
  };

  const back = () => {
    history.push('/paso-7/actividad-1');
  };

  return {
    next,
    back,
    areas_impacto,
    areas_preocupacion,
    area,
    onChangeArea,
    values,
    gravedades,
    onChange,
    onSubmit
  };
};

export const useActivityOne = () => {
  const history = useHistory();
  const { areas_impacto } = useAreaContext();
  const {
    areas_preocupacion,
    cargarGravedad,
    gravedades,
    agregarGravedad,
    actualizarGravedad
  } = usePreocupacionContext();
  const [area, setArea] = useState();
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(
      areas_impacto.map(impacto => {
        const gravedad = gravedades.find(g => g.areaImpactoId === impacto.id) || {};

        return { areaImpactoId: impacto.id, valor: gravedad.valor ?? '' };
      })
    );
    // eslint-disable-next-line
  }, [gravedades]);

  useEffect(() => {
    if (areas_preocupacion.length !== 0) {
      setArea(areas_preocupacion[0].id);
      cargarGravedad(areas_preocupacion[0].id);
    }
  }, [areas_preocupacion]);

  const onChangeArea = ({ target }) => {
    setArea(parseInt(target.value, 10));
    cargarGravedad(target.value);
  };

  const onChange = index => ({ target }) => {
    setValues(prev =>
      prev.map((item, i) => (i === index ? { ...item, valor: parseInt(target.value, 10) } : item))
    );
  };

  const onSubmit = () => {
    const promises = [];

    areas_impacto.forEach(impacto => {
      const gravedad = gravedades.find(g => g.areaImpactoId === impacto.id);

      if (gravedad) {
        promises.push(
          new Promise((resolve, reject) => {
            actualizarGravedad({
              ...gravedad,
              valor: values.find(v => v.areaImpactoId === impacto.id).valor
            })
              .then(resolve)
              .catch(reject);
          })
        );
      } else {
        promises.push(
          new Promise((resolve, reject) => {
            agregarGravedad({
              valor: values.find(v => v.areaImpactoId === impacto.id).valor,
              areaPreocupacionId: area,
              areaImpactoId: impacto.id
            })
              .then(resolve)
              .catch(reject);
          })
        );
      }
    });

    Promise.all(promises).then(() => {
      console.log('OK');
    });
  };

  const next = () => {
    history.push('/paso-7/actividad-2');
  };

  return {
    onChange,
    values,
    areas_preocupacion,
    areas_impacto,
    onSubmit,
    area,
    onChangeArea,
    next
  };
};
