import React from 'react';
import { Button } from 'react-bootstrap';

import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';
import Icon from '../../../components/Icon';
import { useActivityOne } from './hooks';

const ActivityOne = () => {
  const {
    areas_preocupacion,
    area,
    onChangeArea,
    value,
    values,
    setValue,
    onAdd,
    onChange,
    onEdit,
    onDelete,
    onSubmit,
    next
  } = useActivityOne();

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
      <h1>Consecuencias de los escenarios de amenaza</h1>

      <table className="consecuencias-list">
        <thead>
          <tr>
            <th className="editable-header">Área de preocupación</th>
          </tr>
          <tr>
            <th className="select-activo">
              <Select value={area.id} onChange={onChangeArea}>
                {areas_preocupacion.map((a, index) => (
                  <option value={a.id} key={`area-${index}`}>
                    {a.nombre}
                  </option>
                ))}
              </Select>
            </th>
          </tr>
          <tr className="tab-header">
            <th>
              <div>(7) Consecuencias</div>
              <div>
                ¿Cuáles son las consecuencias para la organización o el propietario del activo de
                información como resultado de la salida y el incumplimiento de los requisitos de
                seguridad?
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Textarea
                className="editable-item text-editable"
                name="nombre"
                rows={3}
                placeholder="Nueva consecuencia"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </td>
            <td className="actions-col">
              <div className="editable-actions">
                <button
                  className="action-add"
                  onClick={() => onAdd(value).then(() => setValue(''))}
                >
                  <Icon icon="add" />
                </button>
              </div>
            </td>
          </tr>
          {values.map((item, index) => (
            <tr key={`item-${index}`}>
              <td>
                <Textarea
                  rows={3}
                  className="editable-item  text-editable"
                  name={item.id}
                  value={item.descripcion}
                  onChange={onChange}
                />
              </td>
              <td className="actions-col">{actions(item)}</td>
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
