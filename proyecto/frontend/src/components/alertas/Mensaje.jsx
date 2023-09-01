import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'

const Mensaje = () => {
    
    const TodoContext = useContext(todoContext);
    const {mensaje} = TodoContext;

  return (
    <div className='text-black border p-2 text-center text-3xl font-bold'>{mensaje}
    </div>
  )
}

export default Mensaje;