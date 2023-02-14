import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>A</span>
            <h3>Alberto Carrasco WEB</h3>
            </div>
            <nav>
                <ul>
                    <li >
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li  >
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/cv">
                            Curriculum
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/portfolio">
                            Portafolio
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/services">
                            Servicios
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/contact">
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
