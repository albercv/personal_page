import React from 'react'
import { Link } from 'react-router-dom'
import { Portafolio } from './Portafolio'
import { WorkList } from './WorkList'

export const Inicio = () => {
  return (
    <div className='home headerPart'>
      <h1>Hola! Soy Alberto. Desarrollador de software Full-Stack</h1>
      <div className='homeSubtitle'>
        <h2>
          Especializado en <strong>programación y desarrollo web.</strong>
        </h2>
        <h3>
          Ayudando a grandes y pequeñas empresas a desarollar sus sitios web visibles, rentables y escalables desde hace 8 años.
        </h3>
        <Link className='contactHome' to="/contact" >Contacta conmigo</Link>
      </div>
      <section className='lastWork'>
        <h2>Proyectos anteriores</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className='works'>
          <WorkList limit="2"/>
        </div>
      </section>
    </div>
  )
}
