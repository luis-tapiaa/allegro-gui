import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import { useActivityTwo } from './hooks';

const ActivityTwo = () => {
  const {
    next,
    back,
    areas_impacto,
    areas_preocupacion,
    area,
    onChangeArea,
    gravedades
  } = useActivityTwo();

  let total = 0;

  const renderScore = (impacto, index) => {
    const gravedad = gravedades.find(g => g.areaImpactoId === impacto.id) || {};

    let valor = '';
    switch (gravedad.valor) {
      case 0:
        valor = 'Bajo (1)';
        break;
      case 1:
        valor = 'Moderado (2)';
        break;
      case 2:
        valor = 'Alto (3)';
        break;
      default:
        valor = 'Indefinido';
    }

    const score = impacto.prioridad * (gravedad.valor + 1);

    console.log(score)

    total += isNaN(score) ? 0 : score;

    return (
      <tr key={`area-${index}`}>
        <td>{impacto.nombre}</td>
        <td>{impacto.prioridad || '-'}</td>
        <td>{valor}</td>
        <td>{isNaN(score) ? '-' : score}</td>
      </tr>
    );
  };

  return (
    <div className="step1-activity1">
      <h1>Puntaje de riesgo relativo</h1>
      <table className="gravedad">
        <thead>
          <tr className="tab-header">
            <th colSpan="4">Área de preocupacion</th>
          </tr>
          <tr>
            <th colSpan="4" className="select-activo">
              <Select value={area} onChange={onChangeArea}>
                {areas_preocupacion.map((a, index) => (
                  <option value={a.id} key={`area-${index}`}>
                    {a.nombre}
                  </option>
                ))}
              </Select>
            </th>
          </tr>
          <tr className="tab-header">
            <th colSpan="4">
              <div>(8) Gravedad</div>
              <div>
                ¿Qué tan graves son estas consecuencias para ela organización o el propietario por
                área de impacto?
              </div>
            </th>
          </tr>
          <tr className="editable-header">
            <th>Area de impacto</th>
            <th>Prioridad</th>
            <th>Valor de Impacto</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {areas_impacto.map((impacto, index) => renderScore(impacto, index))}
          <tr>
            <td className="td-hidden"></td>
            <td className="td-hidden"></td>
            <td className="td-hidden">Puntaje Total</td>
            <td>{isNaN(total) ? '-' : total}</td>
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
