import React from 'react'
<<<<<<< HEAD
=======
import {BsSearch} from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
>>>>>>> main

const ListRestaurantes = () => {
  return (
    <>
<<<<<<< HEAD
    <div className=' w-11/12 shadow-xl p-4 rounded-lg m-auto mb-10 bg-white'>
=======
    <div className=' w-10/12 border shadow-xl p-4 rounded-lg m-auto mb-10 bg-white'>
>>>>>>> main

    <div className='flex flex-col text-center justify-center items-center mb-2 mt-2'>
    
    <input type="text" placeholder='Buscar un restaurante..' className='border ring-2 ring-red-800 focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 border rounded-lg bg-white w-6/12 text-sm px-2 py-2' name="" id="" />
    </div>
    <div className=' w-9/12 p-4 grid grid-cols-4 m-auto gap-5 ' >
<<<<<<< HEAD
      <div className='border h-72 rounded-lg shadow-xl bg-white p-4 text-center text-black' >
=======
      <div className='border h-72 w-52 rounded-lg shadow-xl bg-white p-4 text-center text-black' >
>>>>>>> main
<img src="" alt="logo-restaurante" className='w-full m-auto h-32 mb-4 border ' />
<h2 className='font-bold mb-10 '> Titulo</h2>

<div className='gap-5 flex mt-4'>
<<<<<<< HEAD
    <button className=' rounded-lg border  w-40 h-10'> Ver</button>
    <button className='rounded-lg  border w-40 h-18'>Calificar</button>
=======
    <button className=' rounded-lg border px-4  shadow-xl border  w-24 flex justify-center py-3 h-10'> <BsSearch/></button>
    <button className='rounded-lg border px-4  bg-white shadow-xl  w-24 flex justify-center py-3 h-10'><GoCodeReview/></button>
>>>>>>> main
</div>

      </div>
    
    </div>
    </div>
    
    </>
    
  )
}

export default ListRestaurantes