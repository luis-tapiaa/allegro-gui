import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { ActivityOne as Questionnaries } from './Activities';
import { ActivityOne, ActivityTwo } from '../StepFour/Activities';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import { useActivoContext } from '../../context/activosCriticos/activoContext';
import { useCuestionarioContext } from '../../context/cuestionarios/cuestionarioContext';
import './StepFive.css';

const StepFive = () => {
  const { cargar } = usePreocupacionContext();
  const { cargar: cargarActivos } = useActivoContext();
  const { cargar: cargarCuestionarios } = useCuestionarioContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = [cargar(), cargarActivos(), cargarCuestionarios()];
    Promise.all(promises).then(() => setLoading(false));
  }, []);

  const activities = [
    'Cuestionarios.',
    'Identificar escenarios de amenaza que no hayan sido identificados.',
    'Documentar cada área de preocupación nueva en una hoja de riesgo.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 5: Identificación de escenarios de amenaza.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-5/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-5" render={renderMenu} />
      <Route path="/paso-5/actividad-1">
        <Questionnaries loading={loading} />
      </Route>
      <Route path="/paso-5/actividad-2">
        <ActivityOne step={5} loading={loading} />
      </Route>
      <Route path="/paso-5/actividad-3">
        <ActivityTwo step={5} loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepFive;
