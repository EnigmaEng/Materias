import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../../context/todoContext'
import Image from "../../assets/logo-white.png";
import DarkMode from '../Buttons/DarkMode';
import { SlLogout } from 'react-icons/sl';
import {CgProfile} from 'react-icons/cg'
import {MdMenuBook} from 'react-icons/md'

const NavBarMb = () => {

 const TodoContext = useContext(todoContext)
  const {autenticado, usuarioAutenticado, usuario} = TodoContext;

useEffect(()=>{
usuarioAutenticado();
},[autenticado])

  return (
    <>
{

  usuario && usuario.rol.nombre ? 
   // Restaurante Navbar
  ( <div className="navbar  bg-wwe flex justify-center items-center gap-20 shadow-xl">
  <div className='gap-5 text-5xl text-white  '>
  
    <MdMenuBook/>
  </div>
 <div>
  <Link>
  <div className='text-5xl text-white'>
     <CgProfile/>
  </div>
 
   </Link>
  </div>
  <div className='text-white text-4xl'>
    <SlLogout/>
  </div>
</div>
  ) : usuario && usuario.rol.nacionalidad ?
   // Turista Navbar
   (
 <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>


  <div class="absolute right-0 z-10 mt-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
  
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
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

export default NavBarMb;