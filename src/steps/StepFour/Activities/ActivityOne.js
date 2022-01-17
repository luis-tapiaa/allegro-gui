import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import Icon from '../../../components/Icon';
import Textarea from '../../../components/Textarea';
import { useActivityOne } from './hooks';

const ActivityOne = ({ step = 4 }) => {
  const {
    activos_criticos,
    activo,
    next,
    onAdd,
    onEdit,
    onDelete,
    onChange,
    onChangeActivo,
    values,
    value,
    setValue
  } = useActivityOne(step);

  const selectedValues = values.filter(val => val.activoCriticoId === activo);

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

  return (
    <div className="step1-activity1">
      <h1>Definir las áreas de preocupación.</h1>

      <table className="editable-list list-large">
        <thead>
          <tr className="editable-header">
            <th colSpan="2">Activo crítico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2" className="select-activo">
              <Select value={activo} onChange={onChangeActivo}>
                {activos_criticos.map((activo, index) => (
                  <option value={activo.id} key={`option-${index}`}>
                    {activo.nombre}
                  </option>
                ))}
              </Select>
            </th>
          </tr>
        </tbody>
        <thead>
          <tr className="editable-header">
            <th colSpan="2">Áreas de preocupación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Textarea
                autoComplete="off"
                className="editable-item"
                name="nombre"
                rows={2}
                placeholder="Nueva área de preocupación"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </td>
            <td>
              <div className="editable-actions">
                <button
                  className="action-add"
                  onClick={() => {
                    const response = onAdd(value);

                    if (response) {
                      response.then(() => setValue(''));
                    }
                  }}
                >
                  <Icon icon="add" />
                </button>
              </div>
            </td>
          </tr>
          {selectedValues.map((item, index) => (
            <tr key={`item-${index}`}>
              <td>
                <Textarea
                  className="editable-item"
                  name={item.id}
                  rows={2}
                  value={item.nombre}
                  onChange={onChange}
                />
              </td>
              <td>{actions(item)}</td>
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

export default ActivityOne;
