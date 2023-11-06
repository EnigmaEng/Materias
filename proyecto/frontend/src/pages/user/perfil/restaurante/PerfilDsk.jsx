import { useContext, useEffect, useState } from 'react'
import clienteAxios from '../../../../config/axios'
import todoContext from '../../../../context/todoContext'
import NavBar from '../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'

const PerfilDsk = () => {

  const {usuario} = useContext(todoContext)



  return (
    <>

      <div className='min-h-screen'>
      <NavBar/>
      <div className='w-4/12 m-auto mt-24  rounded-lg bg-white '>
    
       
            <div className=' flex flex-col items-center justify-center  pb-8'>
               <img src={usuario?.url_img_usuario} alt="perfil" className='rounded-t-lg w-full h-64' />
               <div className='flex items-center justify-center mt-5'>
                
                 <Link to='/editarPerfil' className='bg-wwe rounded-lg w-28 text-white  py-1 text-xl p-1 hover:bg-red-700  text-center'>Editar perfil</Link>
               </div>
              
               
              <div className='text-center w-full gap-5'>
                 <p className='text-2xl mt-10 font-aref font-semibold text-wwe '>{usuario?.rol.nombre}</p>  
                 <p>@{usuario?.alias}</p>
                 
              </div>
             <div className='flex space-between m-5  gap-10 rounded-lg  text-wwe font-aref text-xl font-semibold mt-10'>
              <div className='flex gap-x-3'>
                <p>Direccion: </p>
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