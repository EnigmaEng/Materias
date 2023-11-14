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
      <div className=' m-auto shadow-xl rounded-box h-[300px] h-auto  w-6/12 bg-white dark:bg-zinc-800    '>
   
      <div className=' space-y-5  dark:border-zinc-700 p-10 w-full rounded-box  flex'>
          <div className=''>
          <img src={usuario.url_img_usuario} alt="perfil" className='w-64 border border-wwe avatar rounded-full  shadow-xl' />
        
          <p className='text-center text-lg text-gray-400 mt-2'>@{usuario.alias}</p>
         
        
        </div>
        <div className='w-full m-auto text-center'>
                <p className='font-semibold text-wwe font-aref text-3xl mb-4 px-6 '>{usuario.rol.nombres} {usuario.rol.apellidos}</p> <hr />

                <p className='p-2 text-2xl font-semibold font-aref  rounded-lg'>Nacionalidad: {usuario.rol.nacionalidad}</p>
               

              </div>   
      <Link to='/editarPerfil' className='h-10 w-50  flex gap-5 px-6 py-2.5 hover:bg-red-700   rounded-lg shadow-lg  bg-red-800 text-white '>Editar  <AiOutlineEdit/></Link>
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