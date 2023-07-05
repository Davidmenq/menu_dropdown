'use client'

import { useState } from 'react';
import "../hojas-de-estilos/Acordeon.css";

const Acordeon = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="wraper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ?  '-' : '+'}</span>
            </div>
            <div className={selected === i ?  'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: "question 1",
    answer:
      "Hola, esta es la data de la pregunta 1. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
  {
    question: "question 2",
    answer:
      "Hola, esta es la data de la pregunta 2. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
  {
    question: "question 3",
    answer:
      "Hola, esta es la data de la pregunta 3. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
  {
    question: "question 4",
    answer:
      "Hola, esta es la data de la pregunta 4. Si quieres saber mas sobre como se debe conseguir mas informacion llamame por el dia, te contestare apenas me sea posible",
  },
];

export default Acordeon;
