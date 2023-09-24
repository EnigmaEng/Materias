import React from 'react'

const ListRestauranteMb = () => {


  
  return (
    <div className=' p-2 bg-white w-11/12 m-auto shadow-xl mb-2'>
        
        <div className='flex flex-col text-center text-red-800 mb-2 py-4 gap-2'>
     
        <input type="text" className='border ring-1 border-red-800 ring-red-800 bg-white focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 w-8/12 m-auto border  px-4 py-1 rounded-lg placeholder:italic' placeholder='Buscar un restaurante..' />  
        </div>
  <div className=' rounded-lg grid grid-cols-2 gap-5  text-black'>
    <div className='border shadow-xl rounded-lg p-2 bg-white ' >
        <img src="" alt="img-restaurante" className='border h-24 rounded-lg'/>
        <h2 className='text-center mb-8'>Titulo</h2>
        
        <div className='flex px-1 gap-2 mt-2'>
            <button className='border px-2 py-1 rounded-lg shadow-xl'>Ver</button>
        <button className='border px-2 py-1 rounded-lg shadow-xl'> Calificar</button>
        </div>
        
    </div>
  
    
    
  </div>
 <button className='border px-4  py-1 ml-48 mt-2 bg-white text-black rounded-lg shadow-xl '>Siguiente</button>
    </div>
  )
}

export default ListRestauranteMb