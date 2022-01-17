import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';
import Icon from '../../../components/Icon';
import { useActivityThree } from './hooks';

const ActivityThree = () => {
  const {
    back,
    next,
    items,
    area,
    onChangeArea,
    values,
    value,
    onChange,
    onChangeValue,
    contenedores,
    setValue,
    onAdd,
    onEdit,
    onDelete
  } = useActivityThree();

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
      <h1>Estrategias de mitigación.</h1>
      <table className="controles">
        <thead>
          <tr>
            <th className="corner">
              <button>Guardar</button>
            </th>
            <th className="select-activo">
              <Select value={area} onChange={onChangeArea}>
                {items.map((a, index) => (
                  <option value={a.id} key={`area-${index}`}>
                    {a.nombre}
                  </option>
                ))}
              </Select>
            </th>
          </tr>
          <tr className="tab-header">
            <th colSpan="2">Para los riesgos que decida mitigar, realice lo siguiente:</th>
          </tr>
          <tr className="control-header">
            <th>¿En qué contenedor aplicará los controles?</th>
            <th>
              <div>
                ¿Qué controles administrativos, técnicos y físicos aplicaría en este contenedor?
              </div>
              <div>¿Qué riesgo residual aún sería aceptado por la organización?</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="select-activo">
              <Select value={value.contenedorId || ''} name="contenedorId" onChange={onChangeValue}>
                <option hidden defaultValue>
                  Selecciona un contenedor
                </option>
                {contenedores.map((contenedor, index) => (
                  <option value={contenedor.id} key={`contenedor-${index}`}>
                    {contenedor.nombre}
                  </option>
                ))}
              </Select>
            </td>
            <td>
              <Textarea
                onChange={onChangeValue}
                value={value.descripcion || ''}
                rows={3}
                placeholder="Controles..."
                className="editable-item text-editable"
                name="descripcion"
              />
            </td>
            <td className="actions-col">
              <div className="editable-actions">
                <button
                  className="action-add"
                  onClick={() => onAdd(value).then(() => setValue({}))}
                >
                  <Icon icon="add" />
                </button>
              </div>
            </td>
          </tr>
          {values.map((item, index) => (
            <tr key={`control-${index}`}>
              <td className="select-activo">
                <Select value={item.contenedorId} name="contenedorId" onChange={onChange(item.id)}>
                  {contenedores.map((contenedor, index) => (
                    <option value={contenedor.id} key={`contenedor-${index}`}>
                      {contenedor.nombre}
                    </option>
                  ))}
                </Select>
              </td>
              <td>
                <Textarea
                  className="editable-item text-editable"
                  name="descripcion"
                  rows={3}
                  onChange={onChange(item.id)}
                  value={item.descripcion}
                />
              </td>
              <td className="actions-col">{actions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={next}>Continuar</Button>
      </div>
    </div>
  );
};

export default ActivityThree;
