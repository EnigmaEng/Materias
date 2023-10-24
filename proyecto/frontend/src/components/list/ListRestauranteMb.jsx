
import { useEffect } from 'react';
import restauranteData from '../../context/restauranteData';
import {BsSearch } from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
import { Link } from 'react-router-dom';
const ListRestauranteMb = () => {
   const {product, 
    pagina,
    getProduct, 
    buscando, 
    endIndex, 
    itemsTotales,
    setBuscando, 
    busqueda, 
    setBusqueda,
    handlePaginaAnterior, 
    handlePaginaSiguiente,
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


  return (
    <div className='p-2 bg-white dark:bg-zinc-800 rounded-box w-11/12 m-auto shadow-xl mb-2  '>
      <div className='flex flex-col text-center text-red-800 mb-2 py-4 gap-2'>
       <input
  type='text'
  className='border ring-1 border-red-800 ring-red-800 bg-white focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 w-8/12 m-auto border px-4 py-1 rounded-lg placeholder:italic'
  placeholder='Buscar un restaurante..'
  value={busqueda}
  onChange={e => setBusqueda(e.target.value)}
/>
      </div>
    <div className='rounded-lg grid grid-cols-2 gap-5 text-black'>
  {product.length === 0 ? (
    <p className='w-80 m-auto px-12 py-10 text-black text-lg'>Restaurante no encontrado..</p>
  ) : (
    product.map((item, index) => (
     <div class="bg-white rounded-lg " key={index}>
  <div class="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-h-8 xl:aspect-w-7">
          <img src={item.url_img_usuario} alt="Foto-restaurante" class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-lg text-center font-aref pb-5 font-bold ">{item.nombre_restaurante}</h3>
          <div className='gap-5 flex  px-2 '>
    <Link to={`/clientePerfil/${item.id_usuario}`} className=' rounded-lg border px-2  shadow-xl border  w-20 flex justify-center py-2 h-8'> <BsSearch/></Link>
    <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-2  bg-white shadow-xl  w-20 flex justify-center py-2 h-8'><GoCodeReview/></Link>
</div>
      </a>

    </div>
  </div>
</div>
    ))
  )}
</div>
<div className='flex justify-between'>
  <button
    className='border px-4 py-1 mt-2 bg-white text-black rounded-lg shadow-xl'
    onClick={handlePaginaAnterior}
    disabled={pagina === 1 || buscando}
  >
    Anterior
  </button>
  <button
    className='border px-4 py-1 mt-2 bg-white text-black rounded-lg shadow-xl'
    onClick={handlePaginaSiguiente}
    disabled={endIndex >= itemsTotales || buscando}
  >
    Siguiente
  </button>
</div>


    </div>
  );
};

export default ListRestauranteMb;
