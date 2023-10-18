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

const RestauranteHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-5 font-aref  dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <Map/> 
<div className='text-5xl text-center flex  justify-center items-center gap-20 '>
    <Link to='/misResenias' className='shadow-xl bg-white w-52 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-60 bg-home text-white ' ><p className='mt-10'>Mis reseñas</p>
    <p className='ml-20  mt-5 text-5xl'><MdOutlineRateReview/></p></Link>
    <Link to='/crearMenu' className='shadow-xl bg-white w-52 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-60 bg-home text-white'> <p className='mt-10'>Crear plato </p>  
    <p className='ml-20  mt-5 text-5xl'><IoRestaurantOutline/></p> 
    </Link>
    <Link to='/menu' className='shadow-xl bg-white w-52 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-60 bg-home text-white'> <p className='mt-10'>Mi menu</p> 
    <p className='ml-20  mt-10  text-6xl'><MdMenuBook/></p></Link>
     </div>

 <ListRestaurantes/>
    
  
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default RestauranteHomeDsk