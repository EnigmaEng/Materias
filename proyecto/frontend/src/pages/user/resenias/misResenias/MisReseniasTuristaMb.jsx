import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
const MisReseniasMb = () => {
  return (
   <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 bg-white bg-opacity-70'>

      <NavBar/>
      <div className='w-[90%] bg-white m-auto mt-10 h-[500px] px-10 py-8 text-black text-2xl text-center text-zinc-700 rounded-box shadow-xl'>
        <h2>Mis reseñas de turista</h2>
        <hr />
        {/* Mapeado de resenas */}
        <p className='text-sm text-gray-600 py-24'>lalala</p>
      </div>
    </div>
  )
}

export default MisReseniasMb