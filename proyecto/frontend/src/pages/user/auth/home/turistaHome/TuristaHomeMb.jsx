import React from 'react'
import Image from '../../../../../assets/logoubi.png'
import NavBar from '../../../../../components/nabvar/NavBar'
import Map from '../../../../../components/maps/Map'
import ListRestauranteMb from '../../../../../components/list/ListRestauranteMb'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import CategoriasMb from '../../../../../components/categorias/CategoriasMb'

const TuristaHomeMb = () => {
  return (
    <div className='min-h-screen  bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <div className="collapse mt-5 mb-5 w-[90%] m-auto shadow-xl">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title flex font-aref text-3xl bg-gradient-to-r from-wwe via-red-600  to-red-500  bg-opacity-75 text-white text-center peer-checked:bg-white  peer-checked:text-white">
   <p className='text-white py-5'>Busca en el mapa</p><img src={Image} alt="logo-ubicacion" className='w-14 m-auto' />
  </div>
  <div className="collapse-content bg-gradient-to-r via-red-600 from-wwe to-red-500 text-white peer-checked:white peer-checked:text-white"> 
    <Map/>
  </div>
</div>
  
  <CategoriasMb/>
   {/* <div className='text-sm text-center flex  justify-center items-center gap-5'>
    <div className='shadow-xl bg-white w-14 border h-20' ><p>Opcion1</p></div>
    <div className='shadow-xl bg-white w-14 border h-20'>Opcion2</div>
    <div className='shadow-xl bg-white w-14 border h-20'>Opcion3</div>
     </div> */}

    <div className='mt-5'>
       <ListRestauranteMb/> 
    </div>


    
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default TuristaHomeMb