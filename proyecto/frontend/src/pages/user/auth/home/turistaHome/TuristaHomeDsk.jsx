import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestaurantes from '../../../../../components/list/ListRestaurantes'
import Map from '../../../../../components/maps/Map'
import Categorias from '../../../../../components/categorias/Categorias'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import Image from '../../../../../assets/logoubi.png'



const TuristaHomeDsk = () => {
  return (
   <div className='min-h-screen space-y-5 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <div className="collapse bg-white w-3/12 m-auto shadow-xl">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title flex font-aref text-3xl bg-white text-white text-center peer-checked:bg-white  peer-checked:text-white">
   <p className='text-black p-5'>Busca en el mapa</p><img src={Image} alt="logo-ubicacion" className='w-14 m-auto' />
  </div>
  <div className="collapse-content bg-wwe text-white peer-checked:bg-white peer-checked:text-white"> 
    <Map/>
  </div>
</div>
  
<div className='flex border h-52 bg-white  justify-center items-center'>
<div className='flex '>

<Link to='/map' className='hover:bg-zinc-200 rounded-box p-3'>
 <p className='text-wwe font-aref'>Busca en el mapa</p><img src={Image} alt="logo-ubicacion" className='w-8 m-auto mt-2' />
</Link>
</div>
</div>
    
 <ListRestaurantes/>

    
  <div className='mt-24'>
      <FooterDsk/>
   </div>

</div>
  )
}

export default TuristaHomeDsk;