import { useState, useEffect } from 'react'
import './App.css'
import preguntas from './mocks/preguntas'

function App() {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(isCorrect, e){

    //puntos
    if (isCorrect) setPuntuacion(puntuacion + 1);

    //estilos
    e.target.classList.add(isCorrect ? "correct": "incorrect")

    //cambiar pregunta
    setTimeout(()=> {
      if(preguntaActual === preguntas.length -1 ){
        setIsFinished(true);
      } else{
        setPreguntaActual(preguntaActual + 1);
      }
    },200)
  }

  if (isFinished) return(
    <main className="app">
      <div className="juego-terminado">
        <span>
          {""}
          obtuviste {puntuacion} de {preguntas.length}{""}
        </span>
        <button onClick={()=> (window.location.href = "/")}>Jugar de nuevo</button>
      </div>
    </main>
  )


  return (
    <main className="app">
      <div className='lado-izquierdp'>
        <div className='numero-pregunta'>
          <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          <div className='titulo-pregunta'>{preguntas[preguntaActual].titulo}</div>
        </div>
      </div>
      <div className='lado-derecho'>
        {preguntas[preguntaActual].opciones.map((respuesta) =>(
          <button key={respuesta.textoRespuesta} onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}>{respuesta.textoRespuesta}</button>
        ))}
      </div>
    </main>
  )
}

export default App
