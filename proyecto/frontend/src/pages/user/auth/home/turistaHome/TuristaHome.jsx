import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
const TuristaHome = () => {
  return (
   <div className='min-h-screen space-y-5 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <Map/>
   <div className='text-5xl text-center flex  justify-center items-center gap-20'>
    <div className='shadow-xl bg-white w-52 border h-60' ><p>Opcion1</p></div>
    <div className='shadow-xl bg-white w-52 border h-60'>Opcion2</div>
    <div className='shadow-xl bg-white w-52 border h-60'>Opcion3</div>
     </div>
 <ListRestaurantes/>

    
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default TuristaHome;