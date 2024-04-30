import React, { useId } from 'react'

export const MiComponente = () => {

    // Crea identificadores que nunca se van a repetir
    const id = useId();

    console.log(id);

  return (
    <div>
        <h1>Hook useID</h1>
        <input id={id} name="Nombre" placeholder='Nombre' />
    </div>
  )
}
