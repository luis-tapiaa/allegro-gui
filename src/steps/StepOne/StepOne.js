import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { useAreaContext } from '../../context/areasImpacto/areaContext';
import { ActivityOne, ActivityTwo, ActivityThree } from './Activities';
import './StepOne.css';

const StepOne = () => {
  const { cargar } = useAreaContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargar().then(() => setLoading(false));
  }, []);

  const activities = [
    'Definir las áreas de impacto.',
    'Definir las métricas de valor de impacto.',
    'Establecer la prioridad de las áreas de impacto.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 1: Establecimiento del criterio de las metricas de riesgo.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-1/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-1" render={renderMenu} />
      <Route path="/paso-1/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-1/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
      <Route path="/paso-1/actividad-3">
        <ActivityThree loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepOne;
