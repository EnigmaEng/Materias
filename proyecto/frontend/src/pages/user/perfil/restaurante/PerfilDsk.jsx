import React, { useContext, useEffect } from 'react'
import todoContext from '../../../../context/todoContext'


const PerfilDsk = () => {
  const TodoContext = useContext(todoContext);
  const { usuario, autenticado, iniciarSesion } = TodoContext;

 useEffect(() => {
 
iniciarSesion()
console.log(usuario)
  }, [autenticado]);


  return (
    <>
      {usuario === null ? (
        <div className='min-h-screen'>Cargando...</div>
      ) : usuario ? (
        <div className='min-h-screen'>
          <p className='text-3xl font-bold text-black'>Hola! {usuario.email}</p>
          <img
            src={usuario.url_img_usuario}
            alt="perfil"
            className='rounded-full w-14 shadow-xl'
          />
        </div>
      ) : (
        <div className='min-h-screen'>
          <p>No user</p>
        </div>
      )}
    </>
  );
};

export default PerfilDsk;