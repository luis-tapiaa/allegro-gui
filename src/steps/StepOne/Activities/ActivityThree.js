import React from 'react';
import { Button } from 'react-bootstrap';
import { useActivityThree } from './hooks';

const ActivityThree = () => {
  const { values, onSubmit, back, onChange } = useActivityThree();

  const renderAreas = values.map((area, index) => (
    <tr key={`area-${index}`}>
      <td className="priority-container">
        <input
          onChange={e => onChange(e)}
          name={area.id}
          value={area.prioridad || ''}
          className="priority"
          type="number"
          min={1}
        />
      </td>
      <td className="priority-label">{area.nombre}</td>
    </tr>
  ));

  return (
    <div className="step1-activity2">
      <h1>Establecimiento de la prioridad de las áreas de impacto.</h1>
      <table className="prioridades-table">
        <thead>
          <tr>
            <th className="corner"></th>
            <th>Prioridad de las áreas de impacto</th>
          </tr>
          <tr className="tab-header-priority">
            <th>Prioridad</th>
            <th>Áreas de impacto</th>
          </tr>
        </thead>
        <tbody>{renderAreas}</tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={onSubmit}>Guardar</Button>
      </div>
    </div>
  );
};

export default ActivityThree;
