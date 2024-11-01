
import { useEffect } from 'react';
import restauranteData from '../../context/restauranteData';
import {BsSearch } from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListRestauranteMb = () => {
   const {product, 

    getProduct, 
    setBuscando, 
    busqueda, 
    setBusqueda,
  } = restauranteData();

  useEffect(() => {
    getProduct();
  }, [product]);

  useEffect(() => {
   
    if (busqueda.trim() !== '') {
      setBuscando(true);
    } else {
      setBuscando(false);
    }
  }, [busqueda]);

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
     slidesToShow: 1,
    slidesToScroll: 1,
  
  };


  return (
      <div className='p-2   rounded-lg mb-2'>
      <div className='flex flex-col text-center text-red-800 mb-2 py-4  gap-2'>
        <input
          type='text'
          className='border ring-1 border-red-800 ring-red-800 bg-white focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 w-8/12 m-auto border px-4 py-1 rounded-lg placeholder:italic'
          placeholder='Buscar un restaurante..'
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      {product.length === 0 ? (
        <p className='w-80 m-auto px-12 py-10 text-black text-lg'>Cargando..</p>
      ) : (
        <>
          <Slider {...settings}>
            {product.map((item, index) => (
              <div className='px-2' key={index}>
                <div className="bg-white flex border ">
                  <img src={item.foto_usuario} alt="foto-rest" className='w-52 h-42 p-2 rounded-xl' />
                  <div className="text-center p-2 w-40 m-auto">
                    <h3 className="text-lg font-aref text-wwe font-bold">{item.nombre_restaurante}</h3>
                    <div className='gap-5 flex justify-center mt-14'>
                      <Link to={`/clientePerfil/${item.id_usuario}`} className='rounded-lg border px-2 shadow-xl border w-10 flex justify-center py-2'><BsSearch/></Link>
                      <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-2 bg-white shadow-xl w-10 flex justify-center py-2'><GoCodeReview/></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          

        </>
      )}
    </div>
  );
};

export default ListRestauranteMb;
