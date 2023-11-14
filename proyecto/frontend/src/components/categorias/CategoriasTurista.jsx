import React, { useContext } from 'react'
import todoContext from '../../context/todoContext'
import { Link } from 'react-router-dom'
import ImageRed from '../../assets/bgred.png'
import ImageMapa from '../../assets/mapa.png'
import ImageDescuentos from '../../assets/descuentos.png'
import ImageAlojamiento from '../../assets/alojamientos.png'

const CategoriasTurista = () => {


  const {usuario} = useContext(todoContext)

  return (
    <>
      {usuario && usuario.rol.nacionalidad ? (
        <div className='flex flex-col justify-center items-center mt-24 w-9/12 m-auto'>
          <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-3 gap-2 p-2'>
              <div className='card hover:scale-105 h-56 transition-all duration-300 delay-150 shadow-xl mt-2'>
                <div
                  className='absolute rounded-xl inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${ImageDescuentos})` }}
                />
                <div className='card-body bg-zinc-800 rounded-xl bg-opacity-60 text-white relative '>
                  <h2 className='card-title text-white text-4xl'>Descuentos</h2>
                  <p className='text-white card-body font-semibold p-2'>Mira los descuentos que se encuentran actualmente</p>
                  <div className='card-actions justify-end'>
                    <Link
                      to='/descuentos'
                      className='bg-wwe text-white text-2xl rounded-md w-42 px-3 font-semibold font-aref flex justify-center py-1'
                    >
                      Ver Descuentos
                    </Link>
                  </div>
                </div>
              </div>


              <div className='card hover:scale-105 h-56 transition-all duration-300 delay-150 shadow-xl mt-2'>
                <div
                  className='absolute rounded-xl inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${ImageMapa})` }}
                />
                <div className='card-body bg-zinc-800 rounded-xl bg-opacity-60 text-white relative '>
                  <h2 className='card-title text-white text-4xl'>Mapa</h2>
                  <p className='text-white card-body font-semibold p-2'>Mira tus restaurantes cercanos</p>
                  <div className='card-actions justify-end'>
                    <Link
                      to='/map'
                      className='bg-wwe text-white text-2xl rounded-md w-42 px-3 font-semibold font-aref flex justify-center py-1'
                    >
                      Ver mapa
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card hover:scale-105 h-56 transition-all duration-300 delay-150 shadow-xl  mt-2'>
                <div
                  className='absolute rounded-xl inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${ImageAlojamiento})` }}
                />
                <div className='card-body bg-opacity-50 bg-zinc-800 rounded-xl  text-wwe relative '>
                  <h2 className='card-title text-white font-semibold font-aref text-4xl'>Alojamientos</h2>
                  <p className='text-white card-body font-semibold p-2'>Ingresa donde te estas alojando</p>
                  <div className='card-actions justify-end'>
                    <Link
                      to='/alojamiento'
                      className='bg-wwe text-white text-2xl rounded-md w-42 px-3 font-semibold font-aref flex justify-center py-1'
                    >
                      Ingresar alojamiento
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='card image-full h-44 mt-5 m-5 hover:scale-95 transition-all duration-300 delay-150 '>
              <figure>
                <img src={ImageRed} alt='Shoes' className='w-full ' />
              </figure>
              <div className='card-body'>
                <h2 className='text-4xl font-bold text-white font-aref'>Busca tu restaurante favorito</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default CategoriasTurista;