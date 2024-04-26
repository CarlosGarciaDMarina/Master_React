import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  // useContext
  const { usuario, setUsuario } = useContext(PruebaContext);

  // Funcion para guardar los datos del formulario
  const guardarDatos = e => {
    e.preventDefault();

    let usuario_form = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value
    };

    setUsuario(usuario_form);
  }



  return (
    <div>
      <h1>Login</h1>
      <p>Página de Login</p>

    <form className='login' onSubmit={guardarDatos}>
      <input type='text' name='nick' placeholder='Nickname' />
      <input type='text' name='nombre' placeholder='Nombre' />
      <input type='text' name='web' placeholder='Web' />

      <input type='submit' value="Enviar" />
    </form>

    </div>
  )
}
