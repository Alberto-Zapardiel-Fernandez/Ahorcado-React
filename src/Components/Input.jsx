import React from 'react'
import { limpiar } from '../functions.js'

const Input = ({ setLetraIntroducida }) => {
  const ponerLetra = letra => setLetraIntroducida(letra.target.value.toUpperCase())
  const upper = e => (e.target.value = e.target.value.toUpperCase())
  return (
    <input
      className='input'
      placeholder='Introduce solo una letra'
      type='text'
      name='letraIntroducida'
      id='letraIntroducida'
      minLength={1}
      maxLength={1}
      onChange={ponerLetra}
      onFocus={limpiar}
      onKeyUp={upper}
    />
  )
}

export default Input
