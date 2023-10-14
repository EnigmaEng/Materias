import React from 'react'
import ConfiguracionRestDsk from './ConfiguracionRestDsk'
import ConfiguracionRestMb from './ConfiguracionRestMb'

const ConfiguracionRest = () => {
  return (
      <>
   <div className="hidden md:block">
    <ConfiguracionRestDsk/>
   </div>
   <div className="md:hidden">
<ConfiguracionRestMb/>
   </div>
   </>
  )
}

export default ConfiguracionRest