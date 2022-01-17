import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import { useActivityOne } from './hooks';

const StepSeven = () => {
  const {
    onChange,
    values,
    areas_preocupacion,
    areas_impacto,
    onSubmit,
    area,
    onChangeArea,
    next
  } = useActivityOne();

  const opciones = ['Bajo', 'Moderado', 'Alto'];

  return (
    <div className="step1-activity1">
      <h1>Valores de Impacto</h1>
      <table className="valores-impacto">
        <thead>
          <tr>
            <th className="corner">
              <button onClick={onSubmit}>Guardar</button>
            </th>
            <th className="select-activo">
              <Select value={area} onChange={onChangeArea}>
                {areas_preocupacion.map((a, index) => (
                  <option value={a.id} key={`area-${index}`}>
                    {a.nombre}
                  </option>
                ))}
              </Select>
            </th>
          </tr>
          <tr className="editable-header">
            <th>Area de impacto</th>
            <th>Valor de Impacto</th>
          </tr>
        </thead>
        <tbody>
          {areas_impacto.map((area, index) => (
            <tr key={`area-${index}`}>
              <td>{area.nombre}</td>
              <td>
                <select value={values[index]?.valor} onChange={onChange(index)}>
                  <option hidden defaultValue>
                    Selecciona un valor
                  </option>
                  {opciones.map((opcion, i) => (
                    <option value={i} key={`opcion-${i}`}>
                      {opcion}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={next} className="continuar-btn">
        Continuar
      </Button>
    </div>
  );
};

export default StepSeven;
