import {useState, useEffect} from 'react'
import NavBar from '../../../../../components/nabvar/NavBar';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';

const DescuentosDsk = () => {


const [descuentos, setDescuentos] = useState([])

    const getDescuentos = async () => {
      try {
        const accion = {
          "accion": "obtenerDescuentos"
        }
        const respuesta = await clienteAxios.post("/restauranteController.php", accion )
        
        setDescuentos(respuesta.data)
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() =>{
getDescuentos();
 console.log(descuentos);
    },[])


  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth'>
            <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
            </Link>
            <div className='glass w-[80%] h-auto m-auto shadow-xl rounded-lg mt-24 py-8'>
          <Link to='/crearDescuentos' className='w-64 text-white rounded-md p-2 bg-wwe shadow-xl m-20 text-lg font-semibold font-aref '>Crear promocion</Link>
      <p className='text-center  text-3xl font-aref text-wwe font-semibold'>Promociones</p>  
        <div className=' grid grid-cols-4 gap-10  m-auto p-10 '> 
        {
          
              descuentos.map((item,index) => (
                <div className='bg-white text-center text-wwe font-aref font-semibold w-auto text-2xl rounded-lg p-4' key={index}>
                  
                      <div className='card-body border'>
                            <h4 className='text-2xl'>{item.titulo_descuento}</h4>
                      <p className='text-lg'>{item.descripcion}</p>
                       <p className=''>${item.costo}</p>
                      </div>
                </div>
              ))
        }

        </div>
       </div>
    </div>
  )
}

export default DescuentosDsk