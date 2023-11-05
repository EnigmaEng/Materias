import { useEffect } from 'react';
import perfilData from '../../../../../context/perfilData';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../../../components/nabvar/NavBar';
import {BiArrowBack} from 'react-icons/bi'
import DarkMode from '../../../../../components/Buttons/DarkMode';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PerfilClienteMb = () => {

    const {id_usuario} = useParams();
  const {
   getProductById,
getReseniaById,
getMenuById,
resenia,
menu,
restaurante
  } = perfilData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Cantidad de productos a mostrar
    slidesToScroll: 2,
    variableWidth: true
  };

  useEffect(() => {
    getProductById(id_usuario);
    getMenuById(id_usuario);
    getReseniaById(id_usuario);
    
  }, [id_usuario]);


  return (
    <div className='bg-white dark:bg-zinc-900'>
        <div className='absolute top-2 left-2 bg-wwe p-2 h-8 w-8 text-white  rounded-lg'>
            <Link to='/homeAuth' className=' '>
<BiArrowBack/>
</Link>
        </div>

{
   restaurante.map((item,index) => (
    <>
    <div className='w-full ' key={index}>
<img src={item.url_img_usuario} alt="foto-rest-mobile" className='bg-zinc-800 bg-opacity-80 shadow-xl bg-white shadow-gray-800 w-full' />

<span className='absolute top-3 right-3'>
    <DarkMode/>
</span>
    <div className=' ' > 
    <div className='flex flex-col justify-center items-center bg-white dark:bg-zinc-900'>
        <p className='text-center text-4xl text-wwe font-aref font-semibold'>{item.nombre}</p>
   <button className='bg-wwe text-white px-2 rounded-md m-4 w-64 h-8'>¡Quiero ir!</button>  <p className='text-wwe font-semibold text-center text-sm m-2 dark:text-white'>Número de local: {item.nro_local}</p>  
    </div>
    <>
    
 <article className='bg-white dark:bg-zinc-900  flex flex-col  '>
      <p className='text-center font-semibold  font-aref text-lg text-wwe mb-1 dark:text-white'>Menús:</p>
      {Array.isArray(menu) && menu.length > 0 ? ( 
    
        <Slider {...settings}>
           
          {menu.map((item, index) => (
            <div className='flex flex-col  items-center border dark:border-zinc-900 shadow-xl' key={index}>
              <img src={item.url_img_menu} alt="foto-plato" className='h-28 w-full ' />
              <div className='text-center '>
                <p className='text-xl font-semibold leading-7 tracking-tight text-wwe text-center dark:text-white'>{item.nombre_plato}</p>
                <p className='text-sm font-semibold leading-6 text-black h-24 dark:text-white rounded-lg m-2'>{item.descripcion}</p>
                <p className='text-xl font-semibold leading-6 text-black dark:text-white'>${item.costo}</p>
              </div>
            </div>
          ))}
          
        </Slider>
     
      ) : (
        <div className='text-gray-600 text-sm font-aref font-semibold'>Sin platos</div>
      )}
    </article>
</>
<aside className='mt-10'>
{
    resenia[0] === 'Error en la consulta' ?
    <div className='bg-white dark:bg-zinc-900 h-24 '><p className='text-center  font-semibold font-aref dark:bg-zinc-900  text-gray-400'>Sin reseñas</p></div>
    :
    resenia.map((item,index) => (
        <div className='border ' key={index}>
            <p>Calificaciones</p>
        </div>
    ))
}
</aside>
    </div>

    </div>
    </>
   ))
}

    </div>
  )
}

export default PerfilClienteMb