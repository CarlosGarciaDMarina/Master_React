import React, { useContext } from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

    const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
    
    {/* Menú Navegación */}
    <header className='header'>
        <nav>
            <div className='logo'>
                <h2>Aprendiendo React</h2>
            </div>
            <ul>
                <li>
                    <NavLink to={"/"}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/articulos"}>
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/acerca-de"}>
                        Acerca de
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/contacto"}>
                        Contacto
                    </NavLink>
                </li>
                    {usuario.nick !== null ?(
                        //Abrimos un fragment vacio para poder usar ambls <li>
                        <> 
                            <li>
                                <NavLink to={"/"}>
                                    {usuario.nick}
                                </NavLink>
                            </li>
                            <li>
                            <a href='#' onClick={e => {
                                e.preventDefault();
                                setUsuario({
                                    nick: null,
                                    nombre: "carlos",
                                    web: "carlos.es"
                                  });
                            }}>
                                Cerrar Sesión
                            </a>
                            </li>
                        </>
                    ):(
                        <li>
                            <NavLink to={"/login"}>
                                Login
                            </NavLink>
                        </li>
                    )}
            </ul>
        </nav>
    </header>
    {/* Configurar Rutas */}
    <section className='content'>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
            <Route path='/acerca-de' element={<Acerca />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={(
                                        <div><h1>ERROR 404</h1></div>
                                    )} />
        </Routes>
    </section>

    </BrowserRouter>
  )
}
