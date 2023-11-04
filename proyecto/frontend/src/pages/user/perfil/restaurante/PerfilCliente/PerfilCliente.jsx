import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';
import NavBar from '../../../../../components/nabvar/NavBar';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
const PerfilCliente = () => {
  const { id_usuario } = useParams();

const [resenia, setResenia] = useState([]);
  const [restaurante, setRestaurante] = useState([]);
const [menu, setMenu] = useState([]);

   const endpoint = '/restauranteController.php';
 

const getProductById = async () => {
 const accion = {
    "accion": "restauranteById",
    "id_usuario": id_usuario
  }
  try {
  const res = await clienteAxios.post(endpoint, accion)
  console.log(res.data)
 setRestaurante(res.data);
  } catch (error) {
    console.log(error)
  }
 
 
}

const getMenuById = async() => {

  const accion = {
    "accion": "obtenerPlatos",
    "id_usuario_rest": id_usuario
  }
  try {
    const res = await clienteAxios.post('/restauranteController.php',accion)
    setMenu(res.data)
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

const getReseniaById = async () => {
  const endpoint = '/reseniaController.php'
  const accion = {
    "accion": "obtenerReseniaPorId",
    "id_usuario_rest": id_usuario
  }
  try {
    const res = await clienteAxios.post(endpoint, accion)
    setResenia(res.data)
    
  } catch (error) {
    console.log(error)
  }
}




  useEffect(() => {
    getProductById();
    getMenuById();
    getReseniaById();
    
  }, [id_usuario]);

  if (!restaurante) {
    return (<div className='min-h-screen '>
    <p className='text-center font-aref text-2xl  text-black'>Cargando..</p></div>);
  }

  return (
    <>
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-80  '>
      <NavBar/>
       <Link to='/homeAuth' >
    <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
    </Link>
<div className='flex w-full gap-5 p-4 '>
    {
      
      restaurante.map((item,index) => (
         <div className=' mt-10 flex justify-center dark:bg-zinc-800 bg-white w-[40%] m-4 p-3' key={index}>
          <div className='  rounded-lg p-8 '>
      <h2 className=' text-center text-3xl font-semibold font-aref text-wwe'>{item.nombre}</h2>
      
     <img src={item.url_img_usuario} alt="foto-perfil" className=' m-auto shadow-xl mt-5 mb-5 w-72 h-72 rounded-lg bg-zinc-300' />
     <div className='h-96 w-96  rounded-lg '>
       <p className=' px-10 py-10 dark:text-white text-zinc-600 font-semibold text-lg'>Número de local: {item.nro_local} </p>
       
     </div>
    
     </div>
    </div>
   
      ))
     
    }

   <div className='flex  mt-10  bg-white dark:bg-zinc-800 rounded-box shadow-xl  flex-col w-full gap-10'>

      <div className=' m-auto mt-1 p-1 flex-col ' >
          <p  className='text-center text-3xl font-semibold text-wwe mt-5'>Menús</p>
      <div className=' grid grid-cols-4 gap-10 p-10'>
    { 
    Array.isArray(menu) && menu.length > 0 ?
    
      menu.map((item,index) => (
        
          <div className='rounded-lg shadow-xl rounded-lg bg-white text-black   font-aref  m-auto w-56 text-center ' key={index}>
          
            <img src={item.url_img_menu} alt="foto-menu" className='bg-zinc-300 h-48 rounded-t-lg' />
              <h2 className='font-semibold h-10 text-lg mt-3'>{item.nombre_plato}</h2>
            <div className=' max-h-min flex flex-col   mt-2 h-[39%]'>
              <div className='h-20 p-2'>
                 <p className='text-sm'>{item.descripcion}</p>
              </div>
             <div className='h-10 '>
              <p className='text-2xl'>{item.costo}$</p>
             </div>
              
            </div>
            
          </div>
      ))
        :
       
        <div className='h-64  text-black font-aref flex justify-center items-center text-center text-3xl '>
          <p className=' left-[59%]'>Sin Menú</p>
          </div>
       
    } 
      </div>
  <div className=' h-80 p-4  w-full m-auto justify-center items-center  '>
    <h2 className='text-center font-aref font-semibold text-2xl text-wwe'>Reseñas:</h2>
  
      
    <div className='grid grid-cols-4'>

   
{
  resenia[0] === 'Error en la consulta' ? (
    <div className='text-center text-black dark:text-white text-3xl font-semibold font-aref absolute left-[59%]'>
      <p>Sin reseñas realizadas</p>
    </div>
  ) : (
    resenia.map((item, index) => (
      <li key={index} className='list-none '>
        <div className="flex items-center gap-x-6 bg-white shadow-xl p-2 rounded-box">
          <div>
            <p className="text-sm font-semibold leading-6 text-black">Menú gastronómico: {item.calificacion_menu} </p>
            <p className="text-sm font-semibold leading-6 text-black">Personal: {item.calificacion_personal}</p>
            <p className="text-sm font-semibold leading-6 text-black">Instalaciones: {item.calificacion_instalaciones}</p>
            <p className="text-sm font-semibold leading-6 text-black">Calificación General: {item.calificacion_general}</p>
            <p className="text-sm font-semibold leading-6 text-black"> {item.fecha}</p>
          </div>
        </div> 
      </li>
    ))
  )
}


     </div>

    
      </div>
    </div>
    </div>
    </div>
   </div>
    </>
  );
}

export default PerfilCliente;
