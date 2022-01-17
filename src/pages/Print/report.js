export const worksheet1 = ({ index = 1, area_impacto }) => {
  const { criterios } = area_impacto;
  const renderCriterios = criterios.map(criterio => [
    { text: criterio.nombre, style: 'regular', italics: true },
    { text: criterio.bajo, style: 'regular' },
    { text: criterio.moderado, style: 'regular' },
    { text: criterio.alto, style: 'regular' }
  ]);

  for (let i = renderCriterios.length; i < 4; i++) {
    renderCriterios.push([
      { text: '', style: 'regular', italics: true },
      { text: '', style: 'regular' },
      { text: '', style: 'regular' },
      { text: '', style: 'regular' }
    ]);
  }

  const heights = renderCriterios.map(() => 130);

  return [
    {
      color: '#000',
      table: {
        widths: ['*', '*', '*', '*'],
        heights: ['auto', 'auto', ...heights],
        headerRows: 2,
        body: [
          [
            {
              text: `Allegro Worksheet ${index}`,
              style: 'corner'
            },
            {
              text: `RISK MEASUREMENT CRITERIA – ${area_impacto.nombre.toUpperCase()}`,
              style: 'title',
              alignment: 'center',
              colSpan: 3
            },
            '',
            ''
          ],
          [
            { text: 'Impact Area ', style: 'tableHeader', alignment: 'center' },
            { text: 'Low ', style: 'tableHeader', alignment: 'center' },
            { text: 'Moderate', style: 'tableHeader', alignment: 'center' },
            { text: 'High', style: 'tableHeader', alignment: 'center' }
          ],
          ...renderCriterios
        ]
      }
    },
    { text: '', pageBreak: 'after' }
  ];
};

export const worksheet7 = ({ areas_impacto }) => {
  const areas = areas_impacto.map(area => [
    {
      text: area.prioridad,
      fillColor: '#eeeeee',
      alignment: 'center',
      style: 'regular',
      margin: [5, 15]
    },
    { text: area.nombre, style: 'regular', margin: [5, 15], colSpan: 2 },
    ''
  ]);

  return [
    {
      color: '#000',
      table: {
        headerRows: 2,
        widths: [100, 50, '*'],
        body: [
          [
            {
              text: 'Allegro Worksheet 7',
              style: 'corner',
              colSpan: 2
            },
            '',
            {
              text: 'IMPACT AREA PRIORITIZATION WORKSHEET',
              style: 'title'
            }
          ],
          [
            { text: 'PRIORITY', style: 'tableHeader', alignment: 'center' },
            { text: 'IMPACT AREAS', style: 'tableHeader', alignment: 'center', colSpan: 2 },
            ''
          ],
          ...areas
        ]
      }
    },
    { text: '', pageBreak: 'after' }
  ];
};

export const worksheet8 = ({ activo }) => {
  const { requerimiento_seguridads: requerimientos } = activo;

  const importante = requerimientos.find(r => r.id === activo.requerimiento_importante) || {};

  const confidentiality = requerimientos.find(r => r.nombre === 'confidentiality') || {};
  const integrity = requerimientos.find(r => r.nombre === 'integrity') || {};
  const availability = requerimientos.find(r => r.nombre === 'availability') || {};
  const other = requerimientos.find(r => r.nombre === 'other') || {};

  return [
    {
      style: 'tableExample',
      color: '#000',
      table: {
        widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
        heights: ['auto', 'auto', 100, 'auto', 30, 'auto', 60, 60, 60, 60, 60],
        headerRows: 1,
        body: [
          [
            {
              text: 'Allegro Worksheet 8',
              style: 'corner',
              colSpan: 4
            },
            '',
            '',
            '',
            {
              text: 'CRITICAL INFORMATION ASSET PROFILE',
              style: 'title',
              colSpan: 8
            },
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          [
            {
              text: [
                '(1) Critical Asset\n\n',
                {
                  text: 'What is the critical information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            '',
            '',
            '',
            {
              text: [
                '(2) Rationale for Selection\n\n',
                {
                  text: 'Why is this information asset important to the organization?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            '',
            '',
            '',
            {
              text: [
                '(3) Description\n\n',
                {
                  text: 'What is the agreed-upon description of this information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            '',
            '',
            ''
          ],
          [
            {
              text: activo.nombre,
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            {
              text: activo.justificacion,
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            {
              text: activo.descripcion,
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            ''
          ],
          [
            {
              text: [
                '(4) Owner(s)\n\n',
                {
                  text: 'Who owns this information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 12
            },
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          [
            {
              text: activo.propietario,
              style: 'regular',
              colSpan: 12
            },
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          [
            {
              text: [
                '(5) Security Requirements\n\n',
                {
                  text: 'What are the security requirements for this information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 12
            },
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          [
            { text: ' Confidentiality', margin: [5, 5, 5, 5], colSpan: 4 },
            '',
            '',
            '',
            {
              text: 'Only authorized personnel can view this information asset, as follows: ',
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            { text: confidentiality.descripcion1, style: 'regular', colSpan: 4 },
            '',
            '',
            ''
          ],
          [
            { text: ' Integrity', margin: [5, 5, 5, 5], colSpan: 4 },
            '',
            '',
            '',
            {
              text: 'Only authorized personnel can modify this information asset, as follows: ',
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            { text: integrity.descripcion1, style: 'regular', colSpan: 4 },
            '',
            '',
            ''
          ],
          [
            { text: ' Availability', margin: [5, 5, 5, 5], colSpan: 4, rowSpan: 2 },
            '',
            '',
            '',
            {
              text:
                'This asset must be available for these personnel to do their jobs, as follows: ',
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            { text: availability.descripcion1, style: 'regular', colSpan: 4 },
            '',
            '',
            ''
          ],
          [
            '',
            '',
            '',
            '',
            {
              text:
                'This asset must be available for _____ hours,_____ days/week, _____ weeks/year. ',
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            { text: availability.descripcion2, style: 'regular', colSpan: 4 },
            '',
            '',
            ''
          ],
          [
            { text: ' Other', margin: [5, 5, 5, 5], colSpan: 4 },
            '',
            '',
            '',
            {
              text:
                'This asset has special regulatory compliance protection requirements, as follows:',
              style: 'regular',
              colSpan: 4
            },
            '',
            '',
            '',
            { text: other.descripcion1, style: 'regular', colSpan: 4 },
            '',
            '',
            ''
          ],
          [
            {
              text: [
                '(6) Most Important Security Requirement\n\n',
                {
                  text:
                    'What is the most important security requirement for this information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 12
            },
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          [
            {
              text: `${importante.nombre === 'confidentiality' ? '√' : ''} Confidentiality`,
              alignment: 'center',
              style: 'regular',
              margin: [5, 10],
              colSpan: 3
            },
            '',
            '',
            {
              text: `${importante.nombre === 'integrity' ? '√' : ''} Integrity`,
              alignment: 'center',
              style: 'regular',
              margin: [5, 10],
              colSpan: 3
            },
            '',
            '',
            {
              text: `${importante.nombre === 'availability' ? '√' : ''} Availability`,
              alignment: 'center',
              style: 'regular',
              margin: [5, 10],
              colSpan: 3
            },
            '',
            '',
            {
              text: `${importante.nombre === 'other' ? '√' : ''} Other`,
              alignment: 'center',
              style: 'regular',
              margin: [5, 10],
              colSpan: 3
            },
            '',
            ''
          ]
        ]
      }
    },
    { text: '', pageBreak: 'after' }
  ];
};

export const worksheet9 = ({ contenedor = 0, contenedores }) => {
  const options = [
    {
      hoja: 'a',
      nombre: 'TECHNICAL',
      labels: [
        'INTERNAL',
        'CONTAINER DESCRIPTION',
        'OWNER(S)',
        'EXTERNAL',
        'CONTAINER DESCRIPTION',
        'OWNER(S)'
      ]
    },
    {
      hoja: 'b',
      nombre: 'PHYSICAL',
      labels: [
        'INTERNAL',
        'CONTAINER DESCRIPTION',
        'OWNER(S)',
        'EXTERNAL',
        'CONTAINER DESCRIPTION',
        'OWNER(S)'
      ]
    },
    {
      hoja: 'c',
      nombre: 'PEOPLE',
      labels: [
        'INTERNAL PERSONNEL',
        'NAME OR ROLE/RESPONSIBILITY',
        'DEPARTMENT OR UNIT',
        'EXTERNAL PERSONNEL',
        'CONTRACTOR, VENDOR, ETC.',
        'ORGANIZATION'
      ]
    }
  ];

  const internos = (contenedores.filter(c => c.localizacion === 0) || [{}]).map(
    (contenedor, index) => [
      {
        text: [
          { text: `${index + 1}. `, bold: true },
          { text: `${contenedor.nombre}: `, decoration: 'underline' },
          { text: contenedor.descripcion }
        ],
        style: 'regular',
        colSpan: 2
      },
      {},
      { text: contenedor.propietario, fillColor: '#eeeeee', style: 'regular' }
    ]
  );

  const externos = (contenedores.filter(c => c.localizacion === 1) || [{}]).map(
    (contenedor, index) => [
      {
        text: [
          { text: `${index + 1}. `, bold: true },
          { text: `${contenedor.nombre}: `, decoration: 'underline' },
          { text: contenedor.descripcion }
        ],
        style: 'regular',
        colSpan: 2
      },
      {},
      { text: contenedor.propietario, fillColor: '#eeeeee', style: 'regular' }
    ]
  );

  for (let i = internos.length; i < 4; i++) {
    internos.push([
      {
        text: `${i + 1}. `,
        bold: true,
        style: 'regular',
        colSpan: 2
      },
      {},
      { text: '', fillColor: '#eeeeee', style: 'regular' }
    ]);
  }

  for (let i = externos.length; i < 4; i++) {
    externos.push([
      {
        text: `${i + 1}. `,
        bold: true,
        style: 'regular',
        colSpan: 2
      },
      {},
      { text: '', fillColor: '#eeeeee', style: 'regular' }
    ]);
  }

  const intHeights = internos.map(() => 60);

  const extHeights = externos.map(() => 60);

  return [
    {
      style: 'tableExample',
      color: '#000',
      table: {
        headerRows: 1,
        widths: ['*', '*', 150],
        heights: ['auto', 'auto', 'auto', ...intHeights, 'auto', 'auto', ...extHeights],
        body: [
          [
            {
              text: `Allegro Worksheet 9${options[contenedor].hoja}`,
              style: 'corner',
              alignment: 'center'
            },
            {
              text: `INFORMATION ASSET RISK ENVIRONMENT MAP (${options[contenedor].nombre})`,
              style: 'title',
              alignment: 'center',
              colSpan: 2
            },
            {}
          ],
          [
            {
              text: options[contenedor].labels[0],
              alignment: 'center',
              style: 'tableHeader',
              colSpan: 3
            },
            {},
            {}
          ],
          [
            {
              text: options[contenedor].labels[1],
              alignment: 'center',
              style: 'tableHeader',
              colSpan: 2
            },
            {},
            {
              text: options[contenedor].labels[2],
              alignment: 'center',
              style: 'tableHeader'
            }
          ],
          ...internos,
          [
            {
              text: options[contenedor].labels[3],
              alignment: 'center',
              style: 'tableHeader',
              colSpan: 3
            },
            {},
            {}
          ],
          [
            {
              text: options[contenedor].labels[4],
              alignment: 'center',
              style: 'tableHeader',
              colSpan: 2
            },
            {},
            {
              text: options[contenedor].labels[5],
              alignment: 'center',
              style: 'tableHeader'
            }
          ],
          ...externos
        ]
      }
    },
    { text: '', pageBreak: 'after' }
  ];
};

export const worksheet10 = ({
  activo,
  areas_impacto,
  area, //area de preocupacion
  contenedores
}) => {
  const { consecuencias, gravedades, controles } = area;

  let renderAreas = [];
  let total = 0;

  for (let i = 0; i < (areas_impacto.length || 1) * (consecuencias.length || 1); i++) {
    let a = {};
    if (i % (consecuencias.length || 1) === 0) {
      a = areas_impacto[Math.trunc(i / (consecuencias.length || 1))] || {};
    }
    let c = {};
    if (i % (areas_impacto.length || 1) === 0) {
      c = consecuencias[Math.trunc(i / (areas_impacto.length || 1))] || {};
    }

    const valores = ['Low', 'Med', 'High'];
    const gravedad = gravedades.find(g => g.areaImpactoId === a.id) || {};

    const cRow = c.descripcion ? { rowSpan: areas_impacto.length || 1 } : {};
    const aRow = a.nombre ? { rowSpan: consecuencias.length || 1 } : {};

    const score = (gravedad.valor + 1) * a.prioridad;
    if (a.prioridad) {
      total += isNaN(score) ? 0 : score;
    }

    renderAreas.push([
      {},
      { text: c.descripcion, style: 'regular', colSpan: 7, ...cRow },
      {},
      {},
      {},
      {},
      {},
      {},
      {
        text: a.nombre,
        style: 'regular',
        fontSize: 8,
        colSpan: 2,
        ...aRow
      },
      {},
      {
        text: valores[gravedad.valor],
        alignment: 'center',
        style: 'regular',
        ...aRow
      },
      {
        text: score || '',
        alignment: 'center',
        style: 'regular',
        ...aRow
      }
    ]);
  }

  const renderControles = controles.map(c => {
    const contenedor = contenedores.find(ct => ct.id === c.contenedorId) || {};
    return [
      {
        text: contenedor.nombre,
        style: 'regular',
        colSpan: 3
      },
      {},
      {},
      {
        text: c.descripcion,
        style: 'regular',
        colSpan: 9
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ];
  });

  for (let i = controles.length; i < 6; i++) {
    renderControles.push([
      {
        text: '',
        style: 'regular',
        colSpan: 3
      },
      {},
      {},
      {
        text: '',
        style: 'regular',
        colSpan: 9
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]);
  }

  const heights = new Array(17 + (areas_impacto.length || 1) * (consecuencias.length || 1)).fill(
    'auto'
  );

  renderControles.forEach(() => heights.push(70));

  return [
    {
      style: 'tableExample',
      color: '#000',
      table: {
        heights,
        widths: [
          30,
          30,
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto'          
        ],
        headerRows: 1,
        body: [
          [
            {
              text: 'Allegro - Worksheet 10',
              style: 'corner',
              colSpan: 4
            },
            {},
            {},
            {},
            {
              text: 'INFORMATION ASSET RISK WORKSHEET',
              style: 'title',
              colSpan: 8
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {
              text: 'Information Asset Risk',
              style: 'subtitle',
              rowSpan: 11 + (areas_impacto.length || 1) * (consecuencias.length || 1)
            },
            { text: 'Threat', style: 'subtitle', rowSpan: 9 },
            { text: 'Information Asset', style: 'subtitle', colSpan: 2 },
            {},
            { text: activo.nombre, style: 'regular', colSpan: 8 },
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            { text: 'Area of Concern ', style: 'subtitle', colSpan: 2 },
            {},
            { text: area.nombre, style: 'regular', colSpan: 8 },
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(1) Actor\n\n',
                {
                  text: 'Who would exploit the area of concern or threat?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {},
            { text: area.actor, style: 'regular', colSpan: 6 },
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(2) Means\n\n',
                {
                  text: 'How would the actor do it? What would they do?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {},
            { text: area.medio, style: 'regular', colSpan: 6 },
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(3) Motive\n\n',
                {
                  text: 'What is the actor’s reason for doing it?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {},
            { text: area.motivo, style: 'regular', colSpan: 6 },
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(4) Outcome\n\n',
                {
                  text: 'What would be the resulting effect on the information asset?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4,
              rowSpan: 2
            },
            {},
            {},
            {}, //
            { text: `${area.resultado & 1 ? '√' : ''} Disclosure`, colSpan: 3 },
            {},
            {},
            { text: `${area.resultado & 2 ? '√' : ''} Destruction`, colSpan: 3 },
            {},
            {}
          ],
          [
            {},
            {},
            {},
            {},
            {},
            {},
            { text: `${area.resultado & 4 ? '√' : ''} Modification`, colSpan: 3 },
            {},
            {},
            { text: `${area.resultado & 8 ? '√' : ''} Interruption`, colSpan: 3 },
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(5) Security Requirements\n\n',
                {
                  text: 'How would the information asset’s security requirements be breached?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {},
            { text: area.requerimientos, style: 'regular', colSpan: 6 },
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {
              text: [
                '(6) Probability\n\n',
                {
                  text: 'What is the likelihood that this threat scenario could occur?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {},
            {
              text: `${area.probabilidad === 0 ? '√' : ''} High`,
              colSpan: 2,
              alignment: 'center'
            },
            {},
            {
              text: `${area.probabilidad === 1 ? '√' : ''} Medium`,
              colSpan: 2,
              alignment: 'center'
            },
            {},
            {
              text: `${area.probabilidad === 2 ? '√' : ''} Low`,
              colSpan: 2,
              alignment: 'center'
            },
            {}
          ],
          [
            {},
            {
              text: [
                '(7) Consequences\n\n',
                {
                  text:
                    'What are the consequences to the organization or the information asset owner as a result of the outcome and breach of security requirements?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 7,
              rowSpan: 2
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {
              text: [
                '(8) Severity\n\n',
                {
                  text:
                    'How severe are these consequences to the organization or asset owner by impact area?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              style: 'tableHeader',
              colSpan: 4
            },
            {},
            {},
            {}
          ],
          [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
              text: 'Impact Area',
              style: 'tableHeader',
              colSpan: 2
            },
            {},
            {
              text: 'Value',
              style: 'tableHeader'
            },
            {
              text: 'Score',
              style: 'tableHeader'
            }
          ],
          ...renderAreas,
          [
            { text: '', colSpan: 8, border: [false, false, false, false] },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
              text: 'Relative Risk Score',
              bold: true,
              colSpan: 3,
              alignment: 'right',
              border: [false, false, false, false]
            },
            {},
            {},
            { text: total, alignment: 'center', style: 'regular' }
          ],
          [
            {
              text: [
                '(9) Risk Mitigation\n\n',
                {
                  text: 'Based on the total score for this risk, what action will you take?',
                  italics: true,
                  bold: false,
                  fontSize: 9
                }
              ],
              border: [true, false, true, true],
              pageBreak: 'before',
              style: 'tableHeader',
              colSpan: 12
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {
              text: `${area.accion_tomada === 0 ? '√' : ''} Accept`,
              margin: 5,
              alignment: 'center',
              colSpan: 3
            },
            {},
            {},
            {
              text: `${area.accion_tomada === 1 ? '√' : ''} Defer`,
              margin: 5,
              alignment: 'center',
              colSpan: 3
            },
            {},
            {},
            {
              text: `${area.accion_tomada === 2 ? '√' : ''} Mitigate`,
              margin: 5,
              alignment: 'center',
              colSpan: 3
            },
            {},
            {},
            {
              text: `${area.accion_tomada === 3 ? '√' : ''} Transfer`,
              margin: 5,
              alignment: 'center',
              colSpan: 3
            },
            {},
            {}
          ],
          [
            {
              text: 'For the risks that you decide to mitigate, perform the following: ',
              style: 'tableHeader',
              colSpan: 12
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          [
            {
              text: 'On what container would you apply controls? ',
              style: 'tableHeader',
              bold: false,
              italics: true,
              colSpan: 3
            },
            {},
            {},
            {
              text:
                'What administrative, technical, and physical controls would you apply on this container? What residual risk would still be accepted by the organization? ',
              style: 'tableHeader',
              bold: false,
              italics: true,
              colSpan: 9
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          ...renderControles
        ]
      }
    },
    { text: '', pageBreak: 'after' }
  ];
};
