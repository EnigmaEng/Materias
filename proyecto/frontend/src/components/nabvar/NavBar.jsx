
import NavBarMb from './NavBarMb'
import NavBarDsk from './NavBarDsk'

const NavBar = () => {
  return (
   <>
   <div className="hidden md:block">
    <NavBarDsk/>
   </div>
   <div className="md:hidden">
<NavBarMb/>
   </div>
   </>
  )
}

export default NavBar