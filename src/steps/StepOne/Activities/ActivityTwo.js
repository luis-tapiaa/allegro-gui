import React from 'react';
import { Button } from 'react-bootstrap';

import { useActivityTwo } from './hooks';
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';
import Icon from '../../../components/Icon';

const ActivityTwo = () => {
  const {
    areas_impacto,
    value,
    onChangeValue,
    selectedArea,
    back,
    onAdd,
    onSubmit,
    onChangeArea,
    onChange,
    onEdit,
    onDelete,
    values
  } = useActivityTwo();

  const renderAreas = (
    <Select value={selectedArea} onChange={onChangeArea}>
      {areas_impacto.map((area, index) => (
        <option value={area.id} key={`area-${index}`}>
          {area.nombre}
        </option>
      ))}
    </Select>
  );

  const actions = item => (
    <div className="editable-actions">
      <button className="action-edit" onClick={onEdit(item)}>
        <Icon icon="check" />
      </button>
      <button onClick={onDelete(item)}>
        <Icon icon="delete" />
      </button>
    </div>
  );

  const renderInput = (name, criterio) => (
    <Textarea
      spellCheck="false"
      name={name}
      value={criterio[name]}
      onChange={e => onChange(e, criterio)}
      className="editable-item text-editable"
    />
  );

  const renderForm = (name, criterio, label) => (
    <Textarea
      spellCheck="false"
      name={name}
      value={criterio[name]}
      onChange={onChangeValue}
      placeholder={label}
      className="editable-item text-editable"
    />
  );

  const renderCriterios = values.map((criterio, index) => (
    <tr key={`criterio-${index}`}>
      <td>{renderInput('nombre', criterio)}</td>
      <td>{renderInput('bajo', criterio)}</td>
      <td>{renderInput('moderado', criterio)}</td>
      <td>{renderInput('alto', criterio)}</td>
      <td className="actions-col">{actions(criterio)}</td>
    </tr>
  ));

  return (
    <div className="step1-activity2">
      <h1>Criterios de medición de riesgo.</h1>
      <table className="criteria-table">
        <thead>
          <tr>
            <th className="corner"></th>
            <th className="s2-a2-areas" colSpan="3">
              {renderAreas}
            </th>
          </tr>
          <tr className="tab-header">
            <th>Área de impacto</th>
            <th>Bajo</th>
            <th>Moderado</th>
            <th>Alto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{renderForm('nombre', value, 'Área de impacto')}</td>
            <td>{renderForm('bajo', value, 'Impacto bajo')}</td>
            <td>{renderForm('moderado', value, 'Impacto moderado')}</td>
            <td>{renderForm('alto', value, 'Impacto alto')}</td>
            <td className="actions-col">
              <div className="editable-actions">
                <button onClick={onAdd} className="action-add">
                  <Icon icon="add" />
                </button>
              </div>
            </td>
          </tr>
          {renderCriterios}
        </tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={onSubmit}>Continuar</Button>
      </div>
    </div>
  );
};

export default ActivityTwo;
