import { useState, useEffect } from 'react'
import './App.css'
import preguntas from './mocks/preguntas'

function App() {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

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
          <button key={respuesta.textoRespuesta}>{respuesta.textoRespuesta}</button>
        ))}
      </div>
    </main>
  )
}

export default App
