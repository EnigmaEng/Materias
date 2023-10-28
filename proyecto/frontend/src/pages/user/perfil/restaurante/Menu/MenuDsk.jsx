import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';
import {MdMenuBook} from 'react-icons/md'
import { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../../../../config/axios';
import todoContext from '../../../../../context/todoContext';
import menuData from '../../../../../context/menuData';
import {BiArrowBack} from 'react-icons/bi'
const MenuDsk = () => {


const {
  getPlatos,
  platos
} = menuData();

const TodoContext = useContext(todoContext)
const {usuario, autenticado} = TodoContext

 useEffect(() => {
  if (autenticado && usuario && usuario.id_usuario) {

    getPlatos();
  }
}, [autenticado, usuario]);



  return (
    <div className='min-h-screen space-y-28  dark:bg-zinc-800 dark:bg-opacity-95'> 
    <div className='hidden md:block'>
  <NavBar/>
    </div>
      <Link to='/homeAuth' >
    <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
    </Link>
    <div className='bg-white w-8/12 justify-center m-auto space-y-5 py-6 text-black text-3xl flex flex-col  items-center rounded-box'>
        <div className='flex '>
              <p className='text-4xl text-center text-wwe flex gap-3 font-aref font-semibold mb-10'>
              
                 <span className='text-wwe'> <MdMenuBook/></span> Tus menus:</p> 
             
        </div>
       
<div className='grid grid-cols-4  items-center gap-8'>

  {Array.isArray(platos) && platos.length > 0 ? (
    platos.map((item, index) => (
      <div className=' hover:scale-125 duration-300 delay-150 transition-all rounded-box  bg-white shadow-xl w-52 h-82 text-center text-black text-2xl' key={index}>
          <img src={item.url_img_menu} alt="foto-plato" className='h-32 bg-gray-700 rounded-t-box' />
        <p className='text-center text-lg font-aref text-black font-semibold'>{item.nombre_plato}</p>

      
        <div className='p-2 h-24'>
          <p className='text-sm h-12'>{item.descripcion}</p>
          <p className='font-aref '>{item.costo} $</p>
        </div>
      </div>
    ))
  ) : (
    <div className='flex flex-col justify-center items-center gap-4'>
      <p className='text-gray-500 font-aref mb-20'>No tienes platos creados</p>
      <Link to='/crearMenu' className='bg-wwe shadow-xl px-3 py-1 text-white rounded-lg'>
        Crear platos
      </Link>
    </div>
  )}

</div>

    </div>
  
   </div>
  )
}

export default MenuDsk;