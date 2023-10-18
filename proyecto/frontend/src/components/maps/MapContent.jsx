import React from 'react'
import Map from './Map'
import NavBar from '../nabvar/NavBar'
import { Link } from 'react-router-dom'

const MapContent = () => {
  return (
 
    <div className='min-h-screen'>
        
        <NavBar/>
        <Link  to='/homeAuth' className='px-4 m-40 py-1.5 bg-wwe rounded-lg text-white text-lg font-aref'>
        Volver
        </Link>
      <div className='mt-10'>
         <Map/>
      </div>
       
    </div>
  )
}

export default MapContent