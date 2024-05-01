import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const MiFormulario = () => {

    const {formulario, enviado, cambiado } = useForm({});

  return (
    <div>
        <h1>MiFormulario</h1>
        <p>Formulario de pruebas</p>
        <p>Curso guardado: {formulario.titulo}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>

        <form className='mi-formulario' onSubmit={enviado} >

            <input type='text' placeholder='Título:' name='titulo' onChange={cambiado} />
            <input type='number' placeholder='Año de la publicación:' name='anio' onChange={cambiado} />
            <textarea placeholder='Descripción:' name='descripcion' onChange={cambiado} />
            <input type='text' placeholder='Autor:' name='autor' onChange={cambiado}/>
            <input type='email' placeholder='Correo de contacto:' name='email' onChange={cambiado} />

            <input type='submit' value="Enviar"/>

        </form>
    </div>
  )
}
