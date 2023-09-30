import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import todoContext from '../../context/todoContext'
import {AiOutlineUser} from 'react-icons/ai'
import {MdRestaurantMenu} from 'react-icons/md'
import {SlLogout} from 'react-icons/sl'

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const { cerrarSesion, usuarioAutenticado, usuario} = TodoContext;

useEffect(() =>{

    usuarioAutenticado();
  
},[])


  return (
    <>
{

  usuario ? ( <div className="navbar bg-red-800 border shadow-xl">
  <div className="flex-1">
    <Link to='/homeAuth'>  
      <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  />
    </Link>
 
  </div>
  <div className="flex-none mr-8">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14">
        <div className="rounded-full ">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='w-14 rounded-full' />
        </div>
      </label>
      <ul tabIndex={0} className="px-4 py-4 dropdown-content mt-3 border bg-white rounded-box w-40">
        <li className=' hover:bg-gray-200 rounded-lg p-2'>
          <Link to='/perfilRestaurante' className="gap-2 text-center w-40 text-black flex">
         Perfil {usuario.email}
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link className='text-black flex gap-4'> Menu</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/' className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </Link></li>
      </ul>
    </div>
  </div>
</div>
  ) : (<div className='navbar bg-red-800 m-auto shadow-xl '>
      <div>
            {/* <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  /> */}
      </div>
  
  </div>)
}

 
  
  
   </> 
  
    
  )
}

export default NavBarDsk