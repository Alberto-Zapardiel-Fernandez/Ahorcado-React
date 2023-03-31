import React from 'react'

const Palabra = ({ palabra, letrasIntroducidas }) => {
  return (
    <div className='textoResolucion'>
      {palabra.map((letra, i) => (
        <span
          key={i}
          id={letra}
          className={letrasIntroducidas.includes(letra) ? 'letraVisible' : 'letraOculta'}
        >
          {letra}
        </span>
      ))}
    </div>
  )
}

export default Palabra
