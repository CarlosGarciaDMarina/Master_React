import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [ nombre, setNombre ] = useState("");
    const [ pagina, setPagina ] = useState(1);

    const gestorInput = useRef();

    const asignarGestor = e => {
        setNombre(gestorInput.current.value);
    }

    useEffect(() => {
        console.log("Vista de gestión actualizada.");
    }, [nombre, pagina]);

    // Con el use callback lo que hacemos es que solo se renderice la funcion cuando la actualicemos, y no constantemente. Es parecido a useMemo
    const mostrarMensaje = useCallback(() => {
        console.log("HOLA! Soy un mensaje.");
    }, [pagina]);// Las dependencias es lo que marca su actualizacion, le vamos a poner la pagina para marcar que se tiene que renderizar cada vez que se actualice la pagina


  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='Introduce tu nombre de gestor' />
        <h2>Listado de empleados: </h2>
        <p>Los usuarios son gestionados por {nombre} vienen de JSONplaceholder</p>
        <button onClick={() => {setPagina(1)}}>Página 1</button>
        <button onClick={() => {setPagina(2)}}>Página 2</button>

        <Empleados page={pagina} mensaje= {mostrarMensaje} ></Empleados>
    </div>
  )
}
