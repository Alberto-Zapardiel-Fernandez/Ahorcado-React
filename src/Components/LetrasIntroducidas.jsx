import React from 'react'

const LetrasIntroducidas = ({ children }) => {
  let letras = ''
  if (children.length > 0) {
    letras = children.map(child => child + '-')
  }
  return (
    <>
      <div className='letrasIntroducidas'>{letras.join('').substring(0, letras.join('').length - 1)}</div>
    </>
  )
}

export default LetrasIntroducidas
