import { useContext, useEffect, useState } from 'react'
import clienteAxios from '../../../../config/axios'
import todoContext from '../../../../context/todoContext'
import NavBar from '../../../../components/nabvar/NavBar'

const PerfilDsk = () => {

  const {usuario} = useContext(todoContext)



  return (
    <div className='min-h-screen'>
      <NavBar/>
      <div className='w-3/12 m-auto mt-24 p-2 rounded-lg bg-white '>
    
       
            <div className=' flex flex-col items-center justify-center p-4 pb-8'>
               <img src={usuario?.url_img_usuario} alt="perfil" className='rounded-full w-40 h-40' />
              <div className='text-center w-full gap-5'>
                 <p className='text-2xl mt-10 font-aref font-semibold text-wwe '>{usuario?.nombre}</p>  

                 <div className='card-body border shadow-xl rounded-lg'>

       
                 </div>
              </div>
             

            </div>
      
      </div>
    </div>
  )
}

export default PerfilDsk