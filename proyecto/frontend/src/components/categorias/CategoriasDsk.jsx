import React from 'react'

const CategoriasDsk = () => {
  return (
 <div className='grid grid-cols-3  w-6/12 m-auto mb-5 gap-10'>
        <div className='mt-6'>
          <p className='text-center text-[#AA000B] font-bold text-2xl'>Restaurantes visitados </p>
            <div className=' text-2xl h-40   shadow-xl rounded-box  bg-[url(https://media-public.canva.com/wfCjA/MAED24wfCjA/1/tl.jpg)] bg-cover '> </div>
        </div>
      
        <div className='mt-6'>
          <p className='text-2xl  font-bold text-[#AA000B]  text-center'>Top 10</p>
               <div className=' h-40  shadow-xl rounded-box bg-[url(https://media-public.canva.com/MADAyEdkg_c/1/thumbnail_large-1.jpg)] bg-cover '>
          
        </div>
        </div>
   
        <div className='mt-6'>
          <p className='text-2xl text-center text-[#AA000B] font-bold '>Mis Reseñas</p>
           <div className=' h-40  shadow-xl rounded-box font-bold bg-[url(https://media-public.canva.com/MADOrCJgfqU/1/thumbnail_large-1.jpg)] bg-cover'></div>
        </div>
    </div>
  )
}

export default CategoriasDsk