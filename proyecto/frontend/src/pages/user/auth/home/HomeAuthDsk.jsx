import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import todoContext from '../../../../context/todoContext';
import ListRestaurantes from '../../../../components/list/ListRestaurantes';


const HomeAuthDsk = () => {
 
  const TodoContext = useContext(todoContext);
  const {usuario, usuarioAutenticado} = TodoContext;


  useEffect(() => {
 usuarioAutenticado();
  },[])

  return (

   <>
   {
  
usuario ? ( <><p className='text-black text-3xl'>Hola {usuario.rol}</p></> ) : (<div className='flex flex-col h-screen'>
    <NavBar/>
    <Map/>  
   {/* <ListRestaurantes/> */}
</div> )



   }

  
 


  
  
    </>
    
   

    
  )
}

export default HomeAuthDsk