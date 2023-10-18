import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
const EditarPerfi = () => {
  return (
  <>
  <NavBar/>
    <div className='min-h-screen text-lg text-wwe flex  dark:bg-zinc-800 dark:bg-opacity-95  flex-col justify-center items-center'>
       <Link to='/configuracionRest' className='absolute top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'>Volver</Link> 
  <h3 className='text-5xl'>Editar perfil formulario</h3>
    </div>
    </>
  )
}

export default EditarPerfi