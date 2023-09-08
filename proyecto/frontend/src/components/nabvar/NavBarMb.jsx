import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ButtonMb from '../Buttons/ButtonMb'
import todoContext from '../../context/todoContext'
const NavBarMb = () => {

const TodoContext = useContext(todoContext)
 const { autenticado, usuario, cerrarSesion  } = TodoContext

  return (
<>
{
  autenticado ? (<>
  <div className='bg-white navbar'>
    <div>
    <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-2'  />
    </div>
   <button onClick={cerrarSesion} className='absolute right-5 border px-4 py-1 rounded-lg shadow-xl text-black font-bold'>Salir </button> 
  </div>

 
  
  
  </>) : (
<>
  <div className='p-4 absolute  bottom-0 backdrop-blur-xl shadow-xl shadow-white w-full  flex items-center justify-center gap-10'>
      
      <Link to='/login'> 
        <ButtonMb >Ingresar</ButtonMb>
      </Link>
    <Link to='/registro'> 
        <ButtonMb >Registrarse</ButtonMb>
      </Link>
    </div>
    </>
  )

}


</>
    
  )
}

export default NavBarMb