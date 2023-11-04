import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../../../../components/nabvar/NavBar'
const ConfiguracionRestMb = () => {
  return (
      <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 '>
    <NavBar/>
    
<div className='bg-white md:w-7/12 md:h-11/12  m-auto mt-20  p-10 text-3xl text-black  rounded-box'>
    <h2 className='text-center  text-2xl font-aref mb-10'>Configuración de la cuenta</h2>
    <div className='border  p-4 mb-10 rounded-box shadow-xl'> <h2 className='font-aref mb-5 text-lg'>Editar perfil</h2> 
    <hr />
    <Link to='/editarPerfilRestaurante' className='w-80 px-4 py-1 rounded-lg bg-wwe text-white'>Editar</Link></div>
    
    <div className='border  p-2 pb-5   mb-10 rounded-box  shadow-xl'>
        <h2 className='mb-5 font-aref px-2 text-lg'>Pagar suscripción</h2>
        <hr /> 
        <Link to='/subscripcion' className=' px-2 py-0.5  rounded-lg bg-wwe text-white'>Pagar suscripción</Link>
        </div>
          <div className='border  p-4 mb-10 rounded-box  shadow-xl'>
        <h2 className='mb-5 font-aref text-lg'>Promociones</h2>
        <hr />
        <Link to='/crearDescuentos' className=' px-2 py-0.5 rounded-lg bg-wwe text-white'>Crear Promoción</Link>
        </div>
</div>
    </div>
  )
}

export default ConfiguracionRestMb