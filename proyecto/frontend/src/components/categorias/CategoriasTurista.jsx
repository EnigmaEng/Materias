import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'
import { Link } from 'react-router-dom'
import ImageRed from '../../assets/bgred.png'



const CategoriasTurista = () => {


  const {usuario} = useContext(todoContext)

  return (
    <>
    {
usuario && usuario.rol.nacionalidad ? 

<div className='flex flex-col h-auto w-10/12 ml-20 m-auto mt-24  '>
 
  <div className='flex flex-col   gap-5'>

  


  <div className='flex gap-4'>

<div className='flex-col h-auto '>



   <div className='flex  gap-10'>
<div className="card hover:scale-105 transition-all duration-300 delay-150  shadow-xl  w-6/12  " >
  <div
    className="absolute rounded-xl  inset-0 bg-cover bg-center"
    // style={{ backgroundImage: `url(${ }) ` }}
  >

  </div>
  <div >

  </div>
  
  <div className="card-body text-white z-10 rounded-xl bg-zinc-800 bg-opacity-60 ">
    <h2 className="card-title text-white text-4xl  ">Reseñas de tus clientes</h2>
    <p className='text-white card-body  font-semibold p-2   '>Reseñas realizadas por turistas que se encuentran hospedados en algún hotel del país y eligieron tu restaurante según sus gustos y preferencias.</p>
    <div className="card-actions justify-end">
<Link to='/misResenias' className='ml-2 bg-wwe p-2 rounded-md w-24 flex justify-center py-1  text-white text-3xl'>promociones</Link>
    </div>
  </div>
</div>
 

<div className="card hover:scale-105 transition-all duration-300 delay-150  shadow-xl  w-6/12  mt-2">
  <div
    className="absolute  rounded-xl inset-0 bg-cover bg-center"
    // style={{ backgroundImage: `url(${ })` }}
  />
  <div className="card-body  bg-zinc-800  rounded-xl bg-opacity-60 text-white relative ">
    <h2 className="card-title text-white text-4xl">mapa</h2>
    <p className="text-white card-body  font-semibold p-2 ">
      Encuentra tu menú detallado, modifícalo, agrega platos nuevos, combina tu menú con promociones especiales para los usuarios de Where We Eat y atrae el mayor público posible.
    </p>
    <div className="card-actions justify-end">
      <Link to="/menu" className="bg-wwe text-white text-3xl rounded-md w-24 flex justify-center py-1">
        menu
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
<div className="card w-[20%]  h-72 hover:scale-110 transition-all duration-300 delay-150 image-full">
{/* <video
    autoPlay
    loop
    muted
    className="rounded-2xl  "
  >
    <source src={Video}  type="video/mp4" className='' />

  </video> */}
  <div className="card-body">
    <h2 className="card-title text-white text-4xl">algo</h2>
    <p className='font-semibold text-white card-body rounded-lg p-2 font-aref '>Logra una mayor visibilidad de tu restaurante, descubre el universo Where We Eat y todos sus beneficios para conocer nuevos clientes y llevar al auge a tu establecimiento gastronómico.</p>
    <div className="card-actions justify-end">
      <Link to='/subscripcion' className='text-center font-aref font-semibold bg-wwe w-40 px-6 py-1.5 rounded-md text-white m-auto'>Subscribirme</Link>
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