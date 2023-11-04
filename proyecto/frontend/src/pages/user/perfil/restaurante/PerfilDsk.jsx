import React, { useContext, useEffect } from 'react'
import todoContext from '../../../../context/todoContext'
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/nabvar/NavBar';
import Home from '../../../HomePublic/Home';


const PerfilDsk = () => {
  const TodoContext = useContext(todoContext);
  const { usuario} = TodoContext;



  const resenas = [
    { usuario: 'Manolo' , calificacion1: '7', calificacion2: '8', calificacion3: '10', calificacion4: '6'},
    { usuario: 'Jose' , calificacion1: '4', calificacion2: '9', calificacion3: '3', calificacion4: '5'},
    { usuario: 'Juan' , calificacion1: '6', calificacion2: '8', calificacion3: '8', calificacion4: '9'},
    { usuario: 'Mariano' , calificacion1: '9', calificacion2: '9', calificacion3: '5', calificacion4: '6'},
  ]

  return (
    <>
    <div className='min-h-screen  dark:bg-zinc-800 dark:bg-opacity-95'>

    <NavBar/>
      {usuario && usuario.rol.nombre ?
      <>
      
        <div className=' m-20 bg-white p-8 rounded-box shadow-xl  pb-10 flex gap-10'>
       
              <img
            src={usuario.url_img_usuario}
            alt="foto de perfil"
            className='rounded-box border border-wwe w-3/12 mt-5 h-72 shadow-xl   '
          /> 
           <div className='w-full flex flex-col'>
            <div className='flex items-center justify-center mr-28'>
               <p className='text-3xl font-bold text-wwe text-center  '> {usuario.rol.nombre}</p> 
               {/* <Link to='/editarPerfilRestaurante' className='  bg-wwe rounded-lg px-6 py-1 top-28 text-white shadow-xl text-lg'>
        <p>Agregar mas datos</p>
      </Link> */}
            </div>
          
           <div className='mt-5 h-64 border bg-white shadow-xl grid grid-cols-4 rounded-box p-8 gap-10'>
            {resenas.map((item, index) => (
              <div className='rounded-box bg-white border shadow-xl text-black font-aref text-lg p-4 space-y-2' key={index}>
                <p>Nombre: {item.usuario}</p>
                <p>Personal: {item.calificacion2}</p>
                <p>Instalaciones: {item.calificacion3}</p>
                <p>Comida: {item.calificacion4}</p>
               
              </div>
            ))
            }
            <div>

            </div>
           </div>
         </div>
     
        </div>
          </>
       : 
      <Home/>
    }
      </div>
    </>
  );
};

export default PerfilDsk;