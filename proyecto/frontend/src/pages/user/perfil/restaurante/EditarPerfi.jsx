import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
const EditarPerfi = () => {
  return (
  <>
 
    <div className='min-h-screen text-lg text-wwe   dark:bg-zinc-800 dark:bg-opacity-95   '>
       <NavBar/>
        <Link to='/configuracionRest' className='absolute  md:left-24 left-4 top-20 bg-wwe text-white rounded-lg px-6 py-2'>  <BiArrowBack/> </Link>
  <h3 className='text-5xl text-center mt-24'>Editar perfil formulario</h3>
    </div>
    </>
  )
}

export default EditarPerfi