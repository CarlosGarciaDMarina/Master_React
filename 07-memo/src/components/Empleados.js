import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
    ({page}) => {
            // Inicializamos el useState
            const [ usuarios, setUsuarios ] = useState([]);

            useEffect(()=>{
                getUsuario(page);
            }, [page]);

            // Usamos las async await
            const getUsuario = async(page) => {

                // Gestionamos posibles errores con try-catch
                try {
                    // MEtemos la url en una variable
                    const url = 'https://reqres.in/api/users?page=' + page;

                    // Hacemos la peticion al servidor
                    const peticion = await fetch(url);

                    // Recogemos los datos 
                    const {data: usuarios}  = await peticion.json();

                    // Ahora los datos los seteamos a los usuarios
                    setUsuarios(usuarios);


                } catch (error) {
                    console.log(error);
                }
            }// End getUsuario



        return (
            <div>
                <p>Mostrando la página: {page}</p>
                <ul className='usuarios'>
                    {usuarios.length >= 1 &&
                        usuarios.map( usuario => {
                            return <li key={usuario.id}>
                                        {`${usuario.first_name} ${usuario.last_name}`}
                                    </li>
                    })}
                </ul>
            </div>
        )
    }
);