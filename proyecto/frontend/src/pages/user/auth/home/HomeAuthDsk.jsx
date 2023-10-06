import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import ListRestaurantes from '../../../../components/list/ListRestaurantes';
import Categorias from '../../../../components/categorias/Categorias';
import FooterDsk from '../../../../components/Footer/FooterDsk';
import DarkMode from '../../../../components/Buttons/DarkMode';
import todoContext from '../../../../context/todoContext';
import PerfilDsk from '../../perfil/turista/PerfilDsk';
import CategoriasTurista from '../../../../components/categorias/CategoriasTurista';
import AdminHome from './adminHome/adminHome';
import Home from '../../../HomePublic/Home';
import RestauranteHome from './restauranteHome/restauranteHome';
import TuristaHome from './turistaHome/turistaHome';
const HomeAuthDsk = () => {

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
 :   <Home/>
 } 
    </>
    
    
  )
}

export default HomeAuthDsk