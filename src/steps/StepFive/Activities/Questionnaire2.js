import React from 'react';
import { Button } from 'react-bootstrap';
import { useQuestionaireTwo } from './hooks';

const Questionnaire2 = () => {
  const { next, back, onChange, onSubmit, preguntas } = useQuestionaireTwo();

  const questions2 = [
    'Otros problemas de terceros se producen',
    'Se producen desastres naturales o provocados por el hombre (inundaciones, incendios, tornados, explosiones o huracanes)'
  ];

  const questions = [
    '¿Revelado a personas no autorizadas?',
    '¿Modificado para que nosea utilizable para los fines previstos?',
    '¿Interrumpido para que no se pueda acceder a él para los fines previstos',
    '¿Destruido permanentemente o perdido temporalmente para que no pueda utilizarse en los fines previstos?'
  ];

  return (
    <div className="step1-activity1">
      <table className="cuestionario">
        <thead>
          <tr>
            <th colSpan="9" className="corner">
              <button onClick={onSubmit}>Guardar</button>
            </th>
            <th colSpan="15">Contenedores físicos</th>
          </tr>
          <tr>
            <th colSpan="24" className="cuestionario-desc">
              Esta hoja de trabajo ayudará a pensar los escenarios que podrían afectar su
              información en los contenedores físicos donde reside. Estos escenarios pueden
              presentar riesgos que deberá abordar. Considere para cada escenario y marque en el
              checkbox la respuesta adecuada. Si su respuesta es "Si", considere que el escenario
              que podría ocurrir es intencional o accidental o ambos.
            </th>
          </tr>
          <tr>
            <th colSpan="24" className="escenario">
              <div>Escenario 1:</div>
              <div>
                Piense en las personas que trabajan en su organización. Existe alguna situación en
                la que un empleado pueda acceder a uno o más contenedores tecnicos,
                <i> accidental</i> o <i>intencional</i>, provocando que su activo de información
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
                situación en que la que una persona externa pueda acceder a uno o más contenedores
                tecnicos, <i> accidental</i> o <i>intencional</i>, provocando que su activo de
                información sea:
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => {
            const pregunta = preguntas.find(p => p.pregunta === index + 4) || {};

            return (
              <tr key={index}>
                <td colSpan="12">{question}</td>
                <td colSpan="4" className="respuesta-check">
                  <input
                    name={index + 4}
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
                      name={index + 4}
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
                      name={index + 4}
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
              <div>Escenario 3:</div>
              <div>
                En este escenario, considere situaciones que podrían afectar a su activo de
                información en cualquier contenedor técnico que haya identificado. Determine si
                podría ocurrir cualquiera de las siguientes situaciones y, en caso afirmativo,
                determine si estas situaciones causarían uno o más de los siguientes resultados:
              </div>
              <div>
                <ul>
                  <li>Divulgación involuntaria de su activo de información</li>
                  <li>Modificación involuntaria de su activo de información</li>
                  <li>
                    Interrupción involuntaria de la disponibilidad de su activo de información
                  </li>
                  <li>
                    Destrucción permanente no intencionada o pérdida temporal de su activo de
                    información
                  </li>
                </ul>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {questions2.map((question, index) => {
            const pregunta = preguntas.find(p => p.pregunta === index + 8) || {};

            return (
              <tr key={index}>
                <td colSpan="9">{question}</td>
                <td colSpan="3" className="respuesta-check">
                  <input
                    name={index + 8}
                    value="1"
                    checked={pregunta.respuesta & 1}
                    onChange={onChange}
                    type="checkbox"
                    id="no"
                  />
                  <label htmlFor="no">No</label>
                </td>
                <td colSpan="3" className="respuesta-check">
                  <div>
                    <input
                      name={index + 8}
                      value="2"
                      checked={pregunta.respuesta & 2}
                      onChange={onChange}
                      type="checkbox"
                      id="revelacion"
                    />
                    <label htmlFor="revelacion">Si</label>
                  </div>
                  <div>(revelación)</div>
                </td>
                <td colSpan="3" className="respuesta-check">
                  <div>
                    <input
                      name={index + 8}
                      value="4"
                      checked={pregunta.respuesta & 4}
                      onChange={onChange}
                      type="checkbox"
                      id="modificacion"
                    />
                    <label htmlFor="modificacion">Si</label>
                  </div>
                  <div>(modificacion)</div>
                </td>
                <td colSpan="3" className="respuesta-check">
                  <div>
                    <input
                      name={index + 8}
                      value="8"
                      checked={pregunta.respuesta & 8}
                      onChange={onChange}
                      type="checkbox"
                      id="interrupcion"
                    />
                    <label htmlFor="interrupcion">Si</label>
                  </div>
                  <div>(interrupcion)</div>
                </td>
                <td colSpan="3" className="respuesta-check">
                  <div>
                    <input
                      name={index + 8}
                      value="16"
                      checked={pregunta.respuesta & 16}
                      onChange={onChange}
                      type="checkbox"
                      id="perdida"
                    />
                    <label htmlFor="perdida">Si</label>
                  </div>
                  <div>(pérdida)</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="submit-buttons">
        <Button onClick={back}>Atras</Button>
        <Button onClick={next}>Continuar</Button>
      </div>
    </div>
  );
};

export default Questionnaire2;
