import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [ usuario, setUsuario ] = useState({});

    const conseguirDatosFormulario = e => {
        // Esta funcion previene el envio por defecto de cualquier formulario
        e.preventDefault();

        // Capturamos los datos
        let datos = e.target;

        // Metemos los datos en un objeto 
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }

        // 
        console.log(usuario);

        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let nombre_input = e.target.name;

        // Vamos a seleccionar dinámicamente mediante el nombre_input el dato que yo quiera
        // usuario_modificar[nombre_input] = e.target.value;

        //  Usamos una funcion de callback para capturar el estado previo 
        setUsuario(estado_previo => ({
                ...estado_previo, // Con los tres puntos ... capturamos el estado previo
                [nombre_input]: e.target.value // Sobreescribimos la propiedad
            })
        );
    }

  return (
    <div>
        <h1>Formularios con React</h1>

        {(usuario.bio) && (usuario.bio.length >= 1) &&
            (
                <div className='info_usuario label label-grey'>
                    {usuario.nombre} {usuario.apellido} es un {usuario.genero}
                    y su biografía es esta: <p>{usuario.bio}</p>
                </div>
            )
        }

        <form onSubmit={conseguirDatosFormulario}>
            <input type='text' name='nombre' placeholder='Nombre' onChange={cambiarDatos} />
            <input type='text' name='apellido' placeholder='Apellido' onChange={cambiarDatos} />
            <select name='genero' onChange={cambiarDatos}>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <textarea name='bio' placeholder='Biografia' onChange={cambiarDatos}></textarea>
            <input type='submit' value="Enviar" onChange={cambiarDatos} name='enviar' />
        </form>
    </div>
  )
}
