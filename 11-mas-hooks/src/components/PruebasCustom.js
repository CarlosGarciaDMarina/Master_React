import React from 'react'
import { useMayus } from '../hooks/useMayus' // Importamos el metodo

export const PruebasCustom = () => {

    // Desestructuramos el método
    const {estado, mayusculas, minusculas, concat} = useMayus("Carlos");

  return (
    <div>
        <h1>Probando componentes personalizados</h1>
        <h2>{estado}</h2>

        <button onClick={ mayusculas } >Poner en MAYUS</button>
        <button onClick={ minusculas } >Poner en minus</button>
        <button onClick={ e => concat(" Garcia de Marina") } >Concatenar</button>
    </div>
  )
}
