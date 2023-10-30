import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import {IoRestaurantOutline} from 'react-icons/io5';
import {MdMenuBook} from 'react-icons/md';
import {MdOutlineRateReview} from 'react-icons/md';
import Image2 from '../../../../../assets/crearPlato.png';
import Image1 from '../../../../../assets/menu.png';
import Image3 from '../../../../../assets/resenia.png'

const RestauranteHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-5 font-aref  dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>



  <div className='flex flex-col'>

 <ListRestaurantes/>
 </div>
<div className='flex flex  justify-center items-center '>
<div className='flex flex-col w-full justify-center items-center  gap-5 '>


<div data-aos="fade-right" className="max-w-sm mt-20 w-[50%] rounded-box   lg:max-w-full lg:flex">
<img src={Image3} alt="resenia" className='bg-cover h-28 lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Solo clientes
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">Reseñas de tus clientes</div>
      <p className="text-gray-700 text-sm">Reseñas realizadas por tus clientes</p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/misResenias' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white w-20 flex justify-center items-center  text-wwe border shadow-xl text-3xl rounded-lg h-12'><MdOutlineRateReview/></Link>
    </div>
  </div>
</div>
<div data-aos="fade-left" className="max-w-sm mt-20 w-[50%] rounded-box shadow-xl  lg:max-w-full lg:flex">
<img src={Image1} alt="menu" className='bg-cover h-28 lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8 mt-5">
    
      <div className="text-gray-900 font-bold text-xl mb-2">Menú</div>
      <p className="text-gray-700 text-sm">Mira todos tus platos creados en tu menú</p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/menu' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl w-20  text-wwe px-6 text-3xl rounded-lg h-12'>  <MdMenuBook/></Link>
    </div>
  </div>
</div>
<div data-aos="fade-up" className="max-w-sm mt-20 w-[50%] rounded-box shadow-xl  lg:max-w-full lg:flex">
<img src={Image2} alt="menu" className='bg-cover h-28 lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8 mt-5">
      <div className="text-gray-900 font-bold text-xl mb-2">Crear plato</div>
      <p className="text-gray-700 text-sm">Agrega un plato a tu menu </p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/crearMenu' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl w-20  text-wwe text-3xl rounded-lg flex justify-center items-center h-12'> <IoRestaurantOutline/> </Link>
    </div>
  
</div>
</div>
  </div>
</div>
    


    
  
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default RestauranteHomeDsk