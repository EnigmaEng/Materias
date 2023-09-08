import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../../context/todoContext'

const NavBarDsk = () => {

  const TodoContext = useContext(todoContext)
  const {autenticado, cerrarSesion} = TodoContext

  

  return (
    <>

    {
      autenticado ? (<> <div className='navbar bg-white m-auto shadow-xl '>
      <div>
            <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
              className='w-14 ml-10'  />
      </div>
      <button onClick={cerrarSesion} className='hover:scale-125 transition-all delay-150 duration-300 absolute right-10 rounded-lg border  shadow-xl text-black font-bold px-4 py-1'>
      Salir
      </button>
  </div> </> ) : 
      
      ( <div className='navbar bg-white m-auto  '>
        <div>
              <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
                className='w-14 ml-10'  />
        </div>
        <div className='border absolute right-10 ring-2 ring-red-800 shadow-xl rounded-full'>
          <img src='' alt='perfil' className='w-14 rounded-full h-14' />
        </div>
    </div>)

     
    }
    </>
    
  )
}

export default NavBarDsk