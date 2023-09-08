import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import { useEffect, useMemo, useState } from 'react'

const apiKey = import.meta.env.VITE_GOOGLE_MAP

 export default function Map()  {

     const {isLoaded} = useLoadScript({ 
      googleMapsApiKey: apiKey,})

     const [ubicacion, setUbicacion] = useState(null)

     useEffect(() => {
           navigator.geolocation.getCurrentPosition((position) => {
               const { lat , long} = position.coords
               setUbicacion({lat: lat, long: long})
           },
           (error) => {
            console.log(error)
           })

     },[])



   if (!isLoaded) return <div className='text-center text-red-800 font-bold'>Loading....</div>




  return (
    <>
    <div className='py-2 '>
      <MapComponents ubicacion={ubicacion}/> 
    </div>
    
    </>
  )
}

function MapComponents() {

  const center = 
  
  useMemo(() => ({ lat: -34.862021,  lng: -56.169345}), []);
return (
  <>

     <GoogleMap zoom={10} center={center} mapContainerClassName='rounded-lg md:w-8/12 h-64 w-11/12  m-auto '>
<MarkerF position={center} />
  </GoogleMap>

  
  </>

)
}
