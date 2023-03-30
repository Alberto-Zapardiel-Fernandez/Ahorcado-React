import cero from './assets/0.jpg'
import uno from './assets/1.jpg'
import dos from './assets/2.jpg'
import tres from './assets/3.jpg'
import cuatro from './assets/4.jpg'
import cinco from './assets/5.jpg'
import seis from './assets/6.jpg'
import siete from './assets/7.jpg'
import ocho from './assets/8.jpg'
import nueve from './assets/9.jpg'
import diez from './assets/10.jpg'
const listaPalabras = ['pepino', 'cabeza', 'fregona', 'fecha', 'alberto']

const numeroAleatorio = () => {
  return Math.floor(Math.random() * listaPalabras.length)
}
export const palabra = listaPalabras[numeroAleatorio()].toUpperCase()

export const revisaTurno = valorTurno => {
  if (valorTurno > 10) {
    console.log('Fin')
  }
  switch (valorTurno) {
    case 0:
      return cero
    case 1:
      return uno
    case 2:
      return dos
    case 3:
      return tres
    case 4:
      return cuatro
    case 5:
      return cinco
    case 6:
      return seis
    case 7:
      return siete
    case 8:
      return ocho
    case 9:
      return nueve
    case 10:
      return diez

    default:
      break
  }
}

export const limpiar = e => {
  e.target.value = ''
}
