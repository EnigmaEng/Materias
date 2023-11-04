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
  ( <div className="bg-wwe rounded-full relative top-3 flex justify-between  w-[80%] m-auto  shadow-xl">
    <div className='absolute left-5 top-3 '>
       <DarkMode/>
    </div>


  <Link to='/homeAuth' className=' m-auto ml-32 '>  
    <img src={Image} alt="logo" className='w-14'/>
    </Link>

 <div className="mr-3 ">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle   m-2 shadow-xl">
        <div className=" ">
          <img src={usuario.url_img_usuario} className='w-12  h-12 rounded-full' />
        </div>
      </label>
      <ul tabIndex={0} className="z-10 px-4 py-4 z dropdown-content mt-3 border bg-white rounded-box w-40">
        <li className=' hover:bg-gray-200 rounded-lg p-2'>
          <Link to='/perfilRestaurante' className="gap-2 text-center w-40 text-black flex">
        Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/configuracionRest' className='text-black flex gap-4'> Configuración</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><button onClick={() => cerrarSesion()}  className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </button></li>
      </ul>
    </div>
  </div>
</div>
  
  ) : usuario && usuario.rol.nacionalidad ?
   // Turista Navbar
   (
    <>
   <TuristaMobile/>


 </>
    ) : usuario && usuario.rol.nro_empleado ? 
  (
    // Admin Navbar
 <div className="bg-wwe rounded-full relative top-3 flex  w-[80%] m-auto  shadow-xl">
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
 <Link to='/login' className='bg-white px-6 py-1 rounded-lg text-wwe text-lg'>Iniciar Sesión</Link>
  <Link to='/registro' className='bg-white px-6 py-1 rounded-lg text-wwe text-lg'>Registrarse</Link>
  </div>
 
</div>
}


  </>



    
  )
}

export default NavBarMb;