import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
const RestauranteHome = () => {
  return (
   <div className='min-h-screen space-y-5 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
 <ListRestaurantes/>
    <Map/> 
    <Categorias/> 
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default RestauranteHome