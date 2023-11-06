import restauranteData from '../../context/restauranteData';
import { useContext, useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import todoContext from '../../context/todoContext';


const ListRestaurantes = () => {
    
    const {product, 
  
    getProduct, 
     
    setBuscando, 
    busqueda, 
    setBusqueda,
    
  } = restauranteData();

  const {turistaVisitaRest, usuario} = useContext(todoContext)
  
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: product.length < 4 ? product.length : 4,
    slidesToScroll: 3,
    
  };

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

    const handleClick = (id_usuario) => {
    const accion = {
    "accion":"turistaVisitaRest",
    "id_usuario_turista": usuario?.id_usuario,
    "id_usuario_rest": id_usuario
} 

  turistaVisitaRest(accion)

  }
    
  return (
    <>

     <div className='w-8/12 m-auto px-10 p-4 rounded-lg '>
      <div className='flex flex-col text-center justify-center items-center mt-2 '>
        <input
          type='text'
          placeholder='Buscar un restaurante..'
          className='border ring-2 ring-red-800 focus:border-red-800 focus:outline-none text-black focus:ring-2 focus:ring-red-800 border rounded-lg bg-white w-6/12 text-sm px-2 py-2'
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>
      {product.length === 0 ? (
        <div className='py-28'>
          <p className='text-center text-2xl py-24 text-wwe font-semibold'>Cargando..</p>
        </div>
      ) : (
        <Slider {...settings}>
         

        
          {product.map((item, index) => (
            
            <div className='bg-white h-6/12  border border-wwe  rounded-lg shadow-xl text-center text-black mt-10' key={index}>
              <img src={item.foto_usuario} alt="logo-restaurante" className='w-full m-auto h-52 rounded-t-lg' />
              <h2 className='text-2xl py-10 text-wwe font-semibold font-aref'>{item.nombre_restaurante}</h2>
              <div className=' flex p-4 gap-5 items-center justify-center'>
                <Link to={`/clientePerfil/${item.id_usuario}`} className='rounded-lg border px-4 shadow-xl border w-24 flex justify-center py-3 h-10'>
                  <BsSearch />
                </Link>
                <button className='bg-wwe  hover:bg-red-700 p-2 rounded-lg text-white' onClick={()=> handleClick(`${item.id_usuario}`)}>Visitar</button>
                <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-4 bg-white shadow-xl w-24 flex justify-center py-3 h-10'>
                  <GoCodeReview />
                </Link>
              </div>
            </div>
          ))}  
        </Slider>
      )}
    </div>
    
    </>
    
  )
}

export default ListRestaurantes