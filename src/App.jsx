import React, { useEffect, useState } from 'react'
import './App.css'
import Ahorcado from './Components/Ahorcado.jsx'
import LetrasIntroducidas from './Components/LetrasIntroducidas.jsx'
import Palabra from './Components/Palabra.jsx'
import { revisaTurno, palabra, limpiar } from './functions.js'

const App = () => {
  let i = 0
  const [turno, setTurno] = useState(0)
  const [letraIntroducida, setLetraIntroducida] = useState('')
  const [letrasIntroducidas, setLetrasIntroducidas] = useState([])
  const [winner, setWinner] = useState(0)

  useEffect(() => {
    revisaFinal(winner)
  }, [winner])

  const revisaFinal = win => {
    if (win === palabra.length) {
      setTurno(12)
    }
  }

  const comprobarEnPalabra = letra => {
    if (palabra.includes(letra)) {
      palabra.split('').map(l => {
        if (l === letra) {
          i += 1
        }
      })
    } else {
      //TODO: Poner mensaje de que la palabra no contiene la letra
      console.log('La palabra no tiene la ' + letraIntroducida)
      setTurno(turno + 1)
      return
    }
    setWinner(i + winner)
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
          <Ahorcado imagen={revisaTurno(turno)}></Ahorcado>
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
          <Palabra
            palabra={palabra.split('')}
            letrasIntroducidas={letrasIntroducidas}
          ></Palabra>
        </div>
      </div>
    </div>
  )
}

export default App
