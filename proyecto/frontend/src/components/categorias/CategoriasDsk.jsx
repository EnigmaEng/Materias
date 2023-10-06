import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/mis-resenas.jpg';
import Image2 from '../../assets/restaurantes-visitados.png';
import Image3 from '../../assets/top-10.png';
import {GrNext} from 'react-icons/gr';
import {MdOutlineArrowBackIos} from 'react-icons/md';



const CategoriasDsk = () => {
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
  );
};

export default CategoriasDsk;
