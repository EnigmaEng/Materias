import restauranteData from '../../context/restauranteData';
import { useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'

const ListRestaurantes = () => {
    
    const {product, 
    pagina,
    getProduct, 
    buscando, 
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

    if (busqueda.trim() !== '') {  //si el valor busqueda es distinto de vacio 
      setBuscando(true);
    } else {
      setBuscando(false);
    }
  }, [busqueda]);
    
  return (
    <>

    <div className='w-8/12 m-auto px-10 border shadow-xl p-4 rounded-lg  mb-10 bg-white'>

    <div className='flex flex-col text-center justify-center items-center mb-2 mt-2'>
    
    <input type="text" placeholder='Buscar un restaurante..' className='border ring-2 ring-red-800 focus:border-red-800 focus:outline-none text-black focus:ring-2 focus:ring-red-800 border rounded-lg bg-white w-6/12 text-sm px-2 py-2' 
      value={busqueda}
  onChange={e => setBusqueda(e.target.value)}
    />
    </div>

   
      {
        product.length === 0 ? ( 
        
        <p className='text-center text-2xl py-24 '>Restaurante no encontrado</p>) : (

   <div className=' grid grid-cols-4 ml-20  py-16 place-content-center gap-5 ' >
    {
        product.map((item, index) => (
            <div className='border h-72 w-52 rounded-lg shadow-xl bg-white p-4 text-center text-black' key={index} >
<img src="" alt="logo-restaurante" className='w-full m-auto h-32 mb-4 border ' />
<h2 className='font-bold mb-10 '> {item.nombre_restaurante}</h2>

<div className='gap-5 flex mt-4'>
    <button className=' rounded-lg border px-4  shadow-xl border  w-24 flex justify-center py-3 h-10'> <BsSearch/></button>
    <button className='rounded-lg border px-4  bg-white shadow-xl  w-24 flex justify-center py-3 h-10'><GoCodeReview/></button>
</div>

      </div>
        ))
      }
           </div>
        )

      }
    
    
    
   
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
    disabled={pagina === 2 || buscando}
  >
    Siguiente
  </button>
</div>
    </div>
    
    </>
    
  )
}

export default ListRestaurantes