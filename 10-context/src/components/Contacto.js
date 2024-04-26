import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const compartida = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de Contacto</p>
      {/*<p>Valor compartido: <pre>{JSON.stringify(compartida)}</pre></p>*/}
    </div>
  )
}
 