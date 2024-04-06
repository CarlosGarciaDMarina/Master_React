import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Articulos } from '../componentes/Articulos';
import { Contacto } from '../componentes/Contacto';
import { Inicio } from '../componentes/Inicio';
import { Error } from '../componentes/Error';
import { Persona } from '../componentes/Persona';
import { PanelControl } from '../componentes/PanelControl';
import { InicioPanel } from '../componentes/panel/Inicio';
import { Crear } from '../componentes/panel/Crear';
import { Gestion } from '../componentes/panel/Gestion';
import { Acerca } from '../componentes/panel/Acerca';


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
                <li>
                    <NavLink to="/panel"
                             className={({isActive}) => isActive ? "activado" : ""} >
                        Panel de control
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
                <Route path='/persona/:nombre' element={<Persona/>}></Route>
                <Route path='/persona' element={<Persona/>}></Route>
                <Route path='/redirigir' element={<Navigate to="/persona/carlos/garcia" />}></Route>

                <Route path='/panel/*' element={<PanelControl/>}>
                    <Route index element={<InicioPanel/>}></Route>
                    <Route path='crear-articulos' element={<Crear/>}></Route>
                    <Route path='gestion-usuarios' element={<Gestion/>}></Route>
                    <Route path='acerca-de' element={<Acerca/>}></Route>
                </Route>
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
