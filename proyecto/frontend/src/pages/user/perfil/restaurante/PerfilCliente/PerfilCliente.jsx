import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';
import NavBar from '../../../../../components/nabvar/NavBar';

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
    <p className='text-center font-aref text-2xl  text-black'>Cagando..</p></div>);
  }

  return (
    <>
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-80 '>
      <NavBar/>
    {
      
      restaurante.map((item,index) => (
         <div className=' mt-24 flex justify-center' key={index}>
          <div className='bg-white  w-6/12 p-8 rounded-lg shadow-xl  '>
      <h2 className=' text-center text-4xl font-semibold font-aref text-wwe'>{item.nombre}</h2>
     <img src={item.url_img_usuario} alt="foto-perfil" className='w-24 m-auto mt-5 mb-5 h-24 rounded-lg bg-zinc-300' />
     <p className='text-center text-zinc-600 font-semibold text-2xl'>Ubicacion:</p>
     </div>
    </div>
   
      ))
     
    }
    <p  className='text-center text-3xl font-semibold text-wwe mt-5'>Menus</p>
    <div className=' w-6/12 m-auto mt-5 p-1  grid grid-cols-3  gap-5 ' >
   
    { 
    Array.isArray(menu) && menu.length > 0 ?
    
      menu.map((item,index) => (
        
          <div className='rounded-lg shadow-xl border bg-white text-black  font-aref  m-auto h-64 w-52 text-center ' key={index}>
            <h2 className='font-semibold text-3xl mt-3'>{item.nombre_plato}</h2>
            <img src={item.url_img_menu} alt="foto-menu" className='bg-zinc-300 h-28' />
            <div className=' max-h-min grd grid-cols-1  mt-2 h-[39%]'>
              <p className='text-lg'>{item.descripcion}</p>
              <p className='text-2xl'>{item.costo}$</p>
            </div>
            
          </div>
      ))
        :
       
        <div className='h-64 w-52 m-auto text-black font-aref  text-center text-3xl'>
          <p>Sin menus</p>
          </div>
       
    } 
  <div className='  w-full m-auto justify-center items-center  '>
    <h2 className='text-center font-aref font-semibold text-2xl text-wwe'>Reseñas:</h2>
  
      
    
    {
      Array.isArray(resenia) && resenia.length < 0 ?
      resenia.map((item, index) => (
         <li key={index} className='list-none  '>
              <div className="flex items-center gap-x-6 bg-white shadow-xl p-2 rounded-box">
                <div>
                  
                  <p className="text-sm font-semibold leading-6 text-black">Menu gastronómico: {item.calificacion_menu} </p>
                   <p className="text-sm font-semibold leading-6 text-black">Personal: {item.calificacion_personal}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Instalaciones: {item.calificacion_instalaciones}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Calificacion General: {item.calificacion_general}</p>
                    <p className="text-sm font-semibold leading-6 text-black"> {item.fecha}</p>
                </div>
              </div> 
               </li>
      )) 
      : 
      <div className='text-center text-3xl font-semibold font-aref '>
        <p>Sin reseñas realizadas</p>
      </div>
    }
    </div>
    </div>
   </div>
    </>
  );
}

export default PerfilCliente;
