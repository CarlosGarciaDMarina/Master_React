// Un reducer tiene dos parametros, el estado (si inicializa vacio por defecto), y la accion a lanzar
export const JuegoReducer = (state = [], action) => {

    /* 
    Para lanzar un reducer usaremos un dispatch en el componente, a esta funcion dispatch le vamos a tener que pasar un objeto con dos datos: 
    - El tipo de accion que vamos a hacer: (En este caso crear o borrar).
    - El payload que serían los datos a guardar dentro del estado.
    */

    // Tenemos un switch que manejará los estados
    switch (action.type) {
        case "crear":
            // Devolvemos un array que va a tener todo lo que ya tenga el estado por defecto, más el nuevo juego (action.payload)
            return [...state, action.payload]; 

        case "borrar":
            // hacemos un filter para que recorra los juegos y compruebe que la id del juego sea distinto al payload, si es igual no se guarda 
            return state.filter(juego => juego.id !== action.payload);

        case "editar":
            // Para saber cual es el nombre que hay que editar hay que sacar la posicion del array de objetos está el elemento que queremos editar
            let indice = state.findIndex(juego => juego.id === action.payload.id); // state.findIndex es un método que te permit buscar un indice en concreto

            // Editamos el elemento con el valor del payload
            state[indice] = action.payload;

            // Actualizamos el estado
            return [...state]; 
    
        default:
            // El switch debe devolver siempre un estado, para eso sirve, para gestionar un estado
            return state;
    }
}
