import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [ nombre, setNombre ] = useState("");
    const [ pagina, setPagina ] = useState(1);

    const gestorInput = useRef();

    const asignarGestor = e => {
        setNombre(gestorInput.current.value);
    }


  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='Introduce tu nombre de gestor' />
        <h2>Listado de empleados: </h2>
        <p>Los usuarios son gestionados por {nombre} vienen de JSONplaceholder</p>
        <button onClick={() => {setPagina(1)}}>Página 1</button>
        <button onClick={() => {setPagina(2)}}>Página 2</button>
        <Empleados page={pagina}></Empleados>
    </div>
  )
}
