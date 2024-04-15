import React, { useEffect, useReducer } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

// La definimos fuera porque va a ejecutarse despues
const init = () => {
    // Va a procesar un dato para pasarselo al estado despues
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () => {

    // Definimos el use reducer, a useReducer le pasamos: el reducer, el estado tal cual lo queremos inicializar, y la funcion inicializadora.
    const [ juegos, dispatch ] = useReducer(JuegoReducer, [], init);

    // Va a definir los datos que hay dentro del local storage y solo va a iniciarse cuando carga el componente (juegos)
    useEffect(() => {
        // Definimos los datos que tiene el local storage dentro
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatos = e => {
        // Sirve para que no se va a refrescar automaticamente
        e.preventDefault();

        // Creamos el objeto que guarda en el array de objetos los juegos que vamos a almacenar
        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        // Para que se lance el reducer tenemos que crear una accion
        const action = {
            type: "crear",
            payload: juego
        };

        // usamos el dispatch
        dispatch(action);

        console.log(juegos);

    }

    // Esta funcion borra un juego
    const borrarJuego = id => {
        const action = {
            type: "borrar",
            payload: id
        };
        
        // Le pasamos la accion al dispatch 
        dispatch(action);

    }

    const editar = (e, id) => {
        console.log(e.target.value, "editar", id);

        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        };

        const action = {
            type: "editar",
            payload: juego
        };

        // Le pasamos la accion al dispatch 
        dispatch(action);
    }



  return (
    <div>
        <h1>Estos son mis videojuegos</h1>

        <p>Número de videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}
                        &nbsp;
                        <button onClick={e => borrarJuego(juego.id)}>Borrar</button>
                        <input type='text' onBlur={ e => editar (e, juego.id)}
                                           onKeyPress={ e=> {
                                                if (e.key === "Enter") {
                                                    editar(e, juego.id);
                                                    console.log("Has presionado Enter.");
                                                }
                                           }}       
                        
                        />
                    </li>
                ))
            }
        </ul>

        <h3>Agregar juego</h3>
        <form onSubmit={conseguirDatos}>
            <input type='text' placeholder='título' name='titulo'/>
            <textarea name='descripcion' placeholder='descripcion'></textarea>
            <input type='submit' value="Guardar"/>
        </form>


    </div>
  )
}
