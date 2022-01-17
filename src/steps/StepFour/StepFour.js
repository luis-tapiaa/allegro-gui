import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ActivityOne, ActivityTwo } from './Activities';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import { useActivoContext } from '../../context/activosCriticos/activoContext';
import './StepFour.css';

const StepFour = () => {
  const { cargar } = usePreocupacionContext();
  const { cargar: cargarActivos } = useActivoContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = [cargar(), cargarActivos()];
    Promise.all(promises).then(() => setLoading(false));
  }, []);

  const activities = [
    'Definir las áreas de preocupación.',
    'Documentar cada área de preocupación en una hoja de riesgo de un activo de información.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 4: Identificación de áreas de preocupación.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-4/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-4" render={renderMenu} />
      <Route path="/paso-4/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-4/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepFour;
