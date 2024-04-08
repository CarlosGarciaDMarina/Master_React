import React, { useRef } from 'react'

export const Formulario = () => {


    /*
        Podemos poner un valor por defecto para asignar un valor en caso de que el campo este vacio, 
        por ejemplo:
        const nombreValue = useRef("Carlos");

        Para acceder al value de este campo podemos utilizar un console.log(nombreValue.current.value);
    */

    // Los definimos pero los dejamos sin referencias por defecto para poder tomar las referencias de los input
    const nombreInput = useRef();
    const apellidoInput = useRef();
    const emailInput = useRef();
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();

        /* 
            Añadiomos una clase a mi caja cuando enviamos el form, classList es una propiedad que hay dentro ed cualquier elem del DOM, 
            si seleccionamos un div este tiene la propiedad classList, como todos los elems del dom, entonces con la propiedad add podemos 
            añadirle una clase. Ejemplo:

                miCaja.current.classList.add("fondoVerde");
                miCaja.current.innerHTML = "Formulario enviado con éxito";
        */
       // Vamos a darle a mi caja una desestructuracion para no tener que escribir todo el tiempo el .current
        let {current:caja} = miCaja;

        caja.classList.add("fondoVerde");
        caja.innerHTML = "Formulario enviado con éxito";
    }

  return (
    <div>
        
        <h1>Formulario</h1>

        <div ref={miCaja} className='miCaja'>
            <h2>Pruebas con useRef</h2>
        </div>

        <form onSubmit={mostrar}>
            <input type='text' placeholder='Nombre' ref={nombreInput} /><br/>
            <input type='text' placeholder='Apellidos' ref={apellidoInput} /><br/>
            <input type='text' placeholder='Correo electrónico' ref={emailInput} /><br/>

            <input type='submit' value='Enviar' /><br/>
        </form>

        <button onClick={() => nombreInput.current.select()}>Empezar a rellenar el formulario</button>


    </div>
  )
}
