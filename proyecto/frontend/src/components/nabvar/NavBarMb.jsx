import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../../context/todoContext'
import Image from "../../assets/logo-white.png";
import DarkMode from '../Buttons/DarkMode';

const NavBarMb = () => {

const TodoContext = useContext(todoContext)
 const { cerrarSesion  } = TodoContext

  return (
<>

  <div className='bg-wwe navbar   shadow-xl'>
   
      
        <DarkMode/>
     
      
      <Link to='/homeAuth' className='w-12 ml-20 m-auto'> 
      
        <img src={Image} alt=""  />
      </Link>

   <button onClick={cerrarSesion}  className='absolute right-5  px-4 py-1 rounded-lg shadow-xl text-black bg-white font-bold'>Salir </button> 
  </div>

  </>



    
  )
}

export default NavBarMb