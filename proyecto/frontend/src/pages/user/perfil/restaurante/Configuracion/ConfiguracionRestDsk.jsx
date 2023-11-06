import React, { useEffect } from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import { useContext } from 'react'
import todoContext from '../../../../../context/todoContext'

const ConfiguracionRestDsk = () => {


  const {usuario} = useContext(todoContext)

  
  return (
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 '>
    <NavBar/>
 
    <Link to='/homeAuth' className='absolute py-1.5 top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'><BiArrowBack/></Link>
 
  
<div className='bg-white w-7/12 h-11/12  m-auto mt-20  p-10 text-3xl text-black  rounded-box'>
    <h2 className='text-center text-center font-aref font-semibold text-wwe font-aref  text-3xl mb-24'>Configuración de la cuenta</h2>
    <div className='border   p-4 mb-10 rounded-box shadow-xl'> <h2 className='text-center font-aref font-semibold text-white font-aref font-semibold text-wwe mb-5'>Editar perfil</h2> 
    <hr />
    <div className='flex items-center justify-center'>
      <Link to='/editarPerfil' className=' font-aref font-semibold text-white text-center px-2 py-0.5 rounded-lg bg-wwe text-white font-areft font-semibold w-64 py-1'>Editar</Link>
    </div>
    </div>
    
    <div className='border text-center font-aref font-semibold text-wwe p-4 mb-10 rounded-box  shadow-xl'>
        <h2 className='mb-5 font-aref px-2'>Crear promoción</h2>
        <hr />
        <Link to='/crearDescuentos' className='font-aref font-semibold text-white text-center px-2 py-0.5 rounded-lg bg-wwe text-white font-areft font-semibold w-64 py-1 '>Crear promoción</Link>
        </div>
          <div className='border text-center font-aref font-semibold text-wwe p-4 mb-10 rounded-box  shadow-xl'>
        <h2 className='mb-5 font-aref'>Promociones</h2>
        <hr />
        <div className='flex items-center justify-center'>
          <Link to='/descuentoByIdUsuario' className=' font-aref font-semibold text-white text-center px-2 py-0.5 rounded-lg bg-wwe text-white font-areft font-semibold w-64 py-1'>Ver promociones</Link>
        </div>
        
        </div>
          <div className='border text-center font-aref font-semibold text-wwe p-4 mb-10 rounded-box  shadow-xl'>
        <h2 className='mb-5 font-aref'>Registro de visitas</h2>
        <hr />
        <div className='flex items-center justify-center'>
          <Link to='/verTokens' className=' font-aref font-semibold text-white text-center px-2 py-0.5 rounded-lg bg-wwe text-white font-areft font-semibold w-64 py-1'>Ver visitas</Link>
        </div>
        
        </div>
        
</div>
    </div>
  )
}

export default ConfiguracionRestDsk;
