
import { useEffect } from 'react';
import restauranteData from '../../context/restauranteData';
import {BsSearch } from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
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
    <div className='p-2 bg-white rounded-box w-11/12 m-auto shadow-xl mb-2 border '>
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
      <div key={index} className='border shadow-xl rounded-box '>
        <img src="" alt="foto-restaurantes" className='w-full border rounded-box h-24' />
        <h1 className='text-center text-black font-bold px-6 py-8'>{item.nombre_restaurante}</h1>
        <div className='gap-5 flex mt-4 px-2 py-2'>
    <button className=' rounded-lg border px-2  shadow-xl border  w-20 flex justify-center py-2 h-8'> <BsSearch/></button>
    <button className='rounded-lg border px-2  bg-white shadow-xl  w-20 flex justify-center py-2 h-8'><GoCodeReview/></button>
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
