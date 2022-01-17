import React from 'react';
import { Button } from 'react-bootstrap';

import { useQuestionaireThree } from './hooks';

const Questionnaire3 = () => {
  const { next, back, onChange, onSubmit, preguntas } = useQuestionaireThree();

  const questions = [
    '¿Revelado a personas no autorizadas?',
    '¿Modificado para que nosea utilizable para los fines previstos?',
    '¿Interrumpido para que no se pueda acceder a él para los fines previstos',
    '¿Destruido permanentemente o perdido temporalmente para que no pueda utilizarse en los fines previstos?'
  ];

  const p = preguntas.find(p => p.pregunta === 5) || {};

  return (
    <div className="step1-activity1">
      <table className="cuestionario">
        <thead>
          <tr>
            <th colSpan="9" className="corner">
              <button onClick={onSubmit}>Guardar</button>
            </th>
            <th colSpan="15">Contenedores humanos</th>
          </tr>
          <tr>
            <th colSpan="24" className="cuestionario-desc">
              Esta hoja de trabajo ayudará a pensar los escenarios que podrían afectar su
              información porque es conocido por el personal clave de la organización. Estos
              escenarios pueden presentar riesgos que deberá abordar. Considere para cada escenario
              y marque en el checkbox la respuesta adecuada. Si su respuesta es "Si", considere que
              el escenario que podría ocurrir es intencional o accidental o ambos.
            </th>
          </tr>
          <tr>
            <th colSpan="24" className="escenario">
              <div>Escenario 1:</div>
              <div>
                Piense en las personas que trabajan en su organización. Existe una situación en la
                que un empleado tenga un conocimiento detallado de su activo de información y
                podría, <i> accidental</i> o <i>intencional</i>, hacer que su activo de información
                sea:
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => {
            const pregunta = preguntas.find(p => p.pregunta === index) || {};

            return (
              <tr key={index}>
                <td colSpan="12">{question}</td>
                <td colSpan="4" className="respuesta-check">
                  <input
                    name={index}
                    value="1"
                    checked={pregunta.respuesta & 1}
                    onChange={onChange}
                    type="checkbox"
                    id="no"
                  />
                  <label htmlFor="no">No</label>
                </td>
                <td colSpan="4" className="respuesta-check">
                  <div>
                    <input
                      name={index}
                      value="2"
                      checked={pregunta.respuesta & 2}
                      onChange={onChange}
                      type="checkbox"
                      id="accidental"
                    />
                    <label htmlFor="accidental">Si</label>
                  </div>
                  <div>(accidental)</div>
                </td>
                <td colSpan="4" className="respuesta-check">
                  <div>
                    <input
                      name={index}
                      value="4"
                      checked={pregunta.respuesta & 4}
                      onChange={onChange}
                      type="checkbox"
                      id="intencional"
                    />
                    <label htmlFor="intencional">Si</label>
                  </div>
                  <div>(intencional)</div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <thead>
          <tr>
            <th colSpan="24" className="escenario">
              <div>Escenario 2:</div>
              <div>
                Piense en las personas externas a su organización. Esto podría incluir personas que
                pueden tener una relación comercial legítima con su organización o no. Existe una
                situación en que la que una persona externa pueda, <i> accidental</i> o{' '}
                <i>intencionalmente</i>, hacer que su activo de información sea:
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12">{questions[0]}</td>
            <td colSpan="4" className="respuesta-check">
              <input
                name={5}
                value="1"
                checked={p.respuesta & 1}
                onChange={onChange}
                type="checkbox"
                id="no"
              />
              <label htmlFor="no">No</label>
            </td>
            <td colSpan="4" className="respuesta-check">
              <div>
                <input
                  name={5}
                  value="2"
                  checked={p.respuesta & 2}
                  onChange={onChange}
                  type="checkbox"
                  id="accidental"
                />
                <label htmlFor="accidental">Si</label>
              </div>
              <div>(accidental)</div>
            </td>
            <td colSpan="4" className="respuesta-check">
              <div>
                <input
                  name={5}
                  value="4"
                  checked={p.respuesta & 4}
                  onChange={onChange}
                  type="checkbox"
                  id="intencional"
                />
                <label htmlFor="intencional">Si</label>
              </div>
              <div>(intencional)</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={next}>Continuar</Button>
      </div>
    </div>
  );
};

export default Questionnaire3;
