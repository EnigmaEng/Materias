import React from 'react'
import HomeAuthDsk from './HomeAuthDsk'
import HomeAuthMb from './HomeAuthMb'


const HomeAuth = () => {
  return (
  <>

    <div className="hidden md:block  ">
  <HomeAuthDsk/>
   </div>
   <div className="md:hidden">
 <HomeAuthMb/>
   </div>

   
   </>
  )
}

export default HomeAuth