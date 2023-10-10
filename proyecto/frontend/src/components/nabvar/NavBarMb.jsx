import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../../context/todoContext'
import Image from "../../assets/logo-white.png";
import DarkMode from '../Buttons/DarkMode';
import { SlLogout } from 'react-icons/sl';
import {CgProfile} from 'react-icons/cg'
import {MdMenuBook} from 'react-icons/md'
import TuristaMobile from './mobile/TuristaMobile';
const NavBarMb = () => {

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
  ( <div className="navbar  bg-wwe flex justify-center items-center gap-20 shadow-xl">
  <Link to='/menu' className='gap-5 text-5xl text-white  '>
  
    <MdMenuBook/>
  </Link>
 <div>
  <Link to='/perfilRestaurante'>
  <div className='text-5xl text-white'>
     <CgProfile/>
  </div>
 
   </Link>
  </div>
  <button className='text-white text-4xl' onClick={() => cerrarSesion()}>
    <SlLogout/>
  </button>
</div>
  ) : usuario && usuario.rol.nacionalidad ?
   // Turista Navbar
   (
    <>
   <TuristaMobile/>
{/* <div className='navbar bg-wwe  shadow-xl'>
 <div className='absolute left-5'>
       <DarkMode/>
    </div>
   <Link to='/homeAuth' className='m-auto w-14'>  
    <img src={Image} alt="logo"/>
    </Link>

</div> */}

 </>
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