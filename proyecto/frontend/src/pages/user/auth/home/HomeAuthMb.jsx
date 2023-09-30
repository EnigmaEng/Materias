import React from 'react'
import Map from '../../../../components/maps/Map'
import NavBar from '../../../../components/nabvar/NavBar'

import ListRestauranteMb from '../../../../components/list/ListRestauranteMb'
import Categorias from '../../../../components/categorias/Categorias'

const HomeAuthMb = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 '>
      
  <Map/>
  <Categorias/>
  <ListRestauranteMb/>

   <NavBar/>

  </div>
    
  )
}

export default HomeAuthMb