import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [ tareas,setTareas ] = useState([]);
    const [ contador,setContador ] = useState(0);

    const guardarTareas = e => {
        e.preventDefault();

        let tareas_actualizadas = [...tareas, e.target.descripcion.value]

        setTareas(tareas_actualizadas);
    }

    const borrarTarea = id => {
        // Filtrar las tareas para borrar la que no quiero 
        let  nuevas_tareas = tareas.filter((tarea, indice) => indice !== id);

        // Guardar el nuevo listado de tareas en el estado
        setTareas(nuevas_tareas);
    }


    const SumarContador = e => {
        setContador(contador + 1);

    }


    const contadoresPasados = (acumulacion) => {
        for (let i = 0; i <= acumulacion; i++){
            console.log("Ejecutando acumulación de contadores del pasado...");
        }

        return `Contador de tareas: ${acumulacion}`
    }

    // Con useMemo ejecutaremos la funcion solo cuando sea necesario y no en cada renderizacion, le pasamos el parametro de contador y, como 2do parametro, le vamos a pasar contador para que 
    // solo se ejecute y solo renderice cuando actualicemos el contador
    const memoContador = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className='tareas-container'>
        <h1>Mis tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='Describa la tarea'/>
            <input type='submit' value='Guardar'/>
        </form>

        <h3>{memoContador}</h3>
        <button onClick={SumarContador}>Sumar</button>

        <h3>Lista de tareas</h3>
        <ul>
            {
                tareas.map((tarea, indice) => {
                    return (
                        <li key={indice}>
                            {tarea}
                            &nbsp;
                            <button onClick={() => borrarTarea(indice)}>Borrar</button>
                        </li>
                    )
                })
            }
        </ul>


    </div>
  )
}
