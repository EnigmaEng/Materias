import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import ListRestaurantes from '../../../../components/list/ListRestaurantes';
import Categorias from '../../../../components/categorias/Categorias';
import FooterDsk from '../../../../components/Footer/FooterDsk';
import DarkMode from '../../../../components/Buttons/DarkMode';
import todoContext from '../../../../context/todoContext';


const HomeAuthDsk = () => {

  const TodoContext = useContext(todoContext)
  const {usuario, autenticado, usuarioAutenticado} = TodoContext;

  useEffect(() => {
  usuarioAutenticado();
  },[autenticado])

  return (


   <>

   {
    // Restaurante
     
  
<div className='min-h-screen space-y-5 bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-95'>
  <NavBar/>

 <ListRestaurantes/>
   
    <Categorias/>
   <Map/>  
   <div className='mt-24'>
       <FooterDsk/>
   </div>

</div>

  }
    </>
    
    
  )
}

export default HomeAuthDsk