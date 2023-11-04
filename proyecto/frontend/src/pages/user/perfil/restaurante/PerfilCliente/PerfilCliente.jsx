import React from 'react'
import PerfilClienteDsk from './PerfilClienteDsk'
import PerfilClienteMb from './PerfilClienteMb'
const PerfilCliente = () => {
  return (
    <>
      <div className="hidden md:block  ">
  <PerfilClienteDsk/>
   </div>
   <div className="md:hidden">
 <PerfilClienteMb/>
   </div>
</>
  )
}

export default PerfilCliente