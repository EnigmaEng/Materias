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
},[])


// const nombreCompletoTurista = usuario.rol.nombres
// const primeraLetraTurista = nombreCompletoTurista.charAt(0);

  return (
    <>
{

  usuario && usuario.rol.nombre ? 
   // Restaurante Navbar
  ( <div className=" bg-wwe rounded-full relative top-3 flex  w-[30%] m-auto  shadow-xl">
<div className='w-24 py-4 px-5'>
   <DarkMode/>
</div>

   
    <Link to='/homeAuth' className='m-auto '>  
    <img src={Image} alt="logo" className='w-14 mr-5'/>
    </Link>

 


  <div className="flex-none  mr-5">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} id='' className="btn btn-ghost btn-circle  bg-white mt-3 shadow-xl">
        <div className="rounded-full ">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='w-14 rounded-full' />
          
       

        </div>
        
      </label>
      <ul tabIndex={0} className="z-10 px-4 py-4 z dropdown-content mt-3 border bg-white rounded-box w-40">
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
  <div className="bg-wwe rounded-full relative top-3 flex  w-[30%] m-auto  shadow-xl">

    <div className='w-24 py-4 px-5'>
       <DarkMode/>
    </div>
  
    <Link to='/homeAuth' className=' m-auto'>  
    <img src={Image} alt="logo" className='mr-5 w-14'/>
    </Link>


  <div className="flex-none mr-5">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} id='' className="btn btn-ghost btn-circle  bg-white mt-3 shadow-xl ">
        <div className="rounded-full ">
          
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='w-14 rounded-full' />
       
        
        </div>
      </label>
      <ul tabIndex={0} className=" z-10 px-4 py-4 dropdown-content mt-3 border bg-white rounded-box w-40">
        <li className=' hover:bg-gray-200 rounded-lg p-2'>
          <Link to='/perfilTurista' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/editarPerfilTurista' className='text-black flex gap-4'> Editar perfil </Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><button onClick={() => cerrarSesion()} className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </button></li>
      </ul>
    </div>
  </div>
</div>
    ) : usuario && usuario.rol.nro_empleado ? 
  (
    // Admin Navbar

    <div className=''>
      <div className='min-h-screen'>
        
        <div className='absolute left-0 h-full glass p-8 w-80 text-black space-y-10 py-10'>
          
          <Link to='/homeAuth'>
             <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo" className='w-14 rounded-full m-auto mb-8' />
          </Link>

          <div className='shadow-xl px-6 py-3 rounded-box'>
            <img src={usuario.rol.url_img_usuario} alt="foto-perfil" className='w-24 h-24 rounded-full bg-zinc-500 shadow-xl m-auto' />
            <p className='text-center text-white mt-2'>{usuario.rol.nombres}</p>
          </div>
           <div className='shadow-xl hover:text-wwe px-6 py-3 rounded-box font-aref min-w-max'>
            <p>Solicitudes </p>
          </div>
           <div className='shadow-xl hover:text-wwe px-6 py-3 rounded-box font-aref min-w-max'>
            <p> solicitudes </p>
          </div>
        </div>
    </div>
    </div>

  ) : <div className=" bg-wwe rounded-full relative top-3 flex  w-[30%] m-auto  shadow-xl">
<div className='w-24 py-4 px-5'>
   <DarkMode/>
</div>

   
    <Link to='/homeAuth' className='m-auto '>  
    <img src={Image} alt="logo" className='w-14 mr-5'/>
    </Link>

 


  <div className="mt-5 space-x-10">

    
        
     
     <div className='flex gap-5 mr-5'>
      <Link className='bg-white p-2 rounded-lg text-black'>Iniciar sesion</Link>
      <Link className='bg-white p-2 rounded-lg text-black'>Registrarse</Link>

    </div>
  </div>
  
</div>
}

 
  
  
   </> 
  
    
  )
}

export default NavBarDsk