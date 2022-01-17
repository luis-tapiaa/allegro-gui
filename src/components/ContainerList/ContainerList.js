import React from 'react';

import Icon from '../Icon';
import Textarea from "../Textarea";
import { useContainerList } from './useContainerList';
import './ContainerList.css';

const ContainerList = ({ tipo = 0, labels = [] }) => {
  const { value, values, onChange, onChangeValue, onAdd, onEdit, onDelete } = useContainerList(
    tipo
  );

  const items = values.filter(v => v.tipo === tipo) || [];

  const internos = items.filter(item => item.localizacion === 0) || [];

  const externos = items.filter(item => item.localizacion === 1) || [];

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
    <table className="contenedores">
      <thead>
        <tr className="tab-header">
          <th colSpan="4">{labels[0] || 'Internos'}</th>
        </tr>
        <tr className="tab-header">
          <th colSpan="1">Nombre</th>
          <th colSpan="2">{labels[1] || 'Descripcion del contenedor'}</th>
          <th>{labels[2] || 'Propietario(s)'}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="1">
            <Textarea
              placeholder="Nombre"
              spellCheck="off"
              className="editable-item text-editable"
              name="nombre"
              value={value[0].nombre}
              onChange={onChangeValue(0)}
            />
          </td>
          <td colSpan="2">
            <Textarea
              placeholder="Descripcion del contenedor"
              spellCheck="off"
              className="editable-item text-editable"
              name="descripcion"
              value={value[0].descripcion}
              onChange={onChangeValue(0)}
            />
          </td>
          <td>
            <Textarea
              placeholder="Propietario del contenedor"
              spellCheck="off"
              className="editable-item text-editable"
              name="propietario"
              value={value[0].propietario}
              onChange={onChangeValue(0)}
            />
          </td>
          <td className="actions-col">
            <div className="editable-actions">
              <button className="action-add" onClick={onAdd(0)}>
                <Icon icon="add" />
              </button>
            </div>
          </td>
        </tr>
        {internos.map((item, index) => (
          <tr key={`contenedor-interno-${index}`}>
            <td colSpan="1">
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="nombre"
                value={item.nombre}
                onChange={onChange(item.id)}
              />
            </td>
            <td colSpan="2">
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="descripcion"
                value={item.descripcion}
                onChange={onChange(item.id)}
              />
            </td>
            <td>
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="propietario"
                value={item.propietario}
                onChange={onChange(item.id)}
              />
            </td>
            <td className="actions-col">{actions(item)}</td>
          </tr>
        ))}
      </tbody>
      <thead>
        <tr className="tab-header">
          <th colSpan="4">{labels[3] || 'Externos'}</th>
        </tr>
        <tr className="tab-header">
          <th colSpan="1">Nombre</th>
          <th colSpan="2">{labels[4] || 'Descripcion del contenedor'}</th>
          <th>{labels[5] || 'Propietario(s)'}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="1">
            <Textarea
              placeholder="Nombre"
              spellCheck="off"
              className="editable-item text-editable"
              name="nombre"
              value={value[1].nombre}
              onChange={onChangeValue(1)}
            />
          </td>
          <td colSpan="2">
            <Textarea
              spellCheck="off"
              placeholder="Descripcion del contenedor"
              className="editable-item text-editable"
              name="descripcion"
              value={value[1].descripcion}
              onChange={onChangeValue(1)}
            />
          </td>
          <td>
            <Textarea
              spellCheck="off"
              placeholder="Propietario del contenedor"
              className="editable-item text-editable"
              name="propietario"
              value={value[1].propietario}
              onChange={onChangeValue(1)}
            />
          </td>
          <td className="actions-col">
            <div className="editable-actions">
              <button className="action-add" onClick={onAdd(1)}>
                <Icon icon="add" />
              </button>
            </div>
          </td>
        </tr>
        {externos.map((item, index) => (
          <tr key={`contenedor-externo-${index}`}>
            <td colSpan="1">
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="nombre"
                value={item.nombre}
                onChange={onChange(item.id)}
              />
            </td>
            <td colSpan="2">
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="descripcion"
                value={item.descripcion}
                onChange={onChange(item.id)}
              />
            </td>
            <td>
              <Textarea
                spellCheck="off"
                className="editable-item text-editable"
                name="propietario"
                value={item.propietario}
                onChange={onChange(item.id)}
              />
            </td>
            <td className="actions-col">{actions(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContainerList;
