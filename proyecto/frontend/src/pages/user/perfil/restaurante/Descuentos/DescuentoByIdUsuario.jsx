import { useEffect, useContext, useState } from 'react';
import NavBar from '../../../../../components/nabvar/NavBar';
import clienteAxios from '../../../../../config/axios';
import todoContext from '../../../../../context/todoContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DescuentoByIdUsuario = () => {

      const {usuario, autenticado} = useContext(todoContext)

    const [descuentoUser, setDescuentoUser] = useState([])

    const getDescuentosById = async() => {

    const accion = {
        'accion': 'obtenerDescuentosByIdUsuario',
        'id_usuario': usuario?.id_usuario
    }
    const respuesta = await clienteAxios.post('/restauranteController.php', accion);
    setDescuentoUser(respuesta.data);
   
    }

    const eliminarDescuento = async(id_descuento) => {
      const accion = {
        'accion': 'eliminarDescuento',
        'id_descuento': id_descuento
      }
       const respuesta = await clienteAxios.post("/restauranteController.php", accion)
window.location.reload()
    }
    
    useEffect(() => {
        if(usuario && usuario.id_usuario && autenticado){
            getDescuentosById();
        }
        
       
    },[descuentoUser, usuario, autenticado])



    return (
    <>
    {
    Array.isArray(descuentoUser) && descuentoUser.length > 0 ? (
       <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-80'>
    <NavBar/>
      <div className='bg-white p-8 flex flex-col w-8/12   m-auto mt-24 shadow-xl rounded-lg'>
        <p className='text-center text-wwe font-aref font-semibold text-2xl'>Tus promociones:</p>
        <div className='grid grid-cols-3'>

      
          {descuentoUser.map((item, index) => (
            <div key={index} className='bg-white rounded-box w-64 shadow-xl mt-5 rounded-lg border text-center'>
              <img src={item.url_img_descuento} alt="foto-descuento" className='w-64 m-auto h-32 border border-white p-2 rounded-t-lg' />
              <div className='card-body  p-2'>
            
                <p className='text-wwe text-xl font-semibold p-4'>{item.titulo_descuento}</p>
                <p className='text-wwe text-sm '>{item.descripcion}</p>
                <p className='text-wwe font-aref font-semibold'>${item.costo}</p>
               
              </div>
<div className='flex p-4 gap-2'>
   <Link to={`/descuentoById/${item.id_descuento}`} className='hover:bg-red-800 block bg-wwe font-aref font-semibold w-28  text-white py-1 rounded-lg mx-auto mt-2'>Editar</Link>
              <button onClick={()=> eliminarDescuento(`${item.id_descuento}`)} className='hover:bg-red-800 font-aref font-semibold block bg-wwe w-28  text-white py-1 rounded-lg mx-auto mt-2'>Borrar</button>
</div>
             
            </div>
          ))}
     </div>
      </div>
    </div>
    )
: (
  <div className='min-h-screen'>
    <NavBar/>
    <div className='bg-white p-2 rounded-lg w-6/12 m-auto mt-24'>
      <p className='text-wwe text-center'>Sin promociones</p>
    </div>
     
  </div>
 
)
}
    </>
  )
}

export default DescuentoByIdUsuario;