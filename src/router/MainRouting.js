import React from 'react'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Contacto } from '../components/Contacto'
import { Portafolio } from '../components/Portafolio'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { HeaderNav } from '../components/layout/HeaderNav'
import { FooterComp } from '../components/layout/FooterComp'
import { NotFound } from '../components/NotFound'

export const MainRouting = () => {
  return (
    <BrowserRouter>
    <HeaderNav/>
    <section className='mainContent'>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Inicio />}/>
            <Route path="/contact" element={<Contacto />}/>
            <Route path="/cv" element={<Curriculum />}/>
            <Route path="/portfolio" element={<Portafolio />}/>
            <Route path="/services" element={<Servicios />}/>
            <Route path='/*' element={<NotFound />} />
        </Routes>
        </section>
        <FooterComp />
    </BrowserRouter>
  )
}
