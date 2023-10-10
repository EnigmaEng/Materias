import React from 'react'
import MisReseniasMb from './MisReseniasTuristaMb'
import MisReseniasDsk from './MisReseniasTuristaDsk'

const MisReseniasTurista = () => {
  return (
    <>
   <div className="hidden md:block">
   <MisReseniasDsk/>
   </div>
   <div className="md:hidden">
   <MisReseniasMb/>
   </div>
   </>
  )
}

export default MisReseniasTurista;