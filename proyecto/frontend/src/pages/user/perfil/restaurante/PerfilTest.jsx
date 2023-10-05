import React from 'react'
import todoContext from '../../../../context/todoContext'
import { useContext, useEffect } from 'react';
import NavBar from '../../../../components/nabvar/NavBar';
const PerfilTest = () => {

      const TodoContext = useContext(todoContext);
  const { usuario, autenticado, usuarioAutenticado } = TodoContext;

 useEffect(() => {
 
usuarioAutenticado()

  }, [autenticado]);


  return (
    <>
    <div className='min-h-screen text-center text-2xl text-black dark:bg-zinc-800 dark:bg-opacity-95 bg-white bg-opacity-75'>
<NavBar/>
   
    {
       usuario && usuario.rol.nombre ?   <><p>{usuario.rol.nombre} </p> <p>{usuario.alias}</p> </>: usuario && usuario.rol.nacionalidad ? 
       <> {usuario.rol.nombres} {usuario.rol.apellidos} </>: usuario && usuario.rol.nro_empleado ? <> <p> {usuario.alias} {usuario.nombres} </p>
       </> : null
    } 
    </div>
    </>
  )
}

export default PerfilTest



