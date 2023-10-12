import React from 'react'

import MenuDsk from './MenuDsk';
import MenuMb from './MenuMb';
const Menu = () => {


  return (
      <>
   <div className="hidden md:block">
    <MenuDsk/>
   </div>
   <div className="md:hidden">
<MenuMb/>
   </div>
   </>
  )
}

export default Menu;