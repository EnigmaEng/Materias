import React from 'react'

const CategoriasMb = () => {
  return (
       <div className='grid grid-cols-3 p-2  mb-5 gap-2'>
        <div className=''>
          <p className='text-center text-[#AA000B] font-bold '>Restaurantes visitados </p>
            <div className='border text-2xl h-28   shadow-xl rounded-box  bg-[url(https://media-public.canva.com/wfCjA/MAED24wfCjA/1/tl.jpg)] bg-cover '> </div>
        </div>
      
        <div className='mt-6'>
          <p className='  font-bold text-[#AA000B]  text-center'>Top 10</p>
               <div className='border h-28   shadow-xl rounded-box bg-[url(https://media-public.canva.com/MADAyEdkg_c/1/thumbnail_large-1.jpg)] bg-cover '>
          
        </div>
        </div>
   
        <div className='mt-6'>
          <p className='text-center text-[#AA000B] font-bold '>Mis Reseñas</p>
           <div className='border h-28  shadow-xl rounded-box font-bold bg-[url(https://media-public.canva.com/MADOrCJgfqU/1/thumbnail_large-1.jpg)] bg-cover'></div>
        </div>
    </div>
  )
}

export default CategoriasMb;