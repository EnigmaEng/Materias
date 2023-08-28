import React from 'react'
import HomeDsk from './HomeDsk'
import HomeMb from './HomeMb'

const Home = () => {
  return (
    <>
    <div className='hidden md:block'>
    <HomeDsk/>
    </div>
    <div className='md:hidden'>
       <HomeMb/>
    </div>
    </>
    
  )
}

export default Home;