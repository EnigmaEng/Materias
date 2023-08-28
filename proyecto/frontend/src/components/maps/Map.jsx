import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import { useMemo } from 'react'

 
const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
 export default function Map()  {

     const {isLoaded} = useLoadScript({ 
      googleMapsApiKey: apiKey,})
   if (!isLoaded) return <div className='text-center'>Loading....</div>
  return (
    <>
    <div className='flex justify-center'>
      <MapComponents/> 
    </div>
    
    </>
  )
}

function MapComponents() {

  const center = useMemo(() => ({lat: 43.68,  lng: -79.43  }), []);
return (
  <>

     <GoogleMap zoom={10} center={center} mapContainerClassName='hover:scale-125 transition-all duration-300 delay-150 absolute h-80 w-9/12 m-auto rounded-lg shadow-xl'>
<MarkerF position={center} />
  </GoogleMap>

  
  </>

)
}
