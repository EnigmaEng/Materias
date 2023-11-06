import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import ListRestauranteMb from '../../../../../components/list/ListRestauranteMb'
import FooterDsk from '../../../../../components/Footer/FooterDsk'

import {MdOutlineRateReview} from 'react-icons/md'
import {BsFillHouseFill} from 'react-icons/bs'
import Image from '../../../../../assets/logoubi.png'
import { Link } from 'react-router-dom'

const TuristaHomeMb = () => {
  return (
    <div className='min-h-screen   dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>

  <div className='flex justify-center items-center mt-20 gap-2'>

<div className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white rounded-lg shadow-xl w-28 h-24 flex flex-col justify-center items-center'>
  <p className='text-center text-wwe text-sm mb-2 font-semibold font-aref'>Mis Reseñas</p>
  <Link to='/misResenias' className='text-wwe text-center text-3xl'>
<MdOutlineRateReview/>
  </Link>
</div>

<div className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white rounded-lg shadow-xl w-28 h-24 flex flex-col justify-center items-center'>
  <Link to='/map' className=''>
    <p className='text-center text-wwe text-sm mb-2 font-semibold font-aref'>Mapa</p>
<img src={Image} alt="" className='w-6 m-auto' />
  </Link>
</div>

<div className='hover:scale-125 transition-all duration-300 delay-150 p-2 bg-white rounded-lg shadow-xl flex flex-col justify-center items-center w-28 h-24 '>
  <p className='text-sm text-wwe text-center font-semibold font-aref'>Alojamientos</p>
  <Link to='/alojamiento' className='text-wwe text-center text-3xl'>
<BsFillHouseFill/>
  </Link>
</div>

 </div>
  
 
 

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