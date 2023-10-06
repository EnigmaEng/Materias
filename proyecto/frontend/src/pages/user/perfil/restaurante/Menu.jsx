import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'

const Menu = () => {
  return (
    <div className='min-h-screen space-y-28 bg-white bg-opacity-60 dark:bg-zinc-800 dark:bg-opacity-95'> 
    <NavBar/>
    <div className='bg-white w-6/12 m-auto space-y-10 py-8 text-black text-3xl flex flex-col  text-blackjustify-center items-center rounded-box'>
        <div className=' space-y-10'>
              <p className='text-5xl text-center font-aref '>Tus menus:</p> 
              <button className='w-52 rounded-lg  text-white py-1.5 bg-wwe '>Crear Menu </button>
        </div>
       
         <div className='grid grid-cols-2'>


<div className='border shadow-xl w-64 h-64'>
<p className='text-center py-5 text-gray-400 font-aref'>Menu</p>
</div>


         </div>
    </div>
  
   </div>
  )
}

export default Menu