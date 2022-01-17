import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { useActivoContext } from '../../context/activosCriticos/activoContext';
import { ActivityOne, ActivityTwo } from './Activities';
import './StepTwo.css';

const StepTwo = () => {
  const { cargar } = useActivoContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargar().then(() => setLoading(false));
  }, []);

  const activities = [
    'Identificar activos de información críticos.',
    'Completar el perfil de los activos críticos.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 2: Desarrollo del perfil de los activos de información.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-2/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-2" render={renderMenu} />
      <Route path="/paso-2/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-2/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepTwo;
