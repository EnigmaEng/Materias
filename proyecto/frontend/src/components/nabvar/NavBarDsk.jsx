import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import todoContext from '../../context/todoContext'

import {SlLogout} from 'react-icons/sl'
import DarkMode from '../Buttons/DarkMode'
import Image from "../../assets/logo-white.png";

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const {autenticado, usuarioAutenticado, usuario, cerrarSesion} = TodoContext;

useEffect(()=>{
usuarioAutenticado();
},[autenticado])

  return (
    <>
{

  usuario && usuario.rol.nombre ? 
   // Restaurante Navbar
  ( <div className="navbar  bg-wwe  shadow-xl">
  <div className="flex-1">
    <div className='absolute left-5'>
       <DarkMode/>
    </div>
   
    <Link to='/homeAuth' className='m-auto w-14 '>  
    <img src={Image} alt="logo" className='ml-8'/>
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
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/configuracionRest' className='text-black flex gap-4'> Configuracion</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><button onClick={() => cerrarSesion()}  className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </button></li>
      </ul>
    </div>
  </div>
</div>
  ) : usuario && usuario.rol.nacionalidad ?
   // Turista Navbar
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
          <Link to='/perfilTurista' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/configuracion' className='text-black flex gap-4'> Configuracion </Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><button onClick={() => cerrarSesion()} className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </button></li>
      </ul>
    </div>
  </div>
</div>
    ) : usuario && usuario.rol.nro_empleado ? 
  (
    // Admin Navbar
 <div className="navbar bg-wwe  shadow-xl">
  <div className="flex-1 gap-5">
    <div className='absolute left-5'>
       <DarkMode/>
    </div>
   
    <Link to='/homeAuth' className='m-auto w-14'>  
    <img src={Image} alt="logo"/>
    </Link>
     
     <div className='text-white text-lg'>
      <p className='space-x-5'>{usuario.nombres} {usuario.apellidos}</p>
      
     </div>
  </div>
 
</div>

  ) :  <div className="navbar bg-wwe  shadow-xl">
  <div className="flex-1 gap-5">
    <div className='absolute left-5'>
       <DarkMode/>
    </div>
   
    <Link to='/homeAuth' className='m-auto w-14'>  
    <img src={Image} alt="logo"/>
    </Link>
 <Link to='/login' className='bg-white px-6 py-1 rounded-lg text-wwe text-lg'>Iniciar sesion</Link>
  <Link to='/registro' className='bg-white px-6 py-1 rounded-lg text-wwe text-lg'>Registrarse</Link>
  </div>
 
</div>
}

 
  
  
   </> 
  
    
  )
}

export default NavBarDsk