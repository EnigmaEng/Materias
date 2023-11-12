import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/CategoriasRestaurante'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import {IoRestaurantOutline} from 'react-icons/io5';
import {MdMenuBook} from 'react-icons/md';
import {MdOutlineRateReview} from 'react-icons/md';
import Image2 from '../../../../../assets/crearPlato.png';
//import Image1 from '../../../../../assets/Suscribirte.mp4';
import Image3 from '../../../../../assets/resenia.png'
import video from '../../../../../assets/Suscribirte.mp4';
import Mapa from '../../../../../components/maps/Mapa'
import CategoriasRestaurante from '../../../../../components/categorias/CategoriasRestaurante'


const RestauranteHomeDsk = () => {
  return (
   <div className='min-h-screen font-aref  dark:bg-zinc-800 dark:bg-opacity-95'>
<NavBar/>
<CategoriasRestaurante/> 
<ListRestaurantes/>
  <div className=''>
      <FooterDsk/>
   </div>
</div>
  )
}

export default RestauranteHomeDsk