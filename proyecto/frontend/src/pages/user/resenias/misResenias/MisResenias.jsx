import React from 'react'
import MisReseniasDsk from './MisReseniasDsk'
import MisReseniasMb from './MisReseniasMb'

const MisResenias = () => {
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

export default MisResenias