import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import todoContext from '../../context/todoContext'

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const { cerrarSesion, autenticado} = TodoContext;




  return (
    <>
{

  autenticado ? ( <div className='navbar bg-white m-auto shadow-xl '>
      <div>
            <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  />
      </div>
      <button onClick={() => cerrarSesion()} className='hover:scale-125 transition-all delay-150 duration-300 absolute right-10 rounded-lg border  shadow-xl text-black font-bold px-4 py-1'>
      Salir
      </button>
  </div>
  ) : (<div className='navbar bg-white m-auto shadow-xl '>
      <div>
            <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  />
      </div>
   <button className='bg-white px-4 py-1 rounded-lg text-black font-bold absolute right-10 border shadow-xl'>Registrate</button>
  </div>)
}

 
  
  
   </> 
  
    
  )
}

export default NavBarDsk