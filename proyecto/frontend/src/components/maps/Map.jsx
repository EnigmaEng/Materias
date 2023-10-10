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



   if (!isLoaded) return <div
  class="ml-96 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>




  return (
    <>
    <div className='py-11 '>
      <MapComponents ubicacion={ubicacion}/> 
    </div>
    
    </>
  )
}

function MapComponents() {

  const center = useMemo(() => ({ lat: -34.862021,  lng: -56.169345}), []);
return (
  <>

     <GoogleMap zoom={10} center={center} mapContainerClassName='rounded-lg  md:w-8/12 md:h-[505px] h-80  w-full  m-auto '>
<MarkerF position={center} />
  </GoogleMap>

  
  </>

)
}
