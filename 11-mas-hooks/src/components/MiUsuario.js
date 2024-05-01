import React, { useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

    // Usamos el useState para controlar el estado de la url y poder setear siempre sus cambios a la url
    const [url, setUrl] = useState("https://reqres.in/api/users/1")
    // Desestructuramos useAjax para poder trabajar con las peticiones asíncronas
    const {datos, cargando} = useAjax(url);

    // Creamos un metodo que consigue la id del usuario
    const getID = e => {
        // Transformamos a entero la id
        let id = parseInt(e.target.value);
        // Seteamos la url para poder mostrar siempre los cambios en la id de los distintos usuarios
        setUrl("https://reqres.in/api/users/" + id);
    }

  return (
    <div>
        <h1>Mi usuario: </h1>
        <p>Datos del usuario:</p>
        <p>{
                cargando ? "Cargando" : ""
            }</p>
        <p>{
            // La interrogacion es como hacer un if true (si hay usuario y si hay datos que nos imprima el first_name)
            datos?.first_name
        }
        {
            datos?.last_name
        }</p>

        <input type='number' name='id' onChange={ getID } />
    </div>
  )
}
