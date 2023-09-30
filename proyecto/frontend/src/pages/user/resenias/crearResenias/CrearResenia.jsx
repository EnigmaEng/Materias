import React from 'react'
import CrearReseniaDsk from './CrearReseniaDsk'
import CrearReseniaMb from './CrearReseniaMb'
import NavBar from '../../../../components/nabvar/NavBar'

const CrearResenia = () => {
  return (
    <>
    <NavBar/>
   <div className='min-h-screen p-6'>
      <form action="" className='w-11/12 space-y-10 flex flex-col justify-center items-center  md:py-6 md:px-6 md:w-3/12 m-auto mt-10 md:mt-24 bg-white border rounded-box p-4 text-black shadow-xl pb-10'>
        <h2 className='text-center font-bold text-2xl '>
          Crear reseña
        </h2>
    <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs">
  <option disabled selected>Restorán en general</option>
  <option value='Muy malo'>Muy malo</option>
  <option value='Malo'>Malo</option>
  <option value='Medio'>Medio </option>
  <option value='Bueno'>Bueno</option>
  <option value='Muy bueno'>Muy bueno</option>
</select>
       

             <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs">
  <option disabled selected>Instalaciones</option>
  <option value='Excelente'>Excelente </option>
  <option value='Medio'>Medio</option>
  <option value='Insuficiente'>Insuficiente </option>
  
</select>
       <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs">
  <option disabled selected>Menú gastronómico</option>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3 </option>
  <option value='4'>4</option>
  <option value='5'>5</option>
</select>
      <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs">
  <option disabled selected>Personal</option>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3 </option>
  <option value='4'>4</option>
  <option value='5'>5</option>
</select>
       
      <button className='glass bg-red-800 text-white px-4 py-1 rounded-lg border mt-8 hover:scale-125 transition-all duration-300 delay-150  md:w-40 md:py-1.5 md:text-lg w-64'>Crear</button>
      </form> 
    </div>
   </>
  )
}
//restorán en general (por ejemplo: muy bueno, bueno, medio, malo y muy malo)
//Instalaciones (por ejemplo: Excelente, Medio, insuficiente)
// Del menú gastronómico.
//De la atención del personal



export default CrearResenia