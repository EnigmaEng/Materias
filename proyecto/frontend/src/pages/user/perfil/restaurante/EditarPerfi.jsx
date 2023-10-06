import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
const EditarPerfi = () => {
  return (
  <>
  <NavBar/>
    <div className='min-h-screen text-lg text-wwe flex bg-white bg-opacity-60 dark:bg-zinc-800 dark:bg-opacity-95  flex-col justify-center items-center'>
       <Link to='/configuracionRest' className='absolute top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'>Volver</Link> 
        <p className='text-4xl  absolute top-24 font-bold'>Editar perfil</p>
    
    <form action="" className='flex flex-col'>
       <input type="text" className='input absolute top-64  bg-white text-black shadow-xl ' placeholder='Tipo de restaurante..'/>
<button className='px-4 w-24 py-1 mt-24 rounded-lg bg-white text-black'> Guardar</button>
    </form>
    </div>
    </>
  )
}

export default EditarPerfi