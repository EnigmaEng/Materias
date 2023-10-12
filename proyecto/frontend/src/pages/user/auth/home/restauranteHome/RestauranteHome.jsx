
import RestauranteHomeDsk from './RestauranteHomeDsk'
import RestauranteHomeMb from './RestauranteHomeMb'

const RestauranteHome = () => {
  return (
 <>

    <div className="hidden md:block  ">
  <RestauranteHomeDsk/>
   </div>
   <div className="md:hidden">
 <RestauranteHomeMb/>
   </div>

   
   </>
  )
}

export default RestauranteHome