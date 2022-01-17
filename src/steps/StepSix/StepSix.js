import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { ActivityOne } from './Activities';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import './StepSix.css';

const StepSix = () => {
  const { cargar } = usePreocupacionContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargar().then(() => setLoading(false));
  }, []);

  const renderMenu = () => (
    <div className="step-1">
      <h1>Paso 6: Identificación de riesgos.</h1>
      <ol>
        <li>
          <Link to="/paso-6/actividad-1">
            Determinar las consecuencias para los escenarios de amenaza.
          </Link>
        </li>
      </ol>
    </div>
  );

  return (
    <Switch>
      <Route exact path="/paso-6" render={renderMenu} />
      <Route path="/paso-6/actividad-1">
        <ActivityOne loading={loading} />
      </Route>
    </Switch>
  );
};

export default StepSix;
