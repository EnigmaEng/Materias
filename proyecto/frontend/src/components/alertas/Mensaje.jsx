import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'

const Mensaje = () => {
    
    const TodoContext = useContext(todoContext)
    const {mensaje} = TodoContext;

  return (
    <p className='text-black text-2xl font-bold'>{mensaje}
    </p>
  )
}

export default Mensaje;