import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './Menu.css';

const roadMap = [
  {
    title: 'Establecimiento de controles',
    steps: [{ id: 1, desc: 'Establecimiento del criterio de las metricas de riesgo.' }]
  },
  {
    title: 'Perfil de activos',
    steps: [
      { id: 2, desc: 'Desarrollo del perfil de los activos de información.' },
      { id: 3, desc: 'Identificación de los contenedores de los activos de información.' }
    ]
  },
  {
    title: 'Identificación de amenazas',
    steps: [
      { id: 4, desc: 'Identificación de áreas de preocupación.' },
      { id: 5, desc: 'Identificación de escenarios de amenaza.' }
    ]
  },
  {
    title: 'Identificación y mitigación de riesgos',
    steps: [
      { id: 6, desc: 'Identificación de riesgos.' },
      { id: 7, desc: 'Análisis de riesgos.' },
      { id: 8, desc: 'Selección de la metodología de mitigación.' }
    ]
  }
];

const Menu = () => {
  let history = useHistory();

  return (
    <CardGroup>
      {roadMap.map((level, indexLevel) => (
        <Card key={`level-${indexLevel}`}>
          <Card.Header>{level.title}</Card.Header>
          <Card.Body>
            {level.steps.map((step, index) => (
              <Card key={`step-${index}`} onClick={() => history.push(`/paso-${step.id}`)}>
                <Card.Body>
                  <Card.Title>{`Paso ${step.id}:`}</Card.Title>
                  <Card.Text>{step.desc}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Menu;
