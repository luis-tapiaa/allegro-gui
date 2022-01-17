import ReactDOM from 'react-dom';

import AppContext from './context/appContext';
import App from './App';
import AreaState from './context/areasImpacto/areaState';
import PreocupacionState from './context/areasPreocupacion/preocupacionState';
import ActivoState from './context/activosCriticos/activoState';
import ContenedorState from './context/contenedores/contenedorState';
import CuestionarioState from './context/cuestionarios/cuestionarioState';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <AppContext>
    <AreaState>
      <ActivoState>
        <ContenedorState>
          <PreocupacionState>
            <CuestionarioState>
              <App />
            </CuestionarioState>
          </PreocupacionState>
        </ContenedorState>
      </ActivoState>
    </AreaState>
  </AppContext>,
  rootElement
);
