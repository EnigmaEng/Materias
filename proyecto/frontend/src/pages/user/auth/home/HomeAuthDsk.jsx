import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import ListRestaurantes from '../../../../components/list/ListRestaurantes';
import Categorias from '../../../../components/categorias/Categorias';
import FooterDsk from '../../../../components/Footer/FooterDsk';
import DarkMode from '../../../../components/Buttons/DarkMode';


const HomeAuthDsk = () => {


  return (

   <>
<div className='min-h-screen bg-gray-100 dark:bg-zinc-800'>
  <NavBar/>


    <Map/>  
    <Categorias/>
   <ListRestaurantes/>
   <div className='mt-24'>
       <FooterDsk/>
   </div>

</div>

    </>
    
    
  )
}

export default HomeAuthDsk