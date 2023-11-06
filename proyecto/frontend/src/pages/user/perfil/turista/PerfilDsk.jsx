import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import {AiOutlineEdit} from 'react-icons/ai';
import todoContext from '../../../../context/todoContext';
import Home from '../../../HomePublic/Home';
import { Link } from 'react-router-dom';


const PerfilDsk = () => {

const TodoContext = useContext(todoContext)
const {usuario} = TodoContext


  return (
<>
    {
      usuario && usuario.rol.nacionalidad ? 
 <div className='space-y-24 min-h-screen  text-black font-aref dark:text-white dark:bg-zinc-800 dark:bg-opacity-95'>
<NavBar/> 
      <div className='p-4   m-auto shadow-xl rounded-box h-[300px]  w-6/12 bg-white dark:bg-zinc-800    '>
   
      <div className=' space-y-5 border dark:border-zinc-700 h-auto w-full rounded-box p-8 flex'>
          <div className='flex flex-col justify-center items-center'>
          <img src={usuario.url_img_usuario} alt="perfil" className='w-48 h-40 rounded-box  shadow-xl' />
        
          <p className='text-center text-lg text-gray-400 mt-2'>@{usuario.alias}</p>
         
        
        </div>
        <div className='w-full m-auto text-center'>
                <p className='font-bold text-5xl mb-4 px-6 '>{usuario.rol.nombres} {usuario.rol.apellidos}</p> <hr />

                <p className='p-2 text-2xl  rounded-lg'>Nacionalidad: {usuario.rol.nacionalidad}</p>
               

              </div>   
      <Link to='/editarPerfil' className='h-10 w-50  flex gap-5 px-6 py-2.5   rounded-lg shadow-lg  bg-red-800 text-white '>Editar  <AiOutlineEdit/></Link>
        </div>
        
      </div>
    
    </div>
    :
       <Home/>
      
    }
   </>
  )
}

export default PerfilDsk