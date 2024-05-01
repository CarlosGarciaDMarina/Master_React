import { useState, useEffect } from "react";

export const useAjax = (url) => {

    // Controlamos los datos del usuario que vamos a recibir mediante el uso del hook useState
    const [ estado, setEstado ] = useState({
        datos: null,
        cargando: true
    });

    // Petición AJAX, 
    const getData = async() => {

        // Mantenemos los datos del usuario
        setEstado({
            ...estado,
            cargando: true
        });

        // Creamos la constante para la petición, usamos await para que espere el resultado del fetch que hagamos a la url que le pasemos
        const peticion = await fetch(url);

        // Sacamos los datos de la peticion
        const {data} = await peticion.json();

        // Seteamos el usuario y le pasamos como parametro el objeto con los datos
        setEstado({
            datos: data,
            cargando: false
        });
    }

    // Con el useEffect lo que vamos a hacer es hacer una llamada al usuario desde el primer momento
    useEffect(() => {
        // Le pasamos la url fija con el primer usuario para que siempre este mostrando algo
        getData();
    }, [url]);

    // Devolvemos los datos
    return{
        datos: estado.datos,
        cargando: estado.cargando
    }
}