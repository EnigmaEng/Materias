import React, { useContext, useEffect } from 'react'
import todoContext from '../../context/todoContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mensaje = () => {
    
    const TodoContext = useContext(todoContext);
    const {mensaje} = TodoContext;

      useEffect(() => {
    if (mensaje) {
      toast.info(mensaje, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, 
      });
    }
  }, []);

  return (
    
    <ToastContainer/>

  )
}

export default Mensaje;

