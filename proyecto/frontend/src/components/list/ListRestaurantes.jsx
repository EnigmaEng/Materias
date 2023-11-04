import restauranteData from '../../context/restauranteData';
import { useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
import { Link } from 'react-router-dom';

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

    <div className='w-8/12 m-auto px-10 h-8/12 bg-white  p-4 rounded-lg  dark:bg-zinc-800 '>

    <div className='flex flex-col text-center justify-center items-center  mt-2'>
  
    <input type="text" placeholder='Buscar un restaurante..' className='border ring-2 ring-red-800 focus:border-red-800 focus:outline-none text-black focus:ring-2 focus:ring-red-800 border rounded-lg bg-white w-6/12 text-sm px-2 py-2' 
      value={Búsqueda}
  onChange={e => setBusqueda(e.target.value)}
    />
    </div>
      {
        product.length === 0 ? ( 
          <>
        <div className=' py-28'>
        <p className='text-center text-2xl py-24 text-wwe font-semibold'>Restaurante no encontrado</p></div></>) : (

  <div className='grid grid-cols-4 ml-20  py-16 place-content-center gap-5 '>
    {
        product.map((item, index) => (
            <div className='bg-white h-7/12 w-52 rounded-lg shadow-xl   text-center text-black' key={index} >
<img src={item.foto_usuario} alt="logo-restaurante" className='w-full m-auto h-52  rounded-t-lg ' />
<h2 className='text-2xl py-10 text-wwe font-semibold font-aref '> {item.nombre_restaurante}</h2>

<div className='gap-5 flex p-4 '>
    <Link to={`/clientePerfil/${item.id_usuario}`} className=' rounded-lg border px-4   shadow-xl border  w-24 flex justify-center py-3 h-10'> <BsSearch/></Link>
    <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-4  bg-white shadow-xl  w-24 flex justify-center py-3 h-10'><GoCodeReview/></Link>
</div>

      </div>
        ))
      }
           </div>
        )
      }
    <div className='flex justify-between'>
  <button
    className=' px-4 py-1 mt-2 bg-white bg-zinc-100 border dark:bg-wwe dark:border-none dark:text-white text-black rounded-lg shadow-xl'
    onClick={handlePaginaAnterior}
    disabled={pagina === 1 || buscando}
  >
    
    Anterior
  </button>
  <button
    className=' px-4 py-1 mt-2 bg-zinc-100 border dark:border-none text-black dark:bg-wwe dark:text-white rounded-lg shadow-xl'
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