import { useContext, useEffect, useState } from 'react'
import clienteAxios from '../../../../config/axios'
import todoContext from '../../../../context/todoContext'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import ImageUbi from '../../../../assets/logoubi.png'

const PerfilDsk = () => {

  const {usuario} = useContext(todoContext)



  return (
    <>

      <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-80'>
      <NavBar/>
      <div className='w-4/12 m-auto mt-24  rounded-lg bg-white '>
    
       
            <div className=' flex flex-col items-center justify-center p-2 pb-8'>
               <img src={usuario?.url_img_usuario} alt="perfil" className=' w-64 rounded-full avatar h-64' />
               <div className='flex items-center justify-center mt-5'>
                
                 <Link to='/editarPerfil' className='bg-wwe rounded-lg px-3  font-aref font-semibold text-white  py-1 text-xl p-1 hover:bg-red-700  text-center'>Editar perfil</Link>
               </div>
           
               
              <div className='text-center w-full gap-5'>
                 <p className='text-2xl mt-10 font-aref font-semibold text-wwe '>{usuario?.rol.nombre}</p>  
                 <p>@{usuario?.alias}</p>
                 
              </div>
             <div className='flex space-between w-full  rounded-lg  text-wwe font-aref text-xl font-semibold mt-10'>
              <div className='flex  m-5 items-center '>
               <img src={ImageUbi} alt="" className='w-8 h-12 '/>
                <p>{usuario?.rol.calle},</p>
                <p>{usuario?.rol.esquina}</p>
                <p>{usuario?.rol.nro_puerta}</p>
              </div>
        
             
             </div>

            </div>
      
      </div>
    </div>

    
   </>
  )
}

export default PerfilDsk