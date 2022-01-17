import React from 'react';
import { Button } from 'react-bootstrap';

import { useActivityOne } from './hooks';

const ActivityOne = () => {
  const { next } = useActivityOne();
  return (
    <div className="step1-activity1">
      <h1>Matriz de Riesgo Relativo</h1>
      <table className="matriz-riesgo">
        <thead>
          <tr>
            <th rowSpan="2" colSpan="1">
              Probabilidad
            </th>
            <th colSpan="3">Puntaje de riesgo</th>
          </tr>
          <tr>
            <th>30 a 45</th>
            <th>16 a 29</th>
            <th>0 a 15</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="matriz-header">Alta</td>
            <td className="g1">Grupo 1</td>
            <td className="g2">Grupo 2</td>
            <td className="g2">Grupo 2</td>
          </tr>
          <tr>
            <td className="matriz-header">Media</td>
            <td className="g2">Grupo 2</td>
            <td className="g2">Grupo 2</td>
            <td className="g3">Grupo 3</td>
          </tr>
          <tr>
            <td className="matriz-header">Baja</td>
            <td className="g3">Grupo 3</td>
            <td className="g3">Grupo 3</td>
            <td>Grupo 4</td>
          </tr>
        </tbody>
      </table>

      <table className="grupos-enfoque">
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Enfoque de Mitigación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grupo 1</td>
            <td>Mitigar</td>
          </tr>
          <tr>
            <td>Grupo 2</td>
            <td>Mitigar o Aplazar</td>
          </tr>
          <tr>
            <td>Grupo 3</td>
            <td>Aplazar o Aceptar</td>
          </tr>
          <tr>
            <td>Grupo 4</td>
            <td>Aceptar</td>
          </tr>
        </tbody>
      </table>
      <Button className="continuar-btn" onClick={next}>
        Continuar
      </Button>
    </div>
  );
};

export default ActivityOne;
