import React from 'react'
import DescuentosDsk from './DescuentosDsk'
import DescuentosMb from './DescuentosMb'

const Descuentos = () => {
  return (
        <>
   <div className="hidden md:block">
    <DescuentosDsk/>
   </div>
   <div className="md:hidden">
<DescuentosMb/>
   </div>
   </>
  )
}

export default Descuentos;