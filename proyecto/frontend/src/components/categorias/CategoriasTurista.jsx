import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'
import { Link } from 'react-router-dom'
import ImageRed from '../../assets/bgred.png'
import ImageMapa from '../../assets/mapa.png'
import ImageDescuentos from '../../assets/descuentos.png'



const CategoriasTurista = () => {


  const {usuario} = useContext(todoContext)

  return (
    <>
    {
usuario && usuario.rol.nacionalidad ? 

<div className='flex flex-col  justify-center items-center  mt-24  '>
 
  <div className='flex flex-col   gap-5'>

  


  <div className='flex gap-4'>

<div className='flex-col h-auto '>



   <div className='flex  gap-10'>
<div className="card hover:scale-105 transition-all duration-300 delay-150  shadow-xl  w-6/12  " >
  <div
    className="absolute rounded-xl  inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ImageDescuentos}) ` }}
  >

  </div>
  <div >

  </div>
  
  <div className="card-body text-white z-10 rounded-xl bg-zinc-800 bg-opacity-60 ">
    <h2 className="card-title text-white text-4xl  ">Promociones</h2>
    <p className='text-white card-body  font-semibold p-2   '>Mira las promociones que se encuentran actualmente.</p>
    <div className="card-actions justify-end">
<Link to='/descuentos' className='ml-2 bg-wwe p-2 rounded-md w-52 font-aref font-semibold flex justify-center py-1  text-white text-2xl'>Ver promociones</Link>
    </div>
  </div>
</div>
 

<div className="card hover:scale-105 h-56 transition-all duration-300 delay-150  shadow-xl  w-6/12  mt-2">
  <div
    className="absolute  rounded-xl inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ImageMapa })` }}
  />
  <div className="card-body  bg-zinc-800  rounded-xl bg-opacity-60 text-white relative ">
    <h2 className="card-title text-white text-4xl">Mapa</h2>
    <p className="text-white card-body  font-semibold p-2 ">
      Mira tus restaurantes cercanos
    </p>
    <div className="card-actions justify-end">
      <Link to="/map" className="bg-wwe text-white text-2xl rounded-md w-42 px-3 font-semibold font-aref flex justify-center py-1">
        Ver mapa
      </Link>
    </div>
  </div>
</div>

</div> 

<div className="card  image-full h-44  mt-5 hover:scale-95 transition-all duration-300 delay-150 ">
 <figure><img src={ImageRed} alt="Shoes" className='w-full ' /></figure>
  <div className="card-body">
    <h2 className=" text-4xl font-bold text-white font-aref ">Busca tu restaurante favorito</h2>
   
   
  </div>
</div>
</div>


</div>
</div>
</div>


  :
  <Home/>
    }
     
   </>
  )
}

export default CategoriasTurista