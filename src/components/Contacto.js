import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>
        Contacto
      </h1>
      <form className='contact' action="mailto:hello@evolve2digital.com" >
        <input type="text" name="name" placeholder='Nombre' />
        <input type="text" name="surname" placeholder='apellido' />
        <input type="text" name="telephone" placeholder='Teléfono' />
        <input type="text" name="email" placeholder='Email' />
        <textarea name="request" placeholder='Escribe tu consulta...' />
        <input type="submit" value="contact" />
      </form>
    </div>

  )
}
