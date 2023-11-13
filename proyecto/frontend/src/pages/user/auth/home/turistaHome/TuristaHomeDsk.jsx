import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/CategoriasRestaurante'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import Image from '../../../../../assets/logoubi.png'
import {MdOutlineRateReview} from 'react-icons/md'
import {BsFillHouseFill} from 'react-icons/bs'
import Image2 from '../../../../../assets/mapa.png'
import Image3 from '../../../../../assets/resenia.png'
import Image1 from '../../../../../assets/alojamiento.png'
import ImageRed from '../../../../../assets/bgred.png'
import CategoriasTurista from '../../../../../components/categorias/CategoriasTurista'

const TuristaHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-10  dark:bg-zinc-800 dark:bg-opacity-95'>

  <NavBar/>


 <CategoriasTurista/>

     <ListRestaurantes/>
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default TuristaHomeDsk;