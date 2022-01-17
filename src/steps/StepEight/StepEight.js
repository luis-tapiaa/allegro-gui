import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { ActivityOne, ActivityTwo, ActivityThree } from './Activities';
import { useAreaContext } from '../../context/areasImpacto/areaContext';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import { useContenedorContext } from '../../context/contenedores/contenedorContext';
import './StepEight.css';

const StepEight = () => {
  const { cargar: impacto } = useAreaContext();
  const { cargar } = usePreocupacionContext();
  const { cargar: load } = useContenedorContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = [cargar(), impacto(), load()];
    Promise.all(promises).then(() => setLoading(false));
  }, []);

  const activities = [
    'Clasificación de los riesgos.',
    'Asignar un enfoque de mitigacion a los riesgos.',
    'Desarrollar estrategias de mitigación.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 8: Establecimiento del criterio de las metricas de riesgo.</h1>
      <ol>
        {activities.map((a, i) => (
          <li key={i}>
            <Link to={`/paso-8/actividad-${i + 1}`}>{a}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-8" render={renderMenu} />
      <Route path="/paso-8/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-8/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
      <Route path="/paso-8/actividad-3">
        <ActivityThree loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepEight;
