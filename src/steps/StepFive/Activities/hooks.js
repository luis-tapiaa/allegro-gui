import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../../context/appContext';
import { useCuestionarioContext } from '../../../context/cuestionarios/cuestionarioContext';

export const useQuestionaireOne = () => {
  const history = useHistory();
  const { id } = useAppContext();
  const { cuestionarios, actualizar, agregar } = useCuestionarioContext();
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    if (cuestionarios.length !== 0) {
      setPreguntas(cuestionarios.filter(c => c.cuestionario === 1));
    }
  }, [cuestionarios]);

  const onChange = ({ target }) => {
    const name = parseInt(target.name, 10);
    const value = parseInt(target.value, 10);

    const pregunta = preguntas.find(r => r.pregunta === name);

    let respuesta = 0;

    if (pregunta) {
      if (target.checked) {
        respuesta = pregunta.respuesta + value;
      } else {
        respuesta = pregunta.respuesta - value;
      }
      setPreguntas(prev =>
        prev.map(p => (p.pregunta === pregunta.pregunta ? { ...p, respuesta } : p))
      );
    } else {
      respuesta = value;
      setPreguntas(prev => [
        ...prev,
        {
          cuestionario: 1,
          pregunta: name,
          respuesta,
          usuarioId: id
        }
      ]);
    }
  };

  const onSubmit = () => {
    preguntas.forEach(p => {
      if (p.id) {
        actualizar(p).then(() => {
          console.log('EDIT', p);
        });
      } else {
        agregar(p).then(() => {
          console.log('CREATE', p);
        });
      }
    });
  };

  const next = () => {
    history.push('/paso-5/actividad-1/cuestionario-2');
  };

  return { next, onChange, onSubmit, preguntas };
};

export const useQuestionaireTwo = () => {
  const history = useHistory();
  const { id } = useAppContext();
  const [preguntas, setPreguntas] = useState([]);
  const { cuestionarios, actualizar, agregar } = useCuestionarioContext();

  useEffect(() => {
    if (cuestionarios.length !== 0) {
      setPreguntas(cuestionarios.filter(c => c.cuestionario === 2));
    }
  }, [cuestionarios]);

  const onChange = ({ target }) => {
    const name = parseInt(target.name, 10);
    const value = parseInt(target.value, 10);

    const pregunta = preguntas.find(r => r.pregunta === name);

    let respuesta = 0;

    if (pregunta) {
      if (target.checked) {
        respuesta = pregunta.respuesta + value;
      } else {
        respuesta = pregunta.respuesta - value;
      }
      setPreguntas(prev =>
        prev.map(p => (p.pregunta === pregunta.pregunta ? { ...p, respuesta } : p))
      );
    } else {
      respuesta = value;
      setPreguntas(prev => [
        ...prev,
        {
          cuestionario: 2,
          pregunta: name,
          respuesta,
          usuarioId: id
        }
      ]);
    }
  };

  const onSubmit = () => {
    preguntas.forEach(p => {
      if (p.id) {
        actualizar(p).then(() => {
          console.log('EDIT', p);
        });
      } else {
        agregar(p).then(() => {
          console.log('CREATE', p);
        });
      }
    });
  };

  const next = () => {
    history.push('/paso-5/actividad-1/cuestionario-3');
  };
  const back = () => {
    history.push('/paso-5/actividad-1/cuestionario-1');
  };
  return { next, back, onChange, onSubmit, preguntas };
};

export const useQuestionaireThree = () => {
  const history = useHistory();
  const { id } = useAppContext();
  const [preguntas, setPreguntas] = useState([]);
  const { cuestionarios, actualizar, agregar } = useCuestionarioContext();

  useEffect(() => {
    if (cuestionarios.length !== 0) {
      setPreguntas(cuestionarios.filter(c => c.cuestionario === 3));
    }
  }, [cuestionarios]);

  const onChange = ({ target }) => {
    const name = parseInt(target.name, 10);
    const value = parseInt(target.value, 10);

    const pregunta = preguntas.find(r => r.pregunta === name);

    let respuesta = 0;

    if (pregunta) {
      if (target.checked) {
        respuesta = pregunta.respuesta + value;
      } else {
        respuesta = pregunta.respuesta - value;
      }
      setPreguntas(prev =>
        prev.map(p => (p.pregunta === pregunta.pregunta ? { ...p, respuesta } : p))
      );
    } else {
      respuesta = value;
      setPreguntas(prev => [
        ...prev,
        {
          cuestionario: 3,
          pregunta: name,
          respuesta,
          usuarioId: id
        }
      ]);
    }
  };

  const onSubmit = () => {
    preguntas.forEach(p => {
      if (p.id) {
        actualizar(p).then(() => {
          console.log('EDIT', p);
        });
      } else {
        agregar(p).then(() => {
          console.log('CREATE', p);
        });
      }
    });
  };

  const next = () => {
    history.push('/paso-5/actividad-2');
  };
  const back = () => {
    history.push('/paso-5/actividad-1/cuestionario-2');
  };

  return { next, back, onChange, onSubmit, preguntas };
};
