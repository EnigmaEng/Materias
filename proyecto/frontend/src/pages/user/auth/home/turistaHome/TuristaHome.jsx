import React from 'react'
import TuristaHomeDsk from './TuristaHomeDsk'
import TuristaHomeMb from './TuristaHomeMb'

const TuristaHome = () => {
  return (
    <>

    <div className="hidden md:block  ">
<TuristaHomeDsk/>
   </div>
   <div className="md:hidden">
 <TuristaHomeMb/>
   </div>

   
   </>
  )
}

export default TuristaHome;