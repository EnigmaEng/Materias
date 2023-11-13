import restauranteData from '../../context/restauranteData';
import { useContext, useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import {GoCodeReview} from 'react-icons/go'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import todoContext from '../../context/todoContext';
import { AiOutlineSearch } from 'react-icons/ai'; 
import { useRef } from 'react';



const ListRestaurantes = () => {
    
    const {product, 
  
    getProduct, 
     
    setBuscando, 
    busqueda, 
    setBusqueda,
    
  } = restauranteData();

  const {turistaVisitaRest, usuario} = useContext(todoContext)
  


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

    const containerRef = useRef(null);

  const handleWheel = (event) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  };
    
  return (
    <>

       <div className='mt-20 '>
        <div className='flex flex-col text-center justify-center items-center mt-2 '>
<div className="group relative w-7/12 mx-auto">
  <div className="absolute inset-y-0 left-10 flex items-center">
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="text-wwe pointer-events-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
  </div>
  <input
    type="text"
    className="focus:ring-2 focus:ring-wwe focus:outline-none appearance-none w-full md:w-11/12 text-sm leading-6 text-black placeholder-gray-500 bg-white rounded-md py-2 pl-10 pr-3 ring-1 ring-wwe shadow-sm mx-auto"
    aria-label="Filter projects"
    placeholder="Buscar restaurante..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
</div>




      </div>
      

  
      {
    
    
      product.length === 0 ? (
        <div className='py-28'>
          <p className='text-center text-2xl py-24 text-wwe font-semibold'>Cargando..</p>
        </div>
       ): 
      (
        

<>
<div ref={containerRef} className='overflow-x-scroll scrollbar-hidden ml-2' onWheel={handleWheel}>


<div className='flex gap-4 '>
        
          {product.map((item, index) => (
            
           <div className=" space-y-10 font-sans mt-10 mb-24 space-x-40  border bg-white rounded-xl h-56 flex-shrink-0 " key={index}>
  <div className="flex-none w-56 relative ">
    <img src={item.foto_usuario} alt="" className="absolute inset-0  h-56  object-cover top-0 rounded-l-xl  w-40"  />
  </div>
 
    <div className="flex flex-wrap p-3 ">
      <h1 className="flex-auto font-aref font-semibold text-3xl text-wwe text-center ">
        {item.nombre_restaurante}
      </h1>
    
    
    </div>
   
    <div className="flex p-4 justify-between gap-5 text-sm font-medium m-5 p-2 mt-20">
      <Link to={`/clientePerfil/${item.id_usuario}`} className='rounded-lg border px-2 shadow-xl border text-wwe w-20 flex justify-center py-2'><BsSearch/></Link>
      <button onClick={() => handleClick(`${item.id_usuario}`)} className='bg-wwe rounded-md text-white w-20 shadow-xl hover:bg-red-700'>Visitar</button>
                      <Link to={`/crearResenia/${item.id_usuario}`} className='rounded-lg border px-2 bg-white  text-wwe shadow-xl w-20 flex justify-center py-2'><GoCodeReview/></Link>
                      
    </div>
  

</div>
          ))}
   </div> </div> </>


)
      }
          
    </div>
    
    </>
    
  )
}

export default ListRestaurantes


