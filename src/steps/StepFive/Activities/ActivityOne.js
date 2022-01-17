import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Questionnaire1 from './Questionnaire1';
import Questionnaire2 from './Questionnaire2';
import Questionnaire3 from './Questionnaire3';

const ActivityOne = () => {
  return (
    <Switch>
      <Route
        exact
        path="/paso-5/actividad-1"
        render={() => (
          <div className="step-1">
            <h1>Identificar escenarios de amenaza.</h1>
            <ol>
              <li>
                <Link to="/paso-5/actividad-1/cuestionario-1">Contenedores Técnicos</Link>
              </li>
              <li>
                <Link to="/paso-5/actividad-1/cuestionario-2">Contenedores Físicos</Link>
              </li>
              <li>
                <Link to="/paso-5/actividad-1/cuestionario-3">Contenedores Humanos</Link>
              </li>
            </ol>
          </div>
        )}
      />
      <Route path="/paso-5/actividad-1/cuestionario-1" component={Questionnaire1} />
      <Route path="/paso-5/actividad-1/cuestionario-2" component={Questionnaire2} />
      <Route path="/paso-5/actividad-1/cuestionario-3" component={Questionnaire3} />
    </Switch>
  );
};

export default ActivityOne;
