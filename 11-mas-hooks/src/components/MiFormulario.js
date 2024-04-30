import React, { useState } from 'react'

export const MiFormulario = () => {


    // Vamos a controlar los estados del formulario 
    const [ formulario, setFormulario ] = useState({});

    // Método para enviar el form
    const enviado = (e) => {
        e.preventDefault();
        console.log(e.target);
        
        //Creamos el objeto del curso
        let curso = {
            titulo: e.target.titulo.value,
            anio: e.target.anio.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }

        // Asignamos el objeto al estado del formulario 
        setFormulario(curso);
    }


  return (
    <div>
        <h1>MiFormulario</h1>
        <p>Formulario de pruebas</p>
        <p>Curso guardado:</p>
        <pre>{JSON.stringify(formulario)}</pre>

        <form className='mi-formulario' onSubmit={enviado} >

            <input type='text' placeholder='Título:' name='titulo' />
            <input type='number' placeholder='Año de la publicación:' name='anio' />
            <textarea placeholder='Descripción:' name='descripcion' />
            <input type='text' placeholder='Autor:' name='autor'/>
            <input type='email' placeholder='Correo de contacto:' name='email'/>
            <input type='submit' value="Enviar"/>

        </form>
    </div>
  )
}
