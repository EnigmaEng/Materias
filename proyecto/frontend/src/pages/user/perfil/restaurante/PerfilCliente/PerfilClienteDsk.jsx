import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';
import NavBar from '../../../../../components/nabvar/NavBar';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import perfilData from '../../../../../context/perfilData';
import todoContext from '../../../../../context/todoContext';
import Mensaje from '../../../../../components/alertas/Mensaje';
import DarkMode from '../../../../../components/Buttons/DarkMode';
import {FaHouseUser} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/md'
import {MdDateRange} from 'react-icons/md'


// Imagenes
import ImagenItaliana from '../../../../../assets/italiano.png'
import ImagenAsia from '../../../../../assets/asia.png'
import ImagenMexico from '../../../../../assets/mexico.png'
import ImagenGourmet from '../../../../../assets/gourmet.png'
import ImagenFrancesa from '../../../../../assets/francesa.png'
import ImagenFastFood from '../../../../../assets/fastFood.png'
import LogoUbi from '../../../../../assets/logoubi.png'
import FooterDsk from '../../../../../components/Footer/FooterDsk';
const PerfilClienteDsk = () => {

  const {
   getProductById,
getReseniaById,
getMenuById,
resenia,
menu,
restaurante
  } = perfilData();

  const { id_usuario } = useParams();
  const [descuentos, setDescuentos] = useState([])

  const {turistaVisitaRest, usuario, mensaje} = useContext(todoContext)

    const getDescuentos = async () => {

    const accion = {
      "accion": "obtenerDescuentosByIdUsuario",
      "id_usuario": id_usuario
      
    }
      const respuesta = await clienteAxios.post('/restauranteController.php',accion )
      setDescuentos(respuesta.data)
    
    }

  useEffect(() => {
    getProductById(id_usuario);
    getMenuById(id_usuario);
    getReseniaById(id_usuario);
getDescuentos();
    

  }, [id_usuario]);


  

  const handleClick = (id_usuario) => {
    const accion = {
    "accion":"turistaVisitaRest",
    "id_usuario_turista": usuario?.id_usuario,
    "id_usuario_rest": id_usuario
} 

  turistaVisitaRest(accion)


  }
  


const tipoRestaurante = restaurante[0]?.descripcion;
let imagen ='';

  switch (tipoRestaurante) {
    case "Comida italiana":
      imagen = ImagenItaliana;
      break;
    case "Comida mexicana":
      imagen = ImagenMexico;
      break;
    case "Comida francesa":
      imagen = ImagenFrancesa;
      break;
    case "Comida japonesa":
      imagen = ImagenAsia;
      break;
    case "Comida China":
      imagen = ImagenAsia
      break;
    case "Comida gourmet" || "Restaurante de autor":
      imagen = ImagenGourmet;
      break;
    default:
      // para llevar y comida rapida
      imagen = ImagenFastFood;
      break;
  }


 
  
  if (!restaurante) {
    return (<div className='min-h-screen '>
    <p className='text-center font-aref text-2xl  text-black'>Cargando..</p></div>);
  }

  return (

  <>
    <div className='min-h-screen dark:bg-zinc-800 bg-opacity-60'>
      <div className='w-full shadow-xl rounded-md text-black font-aref p-8  flex justify-center items-center absolute top-0 h-72' style={{ backgroundImage: `url(${imagen}) `, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
       <Link to='/homeAuth' className='absolute  md:left-24 left-4 top-24 bg-wwe text-white rounded-lg px-6 py-2 '>  <BiArrowBack/> </Link>
<button className='z-50 absolute top-5 right-10'><DarkMode/></button>
      </div>
      {mensaje && <Mensaje mensaje={mensaje} tipo="alerta" />}
      {restaurante.map((item, index) => (
        <div key={index} className='flex items-center  justify-center mt-28  rounded-lg text-black bg-white dark:bg-gradient-to-r from-slate-800 to-slate-900 dark:text-white'>
        
          <div className='flex flex-col justify-center items-center'>
              <img src={item.url_img_usuario} alt="perfil" className='w-40 z-50 h-40 rounded-full object-cover' />
          <div className='flex flex-col p-2 rounded-lg gap-2 mb-4 text-center'>
            <h2 className='p-2 dark:text-white font-mono font-bold mt-2 text-5xl text-wwe mb-4 z-50'>{item.nombre}</h2>
            <button className='bg-wwe rounded-md  mt-5 mr-5  hover:bg-red-700  py-1.5 font-semibold font-aref  text-white text-xl dark:bg-white dark:text-wwe dark:hover:bg-gray-200' onClick={() => handleClick(`${item.id_usuario}`)}>Quiero ir!</button>
            <p className='flex gap-2 justify-center items-center items-center'><FaHouseUser/> Nº  {item.nro_local}</p>
            <p className='font-aref flex items-center gap-2'><MdOutlineFoodBank/> Tipo de restaurante: <b className='font-aref'>{item.descripcion}</b></p>
            <hr />
            <div className='flex justify-center space-x-2 shadow-xl items-center text-center  p-2 rounded-lg'>
              <img src={LogoUbi} alt="logo-ubi" className='w-4' />
              <p className='font-semibold '>
                {item.calle} {item.nro_puerta} , {item.esquina}
              </p>
            </div>
          </div>
          </div>
           <div className='p-2'>

          </div>
        </div>
      ))}

<div className='flex'>


      <div className='flex flex-col mb-10 w-11/12'>
<>
<div className='flex flex-col'>
  <p className='text-center text-3xl font-aref font-semibold mt-2 dark:text-white text-wwe'>Menú</p>


<div  className='overflow-x-scroll scrollbar-hidden ml-2'>
 
  <div className='flex  mb-4 gap-2 '>
      {
      
         Array.isArray(menu) && menu.length > 0 ? 
          menu.map((item, index) => (
         <div className='bg-white rounded-md p-4 w-5/12 h-52 flex  shadow-xl flex-shrink-0' key={index}>
           
            <div className='text-center text-2xl font-aref p-2  card-body w-24'>
             <h2 className='  font-semibold  text-2xl text-wwe'>{item.nombre_plato}</h2>
           
             <p className='text-sm font-aref text-black'>{item.descripcion}</p>
            <p className='text-black text-xl font-semibold'>$ {item.costo}</p>
            
           
            </div>
            <img src={item.url_img_menu} alt="foto-menu" className='rounded-lg shadow-xl h-28 w-28 border border-white shadow-gray-500 ' />
         </div>

          ))
        
         : 

         <div className='bg-white items-center text-center w-full h-52 rounded-lg '>
          <p className='items-center mt-5'>Sin platos</p>
         </div>
    
        
      } 
    
         </div> 
          </div>
           </div>
      </>
{/* Descuentos */}
<p className='text-center text-wwe text-3xl font-semibold dark:text-white '>Promociones</p>
<div  className='overflow-x-scroll scrollbar-hidden ml-2'>
 
  <div className='flex  mb-4 gap-2 '>
 {     descuentos.status === 'No hay descuentos del restaurante' ?
  <div className='p-4 bg-white rounded-lg m-2 h-32 w-full  text-center items-center shadow-xl text-gray-400'>Sin descuentos</div>
    :
 
  
        descuentos.map((item,index) => (
      <div key={index} className='bg-white flex rounded-lg ml-4 border w-6/12 p-4 gap-5 flex-shrink-0'> 
      <img src={item.url_img_descuento} alt="descuento" className='h-32 rounded-lg w-32 bg-gray-400' />
      <div className='text-slate-700 text-xl'>
            <h2 className='text-2xl font-semibold '>{item.titulo_descuento}</h2>
<p className='p-2 text-sm'>{item.descripcion}</p>
<p className='text-center mt-5 font-semibold'>${item.costo}</p>
      </div>
      
      </div>
    ))

  
}
</div>
</div>
      {/* Descuentos */}
  </div> 
  
  
  
   <div className='w-4/12 border p-4 m-5  rounded-md bg-white'>
    <p className='text-center font-semibold text-2xl text-wwe'>Puntuaciones</p>
    {
        resenia[0] === 'Error en la consulta' ?
        <p className='text-center'>Este restaurante no tiene reseñas</p>
        :
        resenia.map((item,index) => (
          <div className='border shadow-xl mb-3 bg-white p-4 rounded-md text-black font-aref   justify-center items-center flex flex-col'  key={index}>
              <p className='font-aref mb-4 mt-3 text-sm text-center text-gray-800 flex items-center '><MdDateRange/>{item.fecha}</p>
              <p>Menú: <b>{item.calificacion_menu}</b></p>
                <p>Personal: <b>{item.calificacion_personal }</b></p>
                <p>Instalaciones: <b>{item.calificacion_instalaciones}</b></p>
                    <p>General: <b>{item.calificacion_general}</b></p>
              
          </div>
        ))
    }
    
  </div>
</div>
  

  
    </div> 
    <FooterDsk/>
  </>
 
  );
}

export default PerfilClienteDsk;