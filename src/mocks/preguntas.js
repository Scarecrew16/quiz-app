const preguntas = [
    {
      titulo: "¿Cuál es el mejor lenguaje de programación?",
      opciones: [
        { textoRespuesta: "JavaScript", isCorrect: true },
        { textoRespuesta: "PHP", isCorrect: false },
        { textoRespuesta: "C++", isCorrect: false },
        { textoRespuesta: "Kotlin", isCorrect: false },
      ],
    },
    {
      titulo: "Naruto no sería naruto sin...?",
      opciones: [
        { textoRespuesta: "sin contenido", isCorrect: false },
        { textoRespuesta: "sin relleno", isCorrect: true },
        { textoRespuesta: "sin gracia :v", isCorrect: false },
        { textoRespuesta: "sin código", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
      opciones: [
        { textoRespuesta: "111", isCorrect: true },
        { textoRespuesta: "12", isCorrect: false },
        { textoRespuesta: "Syntax Error", isCorrect: false },
        { textoRespuesta: "`11`1", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuando es el cumpleaños de guillermo del toro?",
      opciones: [
        { textoRespuesta: "15 de Enero", isCorrect: false },
        { textoRespuesta: "17 de agosto", isCorrect: false },
        { textoRespuesta: "28 de diciembre", isCorrect: false },
        { textoRespuesta: "09 de octubre", isCorrect: true },
      ],
    },
  ];
  
  export default preguntas;