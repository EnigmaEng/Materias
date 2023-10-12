
import {MdOutlineRateReview} from 'react-icons/md'
import {IoRestaurantOutline} from 'react-icons/io5'
import {MdMenuBook} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import todoContext from '../../context/todoContext'
import Home from '../../pages/HomePublic/Home'

const CategoriasMb = () => {
  
  const TodoContext = useContext(todoContext)
  const {usuario, usuarioAutenticado, autenticado} = TodoContext;

  useEffect(()=>{
usuarioAutenticado()
  },[autenticado])

  return (
    <>
    {
usuario && usuario.rol.nombre ? 

      
<div className='text-sm text-center flex  justify-center items-center gap-5 '>
    <Link to='/misResenias' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white ' ><p className=''>Mis reseñas</p>
    <p className='ml-4  text-2xl'><MdOutlineRateReview/></p></Link>
    <Link to='/menu' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white'> <p className=''>Menu </p>  
    <p className=' ml-4  text-2xl'></p> 
    </Link>
    <Link to='/crearMenu' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white'> <p className=''>Crear menu</p> 
    <p className='  ml-4  text-2xl'><IoRestaurantOutline/></p></Link>
    </div>
    : usuario && usuario.rol.nacionalidad ? 
    <div className='text-sm text-center flex  justify-center items-center gap-5 '>
    <Link to='/misReseniasTurista' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white ' ><p className=''>Mis reseñas</p>
    <p className='ml-4  text-2xl'><MdOutlineRateReview/></p></Link>
    <Link to='/map' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white'> <p className=''>Mapa </p>  
    </Link>
    <Link to='/perfilTurista' className='p-3 shadow-xl bg-white w-20 rounded-box hover:scale-110 transition-all duration-300 delay-150 h-20 bg-home text-white'> <p className=''>Top 10</p> 
    <p className='  ml-4  text-2xl'><IoRestaurantOutline/></p></Link>
    </div>
      : usuario && usuario.rol.nro_empleado ? 

      <p>Hola Admin</p>

      : <Home/>
    }
     </>
  )
}

export default CategoriasMb;