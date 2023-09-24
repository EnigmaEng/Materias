import React from 'react'
import CategoriasDsk from './CategoriasDsk'
import CategoriasMb from './CategoriasMb'

const Categorias = () => {
  return (
     <>
   <div className="hidden md:block">
    <CategoriasDsk/>
   </div>
   <div className="md:hidden">
<CategoriasMb/>
   </div>
   </>
  )
}

export default Categorias