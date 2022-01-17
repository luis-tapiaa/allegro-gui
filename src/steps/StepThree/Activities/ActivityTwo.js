import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import ContainerList from '../../../components/ContainerList/ContainerList';

const ActivityTwo = () => {
  const history = useHistory();
  return (
    <div className="step1-activity2">
      <h1>Contenedores físicos.</h1>
      <ContainerList tipo={1} />
      <div className="submit-buttons">
        <Button onClick={() => history.push('/paso-3/actividad-1')}>Atras</Button>
        <Button onClick={() => history.push('/paso-3/actividad-3')}>Continuar</Button>
      </div>
    </div>
  );
};

export default ActivityTwo;
