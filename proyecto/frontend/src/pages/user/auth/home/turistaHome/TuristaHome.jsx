import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import Image from '../../../../../assets/logoubi.png'



const TuristaHome = () => {
  return (
   <div className='min-h-screen space-y-5 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <div className="collapse bg-white w-6/12 m-auto shadow-xl">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title flex font-aref text-3xl bg-white text-white text-center peer-checked:bg-white  peer-checked:text-white">
   <p className='text-black p-5'>Busca en el mapa</p><img src={Image} alt="logo-ubicacion" className='w-14 m-auto' />
  </div>
  <div className="collapse-content bg-wwe text-white peer-checked:bg-white peer-checked:text-white"> 
    <Map/>
  </div>
</div>
  
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