import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import Image from '../../../../../assets/logoubi.png'
import {MdOutlineRateReview} from 'react-icons/md'
import {BsFillHouseFill} from 'react-icons/bs'

const TuristaHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-10  dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  {/* <div className="collapse min-w-min m-auto shadow-xl">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title flex  justify-center gap-5  items-center font-aref  bg-white  text-center peer-checked:bg-white   peer-checked:text-white">
   <p className='text-black  text-lg'>Busca en el mapa </p><img src={Image} alt="logo-ubicacion" className='w-8 ' />
  </div>
  <div className="collapse-content text-white peer-checked:w-[80%] peer-checked:bg-white peer-checked:text-white"> 
    <Map/>
  </div>
</div> */}
  
<div className='flex    justify-center items-center '>
<div className='flex  gap-20'>


<div class="max-w-sm mt-20 w-[50%] rounded-box shadow-xl  lg:max-w-full lg:flex">
  <div class="bg-[url(https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA=)] bg-cover h-28 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " >
  </div>
  <div class=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Solo miembros
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Tus reseñas creadas</div>
      <p class="text-gray-700 text-sm">Mira las reseñas que hiciste a otros solo para que veas lo basura que sos</p>
    </div>
    <div class="flex  justify-center items-center">
     <Link to='/misResenias' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white w-20 flex justify-center items-center  text-wwe border shadow-xl text-3xl rounded-lg h-12'> <MdOutlineRateReview/></Link>
    </div>
  </div>
</div>
<div class="max-w-sm mt-20 w-[50%] rounded-box shadow-xl  lg:max-w-full lg:flex">
<div className='bg-[url(https://www.lavanguardia.com/files/article_main_microformat/uploads/2015/08/28/5fa28157b6339.jpeg)] bg-cover h-28 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden '></div>
  <div class=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Solo miembros
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Busca en el mapa</div>
      <p class="text-gray-700 text-sm">Busca en el mapa tus restaurantes cercanos </p>
    </div>
    <div class="flex  justify-center items-center">
     <Link to='/map' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl w-20  text-white text-3xl rounded-lg h-12'> <img src={Image} alt="" className='w-5 h-8 m-auto' /></Link>
    </div>
  </div>
</div>
<div class="max-w-sm mt-20 w-[50%] rounded-box shadow-xl  lg:max-w-full lg:flex">
<div className='bg-[url(https://i0.wp.com/aldiaargentina.microjuris.com/wp-content/uploads/2020/03/hotel.jpg?fit=1000%2C665&ssl=1)] bg-cover h-28 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden '></div>
  <div class=" bg-white rounded-b w-full  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Solo miembros
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Tus alojamientos</div>
      <p class="text-gray-700 text-sm">Mira donde te has alojado</p>
    </div>
    <div class="flex  justify-center items-center">
     <Link to='/misResenias' className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white border shadow-xl w-20  text-wwe text-3xl rounded-lg flex justify-center items-center h-12'> <BsFillHouseFill/> </Link>
    </div>
  </div>
</div>
</div>
</div>
    
 <ListRestaurantes/>

    
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default TuristaHomeDsk;