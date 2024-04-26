import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  // Creamos una variable para el context utilizabndo la desestructuracion para acceder directamente al objeto
  const { usuario, setUsuario } = useContext(PruebaContext);


  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de Inicio</p>
      <p>Nombre: {usuario.nombre}</p>
      {/*<p>Valor compartido: <b>{compartida.titulo}</b></p>*/}
    </div>
  )
}
