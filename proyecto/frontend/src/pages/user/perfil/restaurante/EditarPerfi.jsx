import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
const EditarPerfi = () => {
  return (
  <>
 
    <div className='min-h-screen text-lg text-wwe   dark:bg-zinc-800 dark:bg-opacity-95   '>
       <NavBar/>
       <Link to='/configuracionRest' className='absolute top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'>Volver</Link> 
  <h3 className='text-5xl text-center mt-24'>Editar perfil formulario</h3>
    </div>
    </>
  )
}

export default EditarPerfi