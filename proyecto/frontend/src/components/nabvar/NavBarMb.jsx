import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../../context/todoContext'


const NavBarMb = () => {

const TodoContext = useContext(todoContext)
 const { cerrarSesion  } = TodoContext

  return (
<>

  <div className='bg-red-800 navbar   shadow-xl'>
    <div>
      <Link to='/homeAuth'> 
      
        {/* <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-2'  /> */}
      </Link>
 
    </div>
   <button onClick={cerrarSesion}  className='absolute right-5  px-4 py-1 rounded-lg shadow-xl text-black bg-white font-bold'>Salir </button> 
  </div>

  </>



    
  )
}

export default NavBarMb