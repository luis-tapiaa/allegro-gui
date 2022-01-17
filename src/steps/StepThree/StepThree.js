import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { useContenedorContext } from '../../context/contenedores/contenedorContext';
import { ActivityOne, ActivityTwo, ActivityThree } from './Activities';

const StepThree = () => {
  const { cargar } = useContenedorContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargar().then(() => setLoading(false));
  }, []);

  const activities = [
    'Identificar contenedores técnicos.',
    'Identificar contenedores físicos.',
    'Identificar contenedores humanos.'
  ];

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 3: Identificación de los contenedores de los activos de información.</h1>
      <ol>
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}>
            <Link to={`/paso-3/actividad-${index + 1}`}>{activity}</Link>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-3" render={renderMenu} />
      <Route path="/paso-3/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
      <Route path="/paso-3/actividad-2">
        <ActivityTwo loading={loading} />
      </Route>
      <Route path="/paso-3/actividad-3">
        <ActivityThree loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepThree;
