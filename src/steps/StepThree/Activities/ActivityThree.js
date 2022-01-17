import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ContainerList from '../../../components/ContainerList/ContainerList';

const ActivityThree = () => {
  const history = useHistory();

  const labels = [
    'Personal interno',
    'Nombre o rol/responzabilidad',
    'Departamento',
    'Personal externo',
    'Contratista, proveedor, etc.',
    'Organización'
  ];
  return (
    <div className="step1-activity2">
      <h1>Contenedores humanos.</h1>
      <ContainerList tipo={2} labels={labels} />
      <div className="submit-buttons">
        <Button onClick={() => history.push('/paso-3/actividad-2')}>Atras</Button>
        <Button onClick={() => history.push('/paso-4')}>Continuar</Button>
      </div>
    </div>
  );
};

export default ActivityThree;
