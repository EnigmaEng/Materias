import React, { useContext, useEffect } from 'react'
import todoContext from '../../../../context/todoContext'
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/nabvar/NavBar';


const PerfilDsk = () => {
  const TodoContext = useContext(todoContext);
  const { usuario, autenticado, usuarioAutenticado } = TodoContext;

 useEffect(() => {
 
usuarioAutenticado()

  }, [autenticado]);


  return (
    <>
    <div className='min-h-screen bg-white  bg-opacity-75 dark:bg-zinc-800 dark:bg-opacity-95'>

    <NavBar/>
      {usuario && usuario.rol.nombre ?
      <>
        
        <div className='w-full flex justify-center items-center bg-white shadow-xl h-8/12 absolute top-36'>
       
              <img
            src={usuario.url_img_usuario}
            alt="foto de perfil"
            className='rounded-box border border-wwe w-72 h-72 shadow-xl absolute left-28  top-10 '
          /> 
           <div className='w-6/12  absolute right-64 top-10'>
           <p className='text-3xl font-bold text-wwe text-center  '> {usuario.rol.nombre}</p>
           <div className='mt-5 h-64 border bg-white shadow-xl grid grid-cols-4 rounded-box p-8'>
            <p>Sin resenas</p>
           </div>
         </div>
      <Link to='/editarPerfilRestaurante' className='absolute right-10  bg-wwe rounded-lg px-6 py-1 top-28 text-white shadow-xl text-lg'>
        <p>Agregar mas datos</p>
      </Link>
        </div>
          </>
       : 
        <div className='min-h-screen'>
          <p>No user</p>
        </div>
    }
      </div>
    </>
  );
};

export default PerfilDsk;