import React from 'react';
import { Button } from 'react-bootstrap';

import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';
import { useActivityTwo } from './hooks';

const ActivityTwo = ({ step = 4 }) => {
  const {
    activos_criticos,
    areas_preocupacion,
    activo,
    area,
    next,
    onChange,
    onChangeActivo,
    onChangeArea,
    onSubmit,
    back
  } = useActivityTwo(step);

  let resultado = Array.from((area.resultado || 0).toString(2).padStart(4, '0')).map(a =>
    parseInt(a, 10)
  );

  const selectedValues = areas_preocupacion.filter(a => a.activoCriticoId === activo);

  return (
    <div className="step1-activity1">
      <h1>Riesgos de los activos de información</h1>
      <table className="preocupacion">
        <thead>
          <tr>
            <th className="corner" colSpan="3">
              <button onClick={onSubmit}>Guardar</button>
            </th>
            <th colSpan="9">Riesgo del activo de información</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="10" colSpan="1" className="area-vertical">
              <div className="rotate-text">Amenaza</div>
            </td>
            <td colSpan="2" className="area-title">
              Activo de información
            </td>
            <td colSpan="9" className="select-activo">
              <Select value={activo} onChange={onChangeActivo}>
                {activos_criticos.map((activo, index) => (
                  <option value={activo.id} key={`option-${index}`}>
                    {activo.nombre}
                  </option>
                ))}
              </Select>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="area-title">
              Área de preocupación
            </td>
            <td colSpan="9" className="select-activo">
              <Select value={area.id} onChange={onChangeArea}>
                {selectedValues.map((area, index) => (
                  <option value={area.id} key={`area-${index}`}>
                    {area.nombre}
                  </option>
                ))}
              </Select>
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="area-header">
              <div>(1) Actor</div>
              <div>¿Quién podría explotar la debilidad?</div>
            </td>
            <td colSpan="6">
              <Textarea
                placeholder="Actor..."
                className="editable-item text-editable"
                name="actor"
                rows={2}
                value={area.actor || ''}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="area-header">
              <div>(2) Medios</div>
              <div>¿Cómo lo haría el actor? ¿Qué harían?</div>
            </td>
            <td colSpan="6">
              <Textarea
                placeholder="Medios..."
                className="editable-item text-editable"
                name="medio"
                rows={2}
                value={area.medio || ''}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="area-header">
              <div>(3) Motivo</div>
              <div>¿Cuál es la razón del actor para hacerlo?</div>
            </td>
            <td colSpan="6">
              <Textarea
                placeholder="Motivo..."
                className="editable-item text-editable"
                name="motivo"
                rows={2}
                value={area.motivo || ''}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="2" colSpan="5" className="area-header">
              <div>(4) Resultado</div>
              <div>¿Cuál sería el efecto resultante sobre el activo de información?</div>
            </td>
            <td colSpan="3" className="res-check">
              <input name="1" type="checkbox" checked={resultado[3]} onChange={onChange} />
              <label>Divulgación</label>
            </td>
            <td colSpan="3" className="res-check">
              <input name="2" type="checkbox" checked={resultado[2]} onChange={onChange} />
              <label>Destrucción</label>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="res-check">
              <input name="4" type="checkbox" checked={resultado[1]} onChange={onChange} />
              <label>Modificación</label>
            </td>
            <td colSpan="3" className="res-check">
              <input name="8" type="checkbox" checked={resultado[0]} onChange={onChange} />
              <label>Interrupción</label>
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="area-header">
              <div>(5) Requerimientos de seguridad</div>
              <div>
                ¿Cómo serían violentados los requisitos de seguridad del activo de información?
              </div>
            </td>
            <td colSpan="6">
              <Textarea
                placeholder="Requerimientos de seguridad..."
                className="editable-item text-editable"
                name="requerimientos"
                value={area.requerimientos || ''}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="area-header">
              <div>(6) Probabilidad</div>
              <div>¿Cuál es la probabilidad de que ocurra este escenario de amenaza?</div>
            </td>
            <td colSpan="2" className="res-check">
              <input
                id="alta"
                checked={parseInt(area.probabilidad, 10) === 0}
                value="0"
                name="probabilidad"
                type="radio"
                onChange={onChange}
              />
              <label htmlFor="alta">Alta</label>
            </td>
            <td colSpan="2" className="res-check">
              <input
                id="media"
                checked={parseInt(area.probabilidad, 10) === 1}
                value="1"
                name="probabilidad"
                type="radio"
                onChange={onChange}
              />
              <label htmlFor="media">Media</label>
            </td>
            <td colSpan="2" className="res-check">
              <input
                id="baja"
                checked={parseInt(area.probabilidad, 10) === 2}
                value="2"
                name="probabilidad"
                type="radio"
                onChange={onChange}
              />
              <label htmlFor="baja">Baja</label>
            </td>
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

/*
 */

export default ActivityTwo;
