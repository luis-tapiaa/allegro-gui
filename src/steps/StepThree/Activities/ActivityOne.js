import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import ContainerList from '../../../components/ContainerList/ContainerList';

const ActivityOne = () => {
  const history = useHistory();
  return (
    <div className="step1-activity2">
      <h1>Contenedores técnicos.</h1>
      <ContainerList tipo={0} />
      <Button onClick={() => history.push('/paso-3/actividad-2')} className="continuar-btn">
        Continuar
      </Button>
    </div>
  );
};

export default ActivityOne;
