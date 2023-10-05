import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import todoContext from '../../context/todoContext'

import {SlLogout} from 'react-icons/sl'
import DarkMode from '../Buttons/DarkMode'
import Image from "../../assets/logo-white.png";

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const {autenticado, usuarioAutenticado, usuario} = TodoContext;

useEffect(()=>{
usuarioAutenticado();
},[autenticado])

  return (
    <>
{

  usuario && usuario.rol.nombre ? ( <div className="navbar bg-wwe  shadow-xl">
  <div className="flex-1">
    <div className='absolute left-5'>
       <DarkMode/>
    </div>
   
    <Link to='/homeAuth' className='m-auto w-14'>  
    <img src={Image} alt="logo"/>
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
          <Link to='/perfil' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link className='text-black flex gap-4'> Menu {usuario.nombre}</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/login'  className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </Link></li>
      </ul>
    </div>
  </div>
</div>
  ) : usuario && usuario.rol.nacionalidad ?
   (
  <div className="navbar bg-wwe  shadow-xl">
  <div className="flex-1">
    <div className='absolute left-5'>
       <DarkMode/>
    </div>
   
    <Link to='/homeAuth' className='m-auto w-14'>  
    <img src={Image} alt="logo"/>
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
          <Link to='/perfil' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link className='text-black flex gap-4'> Configuracion {usuario.alias}</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/' className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </Link></li>
      </ul>
    </div>
  </div>
</div>
    ) : 
  (
<p>Hola admin</p>
  )
}

 
  
  
   </> 
  
    
  )
}

export default NavBarDsk