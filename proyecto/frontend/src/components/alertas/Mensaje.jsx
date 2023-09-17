import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'

const Mensaje = () => {
    
    const TodoContext = useContext(todoContext);
    const {mensaje} = TodoContext;

  return (
    <div className='text-black  p-2 bg-white text-center w-56 m-auto text-sm shadow-xl rounded-lg mb-4 font-bold'>{mensaje}
    </div>
  )
}

export default Mensaje;