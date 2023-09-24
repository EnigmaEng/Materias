import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import todoContext from '../../context/todoContext'

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const { cerrarSesion} = TodoContext

  const navigateHome = useNavigate('/');



  return (
    <>
<> <div className='navbar bg-white m-auto shadow-xl '>
      <div>
            <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  />
      </div>
      <Link to='/' className='hover:scale-125 transition-all delay-150 duration-300 absolute right-10 rounded-lg border  shadow-xl text-black font-bold px-4 py-1'>
      Salir
      </Link>
  </div> </> 
    </>
    
  )
}

export default NavBarDsk