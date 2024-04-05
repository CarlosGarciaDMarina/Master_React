import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Articulos } from '../componentes/Articulos';
import { Contacto } from '../componentes/Contacto';
import { Inicio } from '../componentes/Inicio';
import { Error } from '../componentes/Error';
import { Persona } from '../componentes/Persona';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <h1>Cabecera</h1>
        <hr/>

        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" 
                             className={({isActive}) => isActive ? "activado" : ""} >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articulos"
                             className={({isActive}) => isActive ? "activado" : ""} >
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto"
                             className={({isActive}) => isActive ? "activado" : ""} >
                        Contacto
                    </NavLink>
                </li>
           </ul>
        </nav>
        <hr/>

        <section className='content'>
            {/* Cargar componentes */}
            {/* Aquí se va a cargar el componente que coincida con el path */}
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/inicio' element={<Inicio/>}></Route>
                <Route path='/articulos' element={<Articulos/>}></Route>
                <Route path='/contacto' element={<Contacto/>}></Route>
                <Route path='/persona/:nombre/:apellido' element={<Persona/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </section>
        <hr/>

        <footer>
            Este es el footer
        </footer>
    
    </BrowserRouter>
  )
}
