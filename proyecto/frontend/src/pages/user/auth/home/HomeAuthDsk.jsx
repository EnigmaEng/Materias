import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import todoContext from '../../../../context/todoContext';
import ListRestaurantes from '../../../../components/list/ListRestaurantes';
import Categorias from '../../../../components/categorias/Categorias';


const HomeAuthDsk = () => {
 
  const TodoContext = useContext(todoContext);
  const {usuario, usuarioAutenticado} = TodoContext;


  useEffect(() => {
 usuarioAutenticado();
  },[])

  return (

   <>
   {
  
usuario ? ( <><p className='text-black text-3xl'>Hola {usuario.rol}</p></> ) : (<div className='flex flex-col '>
    <NavBar/>
    <Map/>  
    <Categorias/>
   <ListRestaurantes/>
</div> )



   }

  
 


  
  
    </>
    
   

    
  )
}

export default HomeAuthDsk