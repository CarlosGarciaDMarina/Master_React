import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

  const {nombre, apellido} = useParams();

  // Sirve para redirigir a otro sitio o mover al usuario entre las diferentes rutas de la web
  const navegar = useNavigate();


  const enviar = (e) => {
    // Para que no se envíe el formulario por defecto
    e.preventDefault();

    // Capturamos el nombre y el apellido
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;

    // Almacenamos la ruta
    let url = `/persona/${nombre}/${apellido}`;

    // Gestionamos distintas posibilidades
    if (nombre <= 0 && apellido <= 0) {
      // Si el nombre o el apellido están sin escribir le llevamos a inicio
      navegar("/inicio");

     } else if (nombre === "contacto") {
      // Si el nombre es contacto lo llevamos a la pagina de contacto
      navegar("/contacto");

     } else {
      // Redirigimos hacia la ruta
      navegar(url);
    }
  };

  return (
    <div>
        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Página de Persona: {nombre} {apellido}</h1>}
        <p>Esta es la página de Persona</p>

        <form onSubmit={enviar}>
          <input type='text' name='nombre' />
          <input type='text' name='apellido' />
          <input type='submit' name='enviar' value="enviar" />
        </form>

    </div>
  )
}
