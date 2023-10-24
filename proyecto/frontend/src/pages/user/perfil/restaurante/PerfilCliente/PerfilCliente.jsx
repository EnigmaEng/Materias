import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';
import NavBar from '../../../../../components/nabvar/NavBar';

const PerfilCliente = () => {
  const { id_usuario } = useParams();

  const [restaurante, setRestaurante] = useState([]);

const getProductById = async () => {

  try {
     const endpoint = '/restauranteController.php';
  const accion = {
    "accion": "restauranteById",
    "id_usuario": id_usuario
  }
  const res = await clienteAxios.post(endpoint, accion)
  console.log(res.data)
 setRestaurante(res.data);
  } catch (error) {
    console.log(error)
  }
 
 
}

  useEffect(() => {
    getProductById();
  }, [id_usuario]);

  if (!restaurante) {
    return (<div className='min-h-screen'>
    <p className='text-center font-aref text-2xl text-black'>....</p></div>);
  }

  return (
    <>
    <div className='min-h-screen '>
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
   </div>
    </>
  );
}

export default PerfilCliente;
