import React from 'react'
import CrearReseniaDsk from './CrearReseniaDsk'
import CrearReseniaMb from './CrearReseniaMb'

const CrearResenia = () => {
  return (
    <>
   <div className="hidden md:block">
   <CrearReseniaDsk/>
   </div>
   <div className="md:hidden">
  <CrearReseniaMb/>
   </div>
   </>
  )
}

export default CrearResenia