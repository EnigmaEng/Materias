import React, { useContext, useEffect } from 'react'

import todoContext from '../../../../context/todoContext';

import AdminHome from './adminHome/adminHome';


import Home from '../../../HomePublic/Home'
import HomeMb from '../../../HomePublic/HomeMb';
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
  // Restaurante
<TuristaHome/>

  : usuario && usuario.rol.nacionalidad ? 
// Turista
   <TuristaHome/>

   : usuario &&
   usuario.rol.nro_empleados ? 
  //  Admin
<AdminHome/>
 :   
//  No autenticado
 <Home/>
 } 
    </>
    
    
  )
}

export default HomeAuthDsk