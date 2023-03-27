import React from 'react'
import './App.css'
import Ahorcado from './Components/Ahorcado.jsx'

const listaPalabras = ['pepino', 'cabeza', 'fregona', 'fecha', 'alberto']

const numeroAleatorio = () => {
  return Math.floor(Math.random() * listaPalabras.length)
}

const App = () => {
  const palabra = listaPalabras[numeroAleatorio()]
  console.log(palabra)

  return (
    <div className='container'>
      <h1>Ahorcado</h1>
      <div className='tablero'>
        <div className='imagen'>
          Texto
          <Ahorcado></Ahorcado>
        </div>
        <div className='juego'>
          <div className='letras'>letras</div>
          <div className='textoResolucion'>{`Palabra: ${palabra.split('')}`}</div>
        </div>
      </div>
    </div>
  )
}

export default App
