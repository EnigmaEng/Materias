
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
    <div className='p-2  w-11/12 m-auto   rounded-lg mb-2  '> 

      <div className='flex flex-col text-center text-red-800 mb-2 py-4 gap-2'>
       <input
  type='text'
  className='border ring-1 border-red-800 ring-red-800 bg-white focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 w-8/12 m-auto border px-4 py-1 rounded-lg placeholder:italic'
  placeholder='Buscar un restaurante..'
  value={busqueda}
  onChange={e => setBusqueda(e.target.value)}
/>
      </div>
     
    <div className=' grid grid-cols-1 gap-2 bg-white p-2 rounded-md text-black'>

{/* Si no hay restauranes */}
  {product.length === 0 ? (
    <p className='w-80 m-auto px-12 py-10 text-black text-lg'>Restaurante no encontrado..</p>
  ) 
  
  : (
    product.map((item, index) => (
     <div className="bg-white flex border " key={index}>
      <div className=''>
         <img src={item.foto_usuario} alt="foto-rest" className='w-full h-24 p-2 rounded-xl ' />
      </div>
     
 
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2">

        <h3 className=" text-lg text-center font-aref font-bold ">{item.nombre_restaurante}</h3>
          <div className='gap-5 flex justify-center space-x-4 px-2 '>
    <Link to={`/clientePerfil/${item.id_usuario}`} className=' rounded-lg border px-2  shadow-xl border  w-20 flex justify-center py-2 h-auto'> <BsSearch/></Link>
    <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-2  bg-white shadow-xl  w-20 flex justify-center py-2 h-auto'><GoCodeReview/></Link>

     

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
