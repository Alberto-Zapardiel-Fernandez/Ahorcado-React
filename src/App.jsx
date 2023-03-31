import React, { useEffect, useState } from 'react'
import './App.css'
import Ahorcado from './Components/Ahorcado.jsx'
import Input from './Components/Input.jsx'
import LetrasIntroducidas from './Components/LetrasIntroducidas.jsx'
import Palabra from './Components/Palabra.jsx'
import { revisaTurno, palabra, revisaFinal } from './functions.js'

const App = () => {
  let i = 0
  const [turno, setTurno] = useState(0)
  const [mensaje, setMensaje] = useState('')
  const [letraIntroducida, setLetraIntroducida] = useState('')
  const [letrasIntroducidas, setLetrasIntroducidas] = useState([])
  const [winner, setWinner] = useState(0)

  useEffect(() => {
    const final = revisaFinal(winner, setTurno)
    if (final) {
      setTimeout(() => {
        alert('¡Ganaste!')
        setTurno(0)
        setLetraIntroducida('')
        setLetrasIntroducidas([])
      }, 500)
    }
  }, [winner])

  const comprobarEnPalabra = letra => {
    if (palabra.includes(letra)) {
      palabra.split('').map(l => {
        if (l === letra) {
          i += 1
        }
      })
      setMensaje(`La palabra tiene ${i > 1 ? i + ' veces ' : i + ' vez '} la letra ${letraIntroducida} `)
      setLetraIntroducida('')
    } else {
      setMensaje('La palabra no tiene la ' + letraIntroducida)
      setLetraIntroducida('')
      const newTurn = turno + 1
      setTurno(newTurn)
      if (newTurn === 11) {
        setTimeout(() => {
          alert('Perdiste!')
          setTurno(0)
          setLetraIntroducida('')
          setLetrasIntroducidas([])
          setMensaje('Perdiste!')
        }, 500)
      }
      return
    }
    setWinner(i + winner)
  }

  const comprobarLetra = letraIntroducida => {
    const letra = e => e == letraIntroducida
    document.getElementById('letraIntroducida').value = ''
    if (letraIntroducida !== '') {
      if (!letrasIntroducidas.some(letra)) {
        setLetrasIntroducidas([...letrasIntroducidas, letraIntroducida])
        comprobarEnPalabra(letraIntroducida)
      } else {
        setMensaje('Ya introducida la ' + letraIntroducida)
        setTurno(turno + 1)
        return
      }
    } else {
      setMensaje('Campo vacío')
    }
  }

  return (
    <div className='container'>
      <h1>Ahorcado</h1>
      <div className='tablero'>
        <div className='imagen'>
          <Ahorcado imagen={revisaTurno(turno)}></Ahorcado>
        </div>
        <div className='juego'>
          <h2 className='mensaje'>{mensaje}</h2>
          {letrasIntroducidas.length > 0 ? <LetrasIntroducidas>{letrasIntroducidas}</LetrasIntroducidas> : <h2></h2>}
          <div>
            <Input setLetraIntroducida={setLetraIntroducida}></Input>
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
