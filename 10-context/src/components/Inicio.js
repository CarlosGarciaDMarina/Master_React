import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  // Creamos una variable para el context
  const compartida = useContext(PruebaContext);


  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de Inicio</p>
      <p>Valor compartido: <b>{compartida.titulo}</b></p>
    </div>
  )
}
