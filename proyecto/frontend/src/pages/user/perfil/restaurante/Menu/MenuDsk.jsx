import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';
import {MdMenuBook} from 'react-icons/md'
import { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../../../../config/axios';
import todoContext from '../../../../../context/todoContext';
import menuData from '../../../../../context/menuData';
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
    
    <div className='bg-white w-7/12 m-auto space-y-10 py-8 text-black text-3xl flex flex-col  items-center rounded-box'>
        <div className='flex '>
              <p className='text-5xl text-center text-wwe flex gap-3 font-aref mb-10'>
              
                 <span className='text-wwe'> <MdMenuBook/></span> Tus menus:</p> 
             
        </div>
       
<div className='flex justify-center items-center gap-3'>

  {Array.isArray(platos) && platos.length > 0 ? (
    platos.map((item, index) => (
      <div className='border hover:bg-white bg-zinc-100 shadow-xl w-52 h-72 text-center text-black text-2xl' key={index}>
        <p className='text-center py-5 font-aref text-black'>{item.nombre_plato}</p>
        <hr />
        <img src={item.url_img_menu} alt="foto-plato" className='h-24' />
        <div className='p-2'>
          <p>{item.descripcion}</p>
          <p>{item.costo} $</p>
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