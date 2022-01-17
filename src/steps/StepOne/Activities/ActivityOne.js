import React from 'react';
import { Button } from 'react-bootstrap';

import EditableList from '../../../components/EditableList/EditableList';
import { useActivityOne } from './hooks';

const ActivityOne = () => {
  const { areas_impacto, onSubmit, ...rest } = useActivityOne();

  const options = [
    'Productividad.',
    'Seguridad y salud.',
    'Reputación/Confianza del cliente.',
    'Financiero.',
    'Multas/Penas legales.'
  ];

  const remainingOptions = [];

  options.forEach(option => {
    const area = areas_impacto.find(a => a.nombre === option);

    if (!area) {
      remainingOptions.push(option);
    }
  });

  return (
    <div className="step1-activity1">
      <EditableList
        options={remainingOptions}
        title="Definición de áreas de impacto."
        header="Áreas de impacto"
        items={areas_impacto}
        label="Nueva área"
        {...rest}
      />
      <Button onClick={onSubmit} className="continuar-btn">
        Continuar
      </Button>
    </div>
  );
};

export default ActivityOne;
