import { useState } from 'react'; // Vamos a trabajar con estados

// Exportamos el hook
export const useMayus = (texto) => {

    // Creamos un estado
    const [ miTexto, setMiTexto ] = useState(texto);

    // Funcion que transforma el texto en MAYUS
    const mayusculas = () => {
        // Seteamos miTexto
        setMiTexto(texto.toUpperCase());
    }

    // Funcion que transforma el texto en minus
    const minusculas = () => {
        // Seteamos miTexto
        setMiTexto(texto.toLowerCase());
    }

    // Funcion que concatena un texto con otro que le pasamos
    const concat = (added) => {
        // Seteamos miTexto
        setMiTexto(texto + added);
    }

    // Devolvemos las funciones
    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        concat
    };
}