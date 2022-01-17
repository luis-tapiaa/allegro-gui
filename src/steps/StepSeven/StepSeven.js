import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ActivityOne, ActivityTwo } from './Activities';
import { useAreaContext } from '../../context/areasImpacto/areaContext';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import './StepSeven.css';

const StepSeven = () => {
  const { cargar } = useAreaContext();
  const { cargar: load } = usePreocupacionContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = [cargar(), load()];
    Promise.all(promises).then(() => setLoading(false));
  }, []);

  const activities = [
    'Definir los valores de impacto.',
    'Calcular los puntajes de riesgo relaitvo.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 7: Análisis de riesgos.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-7/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-7" render={renderMenu} />
      <Route path="/paso-7/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-7/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepSeven;
