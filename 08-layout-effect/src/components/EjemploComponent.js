import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

    const[ mostrar, setMostrar ] = useState(false);
    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(()=>{
        console.log("useLayoutEffect: Componente cargado !!!");
    }, []);

    useEffect(()=>{
        console.log("useEffect: Componente cargado !!!");
        if(caja.current == null) return

        // Donde esta posicionado el boton
        const {bottom} = boton.current.getBoundingClientRect();
        console.log(bottom);

        caja.current.style.top =`${bottom + 45}px`;
        caja.current.style.left =`${bottom + 45}px`;


    }, [mostrar]);


  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        <p>
            useEffect se ejecuta una vez el componente ha terminado de renderizarse.
        </p>
        <p>
            useLayoutEffect se ejecuta de manera Asyncrona despues de hacer todas las mutaciones y cambios en el DOM, 
            al ejecutarse antes permite hacer cambios en el DOM y estados antes del useEffect
        </p>

        <button ref={boton} onClick={() => setMostrar(prev => !prev) /* prev se recoge el último valor que tenia el estado */}>Mostrar mensaje</button>

        {
            mostrar && (
                <div id='caja' ref={caja}>
                    Hola, soy un mensaje
                </div>
            )
        }

    </div>
  )
}
