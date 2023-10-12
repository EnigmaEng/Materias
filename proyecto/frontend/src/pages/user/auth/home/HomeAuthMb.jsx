import { useEffect, useContext } from 'react'
import todoContext from '../../../../context/todoContext'
import TuristaHomeMb from './turistaHome/TuristaHomeMb'
import RestauranteHomeMb from './restauranteHome/RestauranteHomeMb'
import HomeMb from '../../../HomePublic/HomeMb'
import RestauranteHome from './restauranteHome/RestauranteHome'
import TuristaHome from './turistaHome/turistaHome'
const HomeAuthMb = () => {


    const TodoContext = useContext(todoContext)
  const {usuario, autenticado, usuarioAutenticado} = TodoContext;

  useEffect(() => {
  usuarioAutenticado();
  },[autenticado])

  return (
<>
{ 

    usuario && usuario.rol.nombre ?  
  
<RestauranteHome/>
  : usuario && usuario.rol.nacionalidad ? 

   <TuristaHome/>

   : usuario &&
   usuario.rol.nro_empleados ? 
   
<AdminHome/>
 :  
  <HomeMb/>
 } 
 </>
    
  )
}

export default HomeAuthMb