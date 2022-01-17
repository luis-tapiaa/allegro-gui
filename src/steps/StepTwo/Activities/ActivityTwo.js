import React from 'react';
import { Button } from 'react-bootstrap';

import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';
import { useActivityTwo } from './hooks';

const ActivityTwo = () => {
  const {
    activos_criticos,
    selectedActivo,
    values,
    onChange,
    onChangeRequerimiento,
    onChangeActivo,
    back,
    next,
    onSubmit
  } = useActivityTwo();

  const renderInput = name => (
    <Textarea
      className="editable-item text-editable"
      rows={3}
      name={name}
      value={selectedActivo[name] || ''}
      onChange={onChange}
    />
  );

  const renderRequerimiento = (name, index) => {
    const value = values.find(v => v.nombre === name) || {};

    return (
      <Textarea
        className="editable-item text-editable"
        onChange={onChangeRequerimiento}
        id={name}
        name={index === 2 ? 'descripcion2' : 'descripcion1'}
        value={(index === 2 ? value.descripcion2 : value.descripcion1) || ''}
      />
    );
  };

  const renderRadio = (name, label) => {
    const { requerimiento_importante: ri } = selectedActivo;
    const value = values.find(v => v.nombre === name) || {};

    const rest = ri ? { checked: ri === value.id || ri === value.nombre } : { checked: false };

    return (
      <td colSpan="3" className="radio-req">
        <input
          {...rest}
          type="radio"
          id={name}
          value={name}
          onChange={onChange}
          className="form-check-input"
          name="requerimiento_importante"
        />
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      </td>
    );
  };

  return (
    <div className="step1-activity2">
      <h1>Perfil de los activos críticos.</h1>
      <table>
        <thead>
          <tr>
            <th className="corner" colSpan="2">
              <button onClick={onSubmit}>Guardar perfil</button>
            </th>
            <th colSpan="10">PERFIL DEL ACTIVO CRÍTICO DE INFORMACIÓN</th>
          </tr>
          <tr className="tab-header">
            <th colSpan="2">
              <div>(1) Activo Crítico</div>
              <div>¿Cual es el activo de información crítico?</div>
            </th>
            <th colSpan="5">
              <div>(2) Razón de selección</div>
              <div>¿Por qué este activo de información es importante para la organización?</div>
            </th>
            <th colSpan="5">
              <div>(3) Descripción</div>
              <div>¿Cuál es la descripción acordada de este activo de información?</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <Select value={selectedActivo.id} onChange={onChangeActivo}>
                {activos_criticos.map((activo, index) => (
                  <option value={activo.id} key={`activo-${index}`}>
                    {activo.nombre}
                  </option>
                ))}
              </Select>
            </td>
            <td colSpan="5">{renderInput('justificacion')}</td>
            <td colSpan="5">{renderInput('descripcion')}</td>
          </tr>
        </tbody>
        <thead>
          <tr className="tab-header">
            <th colSpan="12">
              <div>(4) Propietario(s)</div>
              <div>¿Quién es el propietario de este activo de información?</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12">{renderInput('propietario')}</td>
          </tr>
        </tbody>
        <thead>
          <tr className="tab-header">
            <th colSpan="12">
              <div>(5) Requerimientos de seguridad</div>
              <div>
                ¿Cuáles son los requerimientos de seguridad para este activo de información?
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="s2-a2-row">
            <td colSpan="2">Confidencialidad</td>
            <td colSpan="5">
              Solo el personal autorizado puede ver este activo de información, de la siguiente
              manera:
            </td>
            <td colSpan="5">{renderRequerimiento('confidentiality')}</td>
          </tr>
          <tr className="s2-a2-row">
            <td colSpan="2">Integridad</td>
            <td colSpan="5">
              Solo el personal autorizado puede modificar este activo de información, de la
              siguiente manera:
            </td>
            <td colSpan="5">{renderRequerimiento('integrity')}</td>
          </tr>
          <tr className="s2-a2-row">
            <td colSpan="2" rowSpan="2">
              Disponibilidad
            </td>
            <td colSpan="5">
              Este activo debe estar disponible para que este personal realice su trabajo, de la
              siguiente manera:
            </td>
            <td colSpan="5">{renderRequerimiento('availability')}</td>
          </tr>
          <tr className="s2-a2-row">
            <td colSpan="5">
              Este activo debe estar disponible durante _____ horas, _____ días/semana, _____
              semanas/año.
            </td>
            <td colSpan="5">{renderRequerimiento('availability', 2)}</td>
          </tr>
          <tr className="s2-a2-row">
            <td colSpan="2">Otro</td>
            <td colSpan="5">
              Este activo tiene requisitos especiales de protección de cumplimiento normativo, como
              se indica a continuación:
            </td>
            <td colSpan="5">{renderRequerimiento('other')}</td>
          </tr>
        </tbody>
        <thead>
          <tr className="tab-header">
            <th colSpan="12">
              <div>(6) Requerimiento de seguridad más importante</div>
              <div>
                ¿Cuál es el requerimiento de seguridad más importante para este activo de
                información?
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {renderRadio('confidentiality', 'Confidencialidad')}
            {renderRadio('integrity', 'Integridad')}
            {renderRadio('availability', 'Disponibilidad')}
            {renderRadio('other', 'Otro')}
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
