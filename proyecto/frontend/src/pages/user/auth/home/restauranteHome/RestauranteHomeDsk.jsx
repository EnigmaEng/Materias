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
import Image1 from '../../../../../assets/logoubi.png';
import Image3 from '../../../../../assets/resenia.png'


const RestauranteHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-5 font-aref  dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
<div className='flex flex  justify-center items-center '>
<div className='flex  w-[90%] m-auto justify-center items-center  gap-5 '>


<div  className="max-w-sm mt-20 w-[50%]  rounded-box   lg:max-w-full lg:flex">
<img src={Image3} alt="resenia" className='bg-cover  lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Solo clientes
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">Reseñas de tus clientes</div>
      <p className="text-gray-700 text-sm">Reseñas realizadas por turistas que se encuentran hospedados en algún hotel del país y eligieron tu restaurante según sus gustos y preferencias.</p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/misResenias' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white bg-wwe   flex justify-center items-center  text-white border shadow-xl text-3xl rounded-lg '>Ver reseñas</Link>
    </div>
  </div>
</div>
<div  className="max-w-sm mt-20 w-[50%]   rounded-box shadow-xl  lg:max-w-full lg:flex">
<img src={Image2} alt="menu" className='bg-cover lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8 mt-5">
    
      <div className="text-gray-900 font-bold text-xl mb-2">Menú</div>
      <p className="text-gray-700 text-sm">Encuentra tu menú detallado, modifícalo, agrega platos nuevos, combina tu menú con promociones especiales para los usuarios de Where We Eat y atrae el mayor público posible.</p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/menu' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl bg-wwe  text-white  px-6 text-3xl rounded-lg '>  Ver menú</Link>
    </div>
  </div>
</div>
<div  className="max-w-sm mt-20 w-[50%]   rounded-box shadow-xl  lg:max-w-full lg:flex">
<img src={Image1} alt="menu" className='bg-cover bg-white  lg:h-auto lg:w-40 flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' />
  <div className=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8 mt-5">
      <div className="text-gray-900 font-bold text-xl mb-2">Suscripciones</div>
      <p className="text-gray-700 text-sm">Logra una mayor visibilidad de tu restaurante, descubre el universo Where We Eat y todos sus beneficios para conocer nuevos clientes y llevar al auge a tu establecimiento gastronómico. </p>
    </div>
    <div className="flex  justify-center items-center">
     <Link to='/subscripcion' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl text-white bg-wwe  text-3xl rounded-lg flex justify-center items-center '> Ver suscripciones </Link>
    </div>
  
</div>
</div>
  </div>
</div>
    

  <div className='flex flex-col'>

 <ListRestaurantes/>
 </div>

    
  
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default RestauranteHomeDsk