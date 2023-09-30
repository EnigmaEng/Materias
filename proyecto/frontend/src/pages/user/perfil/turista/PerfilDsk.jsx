import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import {AiOutlineEdit} from 'react-icons/ai';


const PerfilDsk = () => {
  return (
    <div className='space-y-24 h-screen'>
<NavBar/> 
      <div className='p-4  m-auto shadow-xl rounded-box  border w-8/12 bg-white  '>
   
      <div className=' space-y-5 border h-64 w-full rounded-box p-8 flex'>
             <div className=''>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt="perfil" className='w-40 h-40 rounded-box border   border-white shadow-xl' />
         <p className='text-center text-lg text-gray-400 mt-2'>@JhonDoe01</p>
        </div>
        <div className='w-full m-auto'>
              <p className='font-bold text-gray-700 text-3xl mb-4 px-6'>Jhon Doe</p> <hr />

              <div className='flex gap-10 text-lg text-gray-700 p-4'>
                <p className='p-2  rounded-lg'>Nacionalidad: Sri Lanka</p>
                <p className=' p-2 rounded-lg'>Motivo de alojamiento: Vacaciones </p>
              </div>   
         
        </div>
      <button className='h-10 w-50  flex gap-5 px-6 py-1.5  border rounded-lg shadow-lg text-black bg-red-800 text-white '>Editar  <AiOutlineEdit/></button>
        </div>
      <div className='border h-80 p-4 mt-5 rounded-box shadow-xl'>
        <p className='text-center text-gray-700 font-bold text-3xl mt-3'>Reviews:</p>

        <div className='grid grid-cols-3 p-8'>
        <div className='border rounded-lg h-40 w-64 text-center px-6 py-4 text-black shadow-xl'>
          <p>Calificaciones:</p>
        </div>
  
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default PerfilDsk