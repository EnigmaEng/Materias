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
   <div className='min-h-screen space-y-10 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>
  <div className="collapse  w-[40%] m-auto shadow-xl">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title flex  justify-center gap-5  items-center font-aref  bg-white  text-center peer-checked:bg-white  peer-checked:text-white">
   <p className='text-black  text-lg'>Busca en el mapa </p><img src={Image} alt="logo-ubicacion" className='w-8 ' />
  </div>
  <div className="collapse-content text-white  peer-checked:bg-white peer-checked:text-white"> 
    <Map/>
  </div>
</div>
  
<div className='flex border max-h-max rounded-lg bg-white max-w-max m-auto  justify-center items-center '>
<div className='flex '>


<Link to='/misResenias' className='hover:bg-zinc-200 rounded-l-lg p-3 w-40 text-center'>
  <p className='text-wwe font-aref'>Mis reseñas</p>

</Link>
<Link to='/map' className='hover:bg-zinc-200  p-3 w-40'>
 <p className='text-wwe font-aref text-center'>Mapa</p><img src={Image} alt="logo-ubicacion" className='w-8 m-auto mt-2' />
</Link>
<Link className='hover:bg-zinc-200 rounded-r-lg text-center p-3 w-40'>
  <p className='text-wwe font-aref'>Top 10 restaurantes</p>
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