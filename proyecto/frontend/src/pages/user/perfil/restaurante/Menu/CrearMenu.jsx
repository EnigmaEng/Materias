import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
const CrearMenu = () => {
  return (
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 bg-white bg-opacity-70 '>
      <NavBar/>

 
      <h2 className='text-center  text-5xl text-wwe font-bold md:mt-28 mt-20 font-aref'>Crear tu plato</h2>
      <form action="" className='flex flex-col  text-black m-auto md:mt-20 mt-5 justify-center items-center md:py-20 py-14 space-y-10 bg-white max-w-lg rounded-box shadow-xl font-aref text-lg'>
      <div className='flex flex-col space-y-2 '>
<label htmlFor="" className=''>Foto del plato:</label>
<input type="text" className='text-black w-80 rounded-lg bg-white border border-wwe ring-2 ring-wwe py-1.5 px-4 ' placeholder='Foto..' />
        </div>
        <div className='flex flex-col'>
<label htmlFor="">Nombre:</label>
<input type="text" className='w-80 px-4 py-1.5 rounded-lg bg-white border border-wwe ring-2 ring-wwe italic' placeholder='Nombre del plato..'/>
        </div>
 
        <div className='flex flex-col'>
<label htmlFor="" className='ml-14'>Precio del plato</label>
<div className='flex '>
  <input type="number" className='appearance-none w-80 ring-2 ring-wwe border border-wwe py-2 px-4 border border-gray-300 rounded-lg leading-5 ml-14 transition duration-150 ease-in-out sm:text-sm sm:leading-5 custom-number-input bg-white' placeholder='Precio..'/>
<span className='relative right-16 text-white text-lg py-2 px-7 bg-wwe w-16 rounded-md'>$</span>
</div>

        </div>
  
          <div className='flex flex-col'>
<label htmlFor="">Decripcion del plato</label>
<textarea type="text" className='w-80 md:w-96 h-40 px-4 py-1.5 rounded-lg bg-white border border-wwe ring-2 ring-wwe italic' placeholder='Descripcion'/> 
        </div>
        <button className='w-64 md:w-64  px-6  md:py-1 py-2 text-2xl rounded-lg bg-wwe text-white hover:bg-red-700'>Guardar menu</button>
      </form>
      
      </div>
  )
}

export default CrearMenu;