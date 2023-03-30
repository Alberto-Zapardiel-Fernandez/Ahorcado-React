import React from 'react'

const LetrasIntroducidas = ({ children }) => {
  let letras = ''
  if (children.length > 0) {
    letras = children.map(child => child + ',')
  }
  return (
    <>
      <h2>Lista de letras introducidas</h2>
      <div className='letrasIntroducidas'>{letras}</div>
      <div></div>
    </>
  )
}

export default LetrasIntroducidas
