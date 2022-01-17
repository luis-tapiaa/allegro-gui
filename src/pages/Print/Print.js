import React from 'react';
import { Button } from 'react-bootstrap';

import { usePrint } from './usePrint';
import './Print.css';

const Print = () => {
  const {
    onSubmit,
    hojas,
    onChange,
    cont,
    checkAreas,
    checkActivos,
    checkPre,
    activos_criticos,
    areas_impacto,
    areas_preocupacion,
    loading
  } = usePrint();

  const renderAreas = areas_impacto.map((a, i) => (
    <li key={i}>
      <input
        type="checkbox"
        id={`area-${i}`}
        name={i}
        value="0"
        onChange={onChange}
        checked={checkAreas[i] || false}
      />
      <label htmlFor={`area-${i}`}>{a.nombre}</label>
    </li>
  ));

  const renderActivos = activos_criticos.map((a, i) => (
    <li key={i}>
      <input
        type="checkbox"
        id={`activo-${i}`}
        name={i}
        value="2"
        onChange={onChange}
        checked={checkActivos[i] || false}
      />
      <label htmlFor={`activo-${i}`}>{a.nombre}</label>
    </li>
  ));

  const renderPre = activos_criticos.map((a, i) => (
    <li key={i}>
      <input
        type="checkbox"
        id={`area-preocupacion-${i}`}
        name={i}
        value="4"
        onChange={onChange}
        checked={checkPre[i] || false}
      />
      <label htmlFor={`area-preocupacion-${i}`}>{a.nombre}</label>
    </li>
  ));

  return (
    <div className="step1-activity1">
      <h1>Generar reporte.</h1>
      <p>Selecciona las hojas que desea imprimir.</p>
      <ul className="print-list">
        <li>
          <input type="checkbox" id="worksheet1" name="0" checked={hojas[0]} onChange={onChange} />
          <label htmlFor="worksheet1">Criterios de medición de riesgo</label>
          <ul>{renderAreas}</ul>
        </li>
        <li>
          <input type="checkbox" id="worksheet7" name="1" checked={hojas[1]} onChange={onChange} />
          <label htmlFor="worksheet7">Prioridad de las áreas de impacto</label>
        </li>
        <li>
          <input type="checkbox" id="worksheet8" name="2" checked={hojas[2]} onChange={onChange} />
          <label htmlFor="worksheet8">Perfil del activo crítico de información</label>
          <ul>{renderActivos}</ul>
        </li>
        <li>
          <input type="checkbox" id="worksheet9" name="3" checked={hojas[3]} onChange={onChange} />
          <label htmlFor="worksheet9">Mapa de entorno de riesgo de activos de información</label>
          <ul>
            <li>
              <input
                type="checkbox"
                id="1"
                name="0"
                value="3"
                checked={cont[0]}
                onChange={onChange}
              />
              <label htmlFor="1">Tecnico</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="2"
                name="1"
                value="3"
                checked={cont[1]}
                onChange={onChange}
              />
              <label htmlFor="1">Fisico</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="3"
                name="2"
                value="3"
                checked={cont[2]}
                onChange={onChange}
              />
              <label htmlFor="1">Humano</label>
            </li>
          </ul>
        </li>
        <li>
          <input type="checkbox" id="worksheet10" name="4" checked={hojas[4]} onChange={onChange} />
          <label htmlFor="worksheet10">Hoja de trabajo de riesgo de activos de información</label>
          <ul>{renderPre}</ul>
        </li>
      </ul>
      <Button className="continuar-btn" onClick={onSubmit}>
        Imprimir
      </Button>
    </div>
  );
};

export default Print;
