import React from 'react'

const Ahorcado = ({ imagen }) => {
  return (
    <img
      src={imagen}
      alt='Ahorcado'
      style={{ height: '70%' }}
    />
  )
}

export default Ahorcado
