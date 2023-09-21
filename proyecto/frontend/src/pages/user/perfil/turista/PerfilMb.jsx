import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import {AiOutlineEdit} from 'react-icons/ai'
const PerfilMb = () => {
  return (
    <div className=' h-screen  '>
<div className='border p-4 absolute top-14 left-8 rounded-lg shadow-xl w-10/12 bg-white m-auto'>
  <div className=' gap-10 text-black text-lg'>
      <p className='text-center font-bold text-3xl'>Jhon Doe</p>
    <div className='flex flex-col justify-center items-center gap-2 mt-5'>
      <div className='flex'>
        <img src="" alt="perfil" className='border shadow-xl  rounded-full w-24 h-24' />
         <button className='absolute right-5 top-20 px-4 py-1.5 shadow-xl  h-8  flex gap-5 rounded-lg bg-red-800 text-white '>  <AiOutlineEdit/> </button>
      </div>
      
      <p className='text-gray-500 text-sm text-center'>@JhonDoe01</p>
    </div>




</div>
<div className='p-3 gap-10 mt-3 border  text-black'>
  <p> Nacionalidad: Kenia</p>
  <p>Motivo de alojamiento: Trabajo</p>
</div>
<div className='border mt-5 p-4 text-black'>
  <p className=''>Calificaciones:</p>
  <div className='grid grid-cols-2 gap-1'>
    {/* Datos de prueba */}
    <div className='border shadow-xl rounded-lg text-sm px-3 space-y-2 py-3'>
      <p>Restaurante: Don Jaime</p>
      <p>Instalaciones: 6</p>
       <p>Gastronomia: 9</p>
       <p>Atencion: 9</p>
    </div>
      <div className='border shadow-xl rounded-lg text-sm px-3 space-y-2 py-3'>
      <p>Restaurante: Don Jaime</p>
      <p>Instalaciones: 6</p>
       <p>Gastronomia: 9</p>
       <p>Atencion: 9</p>
    </div>
      {/* Datos de prueba */}
  </div>
</div>
</div>

<div className='absolute bottom-0 w-full'>
  <NavBar/>
</div>
      
    </div>
  )
}

export default PerfilMb