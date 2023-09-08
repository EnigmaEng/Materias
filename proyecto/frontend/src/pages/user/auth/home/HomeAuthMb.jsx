import React from 'react'
import Map from '../../../../components/maps/Map'
import NavBar from '../../../../components/nabvar/NavBar'

import ListRestauranteMb from '../../../../components/list/ListRestauranteMb'

const HomeAuthMb = () => {
  return (
    <div className='flex flex-col '>
      
  <Map/>
  <ListRestauranteMb/>

   <NavBar/>

  </div>
    
  )
}

export default HomeAuthMb