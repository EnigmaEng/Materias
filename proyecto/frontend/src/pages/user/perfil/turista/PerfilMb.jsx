import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import {AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import todoContext from '../../../../context/todoContext'
import { useContext } from 'react'
import Home from '../../../HomePublic/Home'

const PerfilMb = () => {

const Todocontext = useContext(todoContext)
const { usuario } = Todocontext

  return (
    <>
    {

      usuario.rol.nacionalidad ? 
 <div className=' min-h-screen dark:bg-zinc-800 dark:bg-opacity-80'>
        <NavBar/>
<div className=' mt-20 p-4 absolute top-14 left-8 rounded-lg shadow-xl w-10/12 bg-white dark:bg-zinc-800 text-black dark:text-white m-auto'>
  <div className=' gap-10  text-lg'>
      <p className='text-center font-bold text-3xl'>{usuario.rol.nombres}</p>
    <div className='flex flex-col  justify-center items-center gap-2 mt-5'>
      <div className='flex'>
        <img src={usuario.img_url_usuario} alt="perfil" className='border shadow-xl  rounded-full w-24 h-24' />
         <Link to='/editarPerfilTurista' className='absolute right-5 top-20 px-4 py-1.5 shadow-xl  h-8  flex gap-5 rounded-lg bg-red-800 '>  <AiOutlineEdit/> </Link>
      </div>
      
      <p className='text-gray-500 dark:text-white text-sm text-center'>@{usuario.alias}</p>
    </div>




</div>
<div className='p-3 gap-10 mt-3 '>
  <p> Nacionalidad: {usuario.rol.nacionalidad}</p>
  <p>Motivo de alojamiento: {usuario.rol.motivo_alojamiento}</p>
</div>
<div className=' mt-5 p-4 '>
  <p className=''>Calificaciones:</p>
  <div className='grid grid-cols-2 gap-1'>
    {/* Datos de prueba */}
    <div className=' shadow-xl rounded-lg text-sm px-3 space-y-2 py-3'>
      <p>Restaurante: Don Jaime</p>
      <p>Instalaciones: 6</p>
       <p>Gastronomia: 9</p>
       <p>Atencion: 9</p>
    </div>
      <div className=' shadow-xl rounded-lg text-sm px-3 space-y-2 py-3'>
      <p>Restaurante: Don Jaime</p>
      <p>Instalaciones: 6</p>
       <p>Gastronomia: 9</p>
       <p>Atencion: 9</p>
    </div>
      {/* Datos de prueba */}
  </div>
</div>
</div>




      
    </div>
    : 
    <Home/>
    }
   
    </>
  )
}

export default PerfilMb