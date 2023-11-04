import { useEffect } from 'react';
import perfilData from '../../../../../context/perfilData';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../../../components/nabvar/NavBar';
import {BiArrowBack} from 'react-icons/bi'
import DarkMode from '../../../../../components/Buttons/DarkMode';

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



  useEffect(() => {
    getProductById(id_usuario);
    getMenuById(id_usuario);
    getReseniaById(id_usuario);
    
  }, [id_usuario]);


  return (
    <div className=''>
        <div className='absolute top-2 left-2 bg-wwe p-2 h-8 w-8 text-white  rounded-lg'>
            <Link to='/homeAuth' className=' '>
<BiArrowBack/>
</Link>
        </div>

{
   restaurante.map((item,index) => (
    <>
    <div className='w-full'>
<img src={item.url_img_usuario} alt="foto-rest-mobile" className='bg-zinc-800 bg-opacity-80 shadow-xl bg-white shadow-gray-800' />

<span className='absolute top-3 right-3'>
    <DarkMode/>
</span>
    <div className=' '> 
    <div className='flex flex-col justify-center items-center bg-white dark:bg-zinc-900'>
        <p className='text-center text-4xl text-wwe font-aref font-semibold'>{item.nombre}</p>
   <button className='bg-wwe text-white px-2 rounded-md m-4 w-64 h-8'>Quiero ir</button>  <p className='text-wwe font-semibold text-center text-sm m-2 dark:text-white'>Nro de local: {item.nro_local}</p>  
    </div>
    <>
    
<article className='bg-white dark:bg-zinc-900 flex flex-col  '>
<p className='text-center font-semibold font-aref text-lg text-wwe mb-1'>Menus:</p>
{
    Array.isArray(menu) && menu.length > 0 ? 

       menu.map((item, index)=> (
        <div className='flex border dark:border-zinc-900 space-x-2 ' key={index}>
                <img src={item.url_img_menu}alt="foto-plato" className='w-40 h-32 bg-gray-800 rounded-md' />
                <div className='flex flex-col m-2 space-y-5  text-wwe dark:text-white font-aref  '>
                    <p className='text-center font-semibold dark:text-wwe text-xl'>{item.nombre_plato}</p>
                    <p className='text-lg ml-5'>{item.descripcion}</p>
                    <p className='text-center text-lg'>${item.costo}</p>
                </div>

        </div>
       ))
    :
        <div className='text-wwe text-2xl font-aref font-semibold'>Sin platos</div>
}
</article>
</>
<aside className=''>
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