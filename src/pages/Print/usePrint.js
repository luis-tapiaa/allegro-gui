import { useEffect, useState } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';

import { useActivoContext } from '../../context/activosCriticos/activoContext';
import { useAreaContext } from '../../context/areasImpacto/areaContext';
import { usePreocupacionContext } from '../../context/areasPreocupacion/preocupacionContext';
import { useContenedorContext } from '../../context/contenedores/contenedorContext';
import { worksheet1, worksheet10, worksheet7, worksheet8, worksheet9 } from './report';

const defaultOptions = {
  pageSize: 'letter',
  info: {
    title: 'Reporte'
  },
  defaultStyle: {
    fontSize: 10
  },
  styles: {
    corner: {
      fillColor: 'black',
      bold: true,
      margin: 5,
      color: 'white'
    },
    tableHeader: {
      lineHeight: 0.8,
      fillColor: '#eeeeee',
      bold: true,
      margin: 3
    },
    subtitle: {
      fillColor: '#dddddd',
      bold: true
    },
    title: {
      bold: true,
      margin: 5
    },
    regular: {
      margin: 3
    }
  }
};

export const usePrint = () => {
  const { cargar: cargarActivos, activos_criticos } = useActivoContext();
  const { cargar: cargarAreas, areas_impacto } = useAreaContext();
  const { cargarFull, areas_preocupacion } = usePreocupacionContext();
  const { cargar: cargarContenedores, contenedores } = useContenedorContext();
  const [hojas, setHojas] = useState([true, true, true, true, true]);
  const [cont, setCont] = useState([true, true, true]);
  const [checkAreas, setAreas] = useState([]);
  const [checkActivos, setActivos] = useState([]);
  const [checkPre, setPre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = [cargarFull(), cargarActivos(), cargarAreas(), cargarContenedores()];

    Promise.all(promises).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (activos_criticos.length !== 0) {
      setActivos(activos_criticos.map(() => true));
      setPre(activos_criticos.map(() => true));
    }
  }, [activos_criticos]);

  useEffect(() => {
    if (areas_impacto.length !== 0) {
      setAreas(areas_impacto.map(() => true));
    }
  }, [areas_impacto]);

  const onSubmit = () => {
    const pdf = {
      ...defaultOptions,
      content: []
    };

    hojas.forEach((hoja, index) => {
      switch (index) {
        case 0:
          checkAreas.forEach((area, i) => {
            if (area) {
              pdf.content.push(worksheet1({ index: i + 1, area_impacto: areas_impacto[i] }));
            }
          });
          break;
        case 1:
          if (hoja) {
            pdf.content.push(worksheet7({ areas_impacto }));
          }
          break;
        case 2:
          checkActivos.forEach((activo, i) => {
            if (activo) {
              pdf.content.push(worksheet8({ activo: activos_criticos[i] }));
            }
          });
          break;
        case 3:
          cont.forEach((contenedor, i) => {
            if (contenedor) {
              pdf.content.push(
                worksheet9({ contenedor: i, contenedores: contenedores.filter(c => c.tipo === i) })
              );
            }
          });
          break;
        case 4:
          checkPre.forEach((activo, i) => {
            if (activo) {
              const activo = activos_criticos[i];
              const areas = areas_preocupacion.filter(area => area.activoCriticoId === activo.id);
              console.log(activo, areas);
              if (areas.length !== 0) {
                areas.forEach(area => {
                  pdf.content.push(
                    worksheet10({
                      activo,
                      areas_impacto,
                      area,
                      contenedores
                    })
                  );
                });
              }
            }
          });
          break;
        default:
      }
    });

    pdfMake.createPdf(pdf).open();
  };

  const onChange = ({ target }) => {
    const { checked, value } = target;
    const name = parseInt(target.name, 10);
    const fn = [setAreas, () => {}, setActivos, setCont, setPre];

    if (value === 'on') {
      setHojas(prev => prev.map((_, i) => (i === name ? checked : _)));
      fn[name](prev => prev.map(() => checked));
    } else {
      fn[value](prev => {
        const next = prev.map((_, i) => (i === name ? checked : _));
        const nextValue = next.reduce((acc, curr) => acc && curr);

        setHojas(p => p.map((_, i) => (i === parseInt(value, 10) ? nextValue : _)));

        return next;
      });
    }
  };

  return {
    onSubmit,
    hojas,
    onChange,
    cont,
    checkAreas,
    checkActivos,
    checkPre,
    activos_criticos,
    areas_impacto,
    areas_preocupacion,
    loading
  };
};
