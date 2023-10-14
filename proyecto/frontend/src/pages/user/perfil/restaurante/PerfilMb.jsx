import { useContext, useEffect } from 'react'
import Mensaje from '../../../../components/alertas/Mensaje'
import todoContext from '../../../../context/todoContext'
import Home from '../../../HomePublic/Home'
import NavBar from '../../../../components/nabvar/NavBar'

const PerfilMb = () => {

  
const TodoContext = useContext(todoContext)
const {usuario, usuarioAutenticado, autenticado} = TodoContext

useEffect(() => 
{
usuarioAutenticado()
},[autenticado])
  return (
    <>
{
  usuario && usuario.rol.nombre ? 
    <div className='min-h-screen bg-white text-black font-aref dark:text-white bg-opacity-75 dark:bg-zinc-800 dark:bg-opacity-95'>
      <NavBar/>
     <div className='py-20'>
      <div className=' rounded-box m-6 text-black font-aref text-center shadow-xl bg-white p-4  '>
        <img src={usuario.img_url_usuario} alt="foto-perfil" className='rounded-full w-28 h-28 m-auto mb-8 border' />
    <h2>{usuario.rol.nombre}</h2>
    <hr className='border border-wwe mt-10 mb-5' />
    <p>Calificaciones: </p>
<div className='grid grid-cols-2 mt-5'>
<div className='border border-wwe shadow-xl rounded-box'>
<div className='flex flex-col'>
  <p>Usuario: @</p>
<p>Instalaciones: </p>
<p>Comida: </p>
<p>Camareros: </p>
<p>Local: </p>
<p>General: </p>
</div>
</div>
</div>
     </div>
     </div>
     
    

    </div>




    : <Home/>
}
   
</>
  )
}

export default PerfilMb