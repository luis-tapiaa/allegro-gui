import React from 'react';
import { Button } from 'react-bootstrap';

import EditableList from '../../../components/EditableList/EditableList';
import { useActivityOne } from './hooks';

const ActivityOne = () => {
  const { activos_criticos, onSubmit, ...rest } = useActivityOne();

  return (
    <div className="step1-activity1">
      <EditableList
        header="Activos críticos"
        title="Determinar activos críticos."
        label="Nuevo activo"
        items={activos_criticos}
        {...rest}
      />
      <Button onClick={onSubmit} className="continuar-btn">
        Continuar
      </Button>
    </div>
  );
};

export default ActivityOne;
