import React, { useState } from 'react'
import './App.css'
import Ahorcado from './Components/Ahorcado.jsx'
import LetrasIntroducidas from './Components/LetrasIntroducidas.jsx'
import { revisaTurno, palabra, limpiar } from './functions.js'

const App = () => {
  const [turno, setTurno] = useState(0)
  const [letraIntroducida, setLetraIntroducida] = useState('')
  const [letrasIntroducidas, setLetrasIntroducidas] = useState([])

  const comprobarEnPalabra = letra => {
    if (palabra.includes(letra)) {
      //TODO: Ver que salgan todas las letras bien en el string o transformarlo en array y buscar sus posiciones para luego revelarlas
      console.log('La palabra: ' + palabra + ' tiene la ' + letra)
    } else {
      //TODO: Poner mensaje de que la palabra no contiene la letra
      console.log('La palabra no tiene la ' + letraIntroducida)
      setTurno(turno + 1)
      return
    }
  }

  const comprobarLetra = letraIntroducida => {
    const letra = e => e == letraIntroducida
    if (!letrasIntroducidas.some(letra)) {
      setLetrasIntroducidas([...letrasIntroducidas, letraIntroducida])
      comprobarEnPalabra(letraIntroducida)
    } else {
      //TODO: Poner mensaje de que ya está metida la letra
      console.log('Ya introducida la ' + letraIntroducida)
      setTurno(turno + 1)
      return
    }
  }
  const ponerLetra = letra => setLetraIntroducida(letra.target.value.toUpperCase())

  return (
    <div className='container'>
      <h1>Ahorcado</h1>
      <div className='tablero'>
        <div className='imagen'>
          {/* //TODO: Poner la imagen y fin del juego */}
          <Ahorcado imagen={revisaTurno(turno)}></Ahorcado>
          <button onClick={() => setTurno(turno + 1)}>Pasa turno</button>
        </div>
        <div className='juego'>
          {letrasIntroducidas.length > 0 ? <LetrasIntroducidas>{letrasIntroducidas}</LetrasIntroducidas> : <p></p>}
          <div>
            {/* //TODO: Crear componente con input y boton */}
            <input
              placeholder='Introduce solo una letra'
              type='text'
              name='letraIntroducida'
              id='letraIntroducida'
              minLength={1}
              maxLength={1}
              onChange={ponerLetra}
              onFocus={limpiar}
            />
            <button
              className='btn_separated'
              onClick={() => comprobarLetra(letraIntroducida)}
            >
              Comprobar letra
            </button>
          </div>
          {/* //TODO: Crear componente con las letras underlined pero ocultas */}
          <div className='textoResolucion'>{`Palabra: ${palabra.split('')}`}</div>
        </div>
      </div>
    </div>
  )
}

export default App
