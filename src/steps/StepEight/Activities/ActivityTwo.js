import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import { useActivityTwo } from './hooks';

const ActivityTwo = () => {
  const {
    areas_preocupacion,
    onChange,
    area,
    onChangeArea,
    next,
    total,
    back,
    onSubmit
  } = useActivityTwo();

  const acciones = ['Aceptar', 'Aplazar', 'Mitigar', 'Transferir'];

  const probabilidad = ['Alta', 'Media', 'Baja'];

  const grupos = [
    { probabilidad: 0, min: 30, max: 45, grupo: 0 },
    { probabilidad: 0, min: 16, max: 29, grupo: 1 },
    { probabilidad: 0, min: 0, max: 15, grupo: 1 },
    { probabilidad: 1, min: 30, max: 45, grupo: 1 },
    { probabilidad: 1, min: 16, max: 29, grupo: 1 },
    { probabilidad: 1, min: 0, max: 15, grupo: 2 },
    { probabilidad: 2, min: 30, max: 45, grupo: 2 },
    { probabilidad: 2, min: 16, max: 29, grupo: 2 },
    { probabilidad: 2, min: 0, max: 15, grupo: 3 }
  ];

  const grupo =
    grupos.find(g => g.probabilidad === area.probabilidad && total >= g.min && total <= g.max) ||
    {};

  return (
    <div className="step1-activity1">
      <h1>Seleccione el enfoque de mitigación</h1>
      <table className="enfoque">
        <thead>
          <tr>
            <td colSpan="3" className="corner">
              <button onClick={onSubmit}>Guardar</button>
            </td>
            <td colSpan="9" className="select-activo">
              <Select value={area.id} onChange={onChangeArea}>
                {areas_preocupacion.map((a, index) => (
                  <option value={a.id} key={`area-${index}`}>
                    {a.nombre}
                  </option>
                ))}
              </Select>
            </td>
          </tr>
          <tr className="tab-header">
            <th colSpan="4">Puntaje de riesgo</th>
            <th colSpan="4">Probabilidad</th>
            <th colSpan="4">Grupo</th>
          </tr>
          <tr>
            <td colSpan="4">{isNaN(total) ? '-' : total}</td>
            <td colSpan="4">{probabilidad[area.probabilidad] || '-'}</td>
            <td colSpan="4">{`${isNaN(grupo.grupo) ? '-' : `Grupo ${grupo.grupo + 1}`}`}</td>
          </tr>
          <tr className="tab-header">
            <th colSpan="12">
              <div>(9) Mitigación de riesgo</div>
              <div>De acuerdo con el puntaje total de este riesgo, ¿qué acción tomará?</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {acciones.map((accion, index) => {
              const rest = Number.isInteger(area.accion_tomada)
                ? {
                    checked: area.accion_tomada === index
                  }
                : { checked: false };

              return (
                <td key={`accion-${index}`} colSpan="3" className="enfoque-accion">
                  <input
                    {...rest}
                    id={index}
                    type="radio"
                    value={accion}
                    className="form-check-input"
                    name="accion_tomada"
                    onChange={onChange}
                  />
                  <label className="form-check-label" htmlFor={index}>
                    {accion}
                  </label>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={next}>Continuar</Button>
      </div>
    </div>
  );
};

export default ActivityTwo;
